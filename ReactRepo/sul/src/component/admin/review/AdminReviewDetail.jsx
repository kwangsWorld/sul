import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const StyledAdminReviewDetailDiv = styled.div`
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

const AdminReviewDetail = () => {

    const navigate = useNavigate();

    const location = useLocation();
    const reviewVo = location.state.vo;

    const [vo , setVo] = useState(reviewVo);
    const [editedDelYn , setEditedDelYn] = useState(reviewVo.delYn);

    // 뒤로가기 버튼 클릭 시 동작 함수
    const handleBack = () => {
        navigate("/admin/review/list")
    };

    // 삭제하기 버튼 클릭 시 동작 함수
    const handleDelete = () => {
        const editedVo = {
            ...vo,
            delYn: editedDelYn,
    };

    fetch("http://127.0.0.1:8888/app/adminReview/delete", {
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
            alert("리뷰 수정 완료");
          navigate("/admin/review/list");
        } else {
          alert("리뷰 수정 실패");
        }
      })
      .catch((e) => {
        alert("리뷰 수정 중 에러 발생");
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
        <StyledAdminReviewDetailDiv>
            <table>
                <thead>
                    <tr>
                        <td className=''>리뷰번호</td>
                        <td className=''>닉네임</td>
                        <td className=''>상품이름</td>
                        <td className=''>등록일자</td>
                        <td className=''>삭제여부</td>

                    </tr>
                    <tr className='detail_content'>
                        <td className=''>{reviewVo.reviewNo}</td>
                        <td className=''>{reviewVo.nick}</td>
                        <td className=''>{reviewVo.pName}</td>
                        <td className=''>{reviewVo.enrollDate}</td>
                        <td>
                            <select className='' value={editedDelYn} onChange={handleSelectChange}>
                                <option value="N">N</option>
                                <option value="Y">Y</option>
                                </select>
                        </td>
                        
                    </tr>
                    <tr>
                        <td className=''>이미지</td>
                        <td className=''>내용</td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr className='detail_content'>
                        <td className=''><img src={reviewVo.img} alt="사진" width='200px' height='200px'/></td>
                        <td className=''>{reviewVo.content}</td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    
                </thead>
            </table>
                <div className='btn'>
                    <input style={{backgroundColor: '#ffe23dfb'}} className='back_button' type="submit" value="뒤로가기" onClick={handleBack} />
                    <input style={{backgroundColor: '#ffe23dfb'}} className='edit_button' type="submit" value="수정하기" onClick={handleDelete} />
                </div>
        </StyledAdminReviewDetailDiv>
    );
};

export default AdminReviewDetail;