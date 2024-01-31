import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const StyledAdminUserDetailDiv = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;

    table {
        width: 100%;
        height: 20%;
        margin-top: 80px;
        border-top: solid 1px;
        border-collapse: collapse;
    }
    
    td {
        height: 40px;
        border-bottom: solid 1px;
        text-align: center;
    }

    select {
        height: 25px;
    }

    .detail_content {
        height: 100px;
    }

    .btn {
        width: 80%;
        display: flex;
        justify-content: space-between;
        margin-top: 50px;
    }

    .edit_button {
        width: 100px;
        height: 50px;
        border: none;
        border-radius: 10px;
    }

    .back_button {
        width: 100px;
        height: 50px;
        border: none;
        border-radius: 10px;
    }


`;

const AdminUserDetail = () => {

    const navigate = useNavigate();

    const location = useLocation();
    const memberVo = location.state.vo;

    const [vo , setVo] = useState(memberVo);
    const [editedDelYn , setEditedDelYn] = useState(memberVo.delYn);

    // 뒤로가기 버튼 클릭 시 동작 함수
    const handleBack = () => {
        navigate("/admin/User/list")
    };

    // 수정하기 버튼 클릭 시 동작 함수
    const handleDelete = () => {
        const editedVo = {
            ...vo,
            delYn: editedDelYn,
    };

    fetch("http://127.0.0.1:8888/app/adminMember/delete", {
      method: 'post',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(editedVo)
    })
      .then((resp) => resp.json())
      .then((data) => {
        if (data.msg === "good") {
            setVo(editedVo);
            alert("회원 수정 완료");
          navigate("/admin/User/list");
        } else {
          alert("회원 수정 실패");
        }
      })
      .catch((e) => {
        alert("회원 수정 중 에러 발생");
      });
    };

    // select 값이 변경될 때 동작 함수
    const handleSelectChange = (event) => {

        const selectedValue = event.target.value;
  
    // 선택한 값에 따라 delYn 값 변경
        const newDelYn = selectedValue === "Y" ? "Y" : "N";
  
        setEditedDelYn(newDelYn);
    };

    return (
        <StyledAdminUserDetailDiv>
            <table>
                <thead>
                    <tr>
                        <td className=''>회원번호</td>
                        <td className=''>아이디</td>
                        <td className=''>닉네임</td>
                        <td className=''>가입일자</td>
                        <td className=''>수정일자</td>

                    </tr>
                    <tr className='detail_content'>
                        <td className=''>{memberVo.memberNo}</td>
                        <td className=''>{memberVo.id}</td>
                        <td className=''>{memberVo.nick}</td>
                        <td className=''>{memberVo.enrollDate}</td>
                        <td className=''>{memberVo.modifyDate}</td>
                    </tr>
                    <tr>
                        <td className=''>이름</td>
                        <td className=''>이메일</td>
                        <td className=''>전화번호</td>
                        <td className=''>주소</td>
                        <td className=''>탈퇴여부</td>
                    </tr>
                    <tr className='detail_content'>
                        <td className=''>{memberVo.name}</td>
                        <td className=''>{memberVo.email}</td>
                        <td className=''>{memberVo.tel}</td>
                        <td className=''>{memberVo.address}</td>
                        <td>
                            <select className='' value={editedDelYn} onChange={handleSelectChange}>
                                <option value="N">N</option>
                                <option value="Y">Y</option>
                            </select>
                        </td>
                    </tr>
                </thead>
            </table>
                <div className='btn'>
                    <input style={{backgroundColor: '#ffe23dfb'}} className='back_button' type="submit" value="뒤로가기" onClick={handleBack} />
                    <input style={{backgroundColor: '#ffe23dfb'}} className='edit_button' type="submit" value="수정하기" onClick={handleDelete} />
                </div>
        </StyledAdminUserDetailDiv>
    );
};

export default AdminUserDetail;