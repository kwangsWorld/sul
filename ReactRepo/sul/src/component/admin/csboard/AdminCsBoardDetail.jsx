import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const StyledAdminCsBoardDetailDiv = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;

    table {
        width: 100%;
        height: 20%;
        margin-top: 0;
        border-collapse: collapse;
    }
    
    & > table > thead > tr > td {
        height: 50px;
        border-bottom: solid 1px;
        text-align: center;
    }

    select {
        height: 25px;
    }

    tbody {
        width: 100%;
        height: 40%;
    }

    .detail_qTitle {
        display: flex;
        align-items: center;
        width: 100%;
        height: 50px;
    }

    .detail_second {
        width: 100%;
        display: flex;
    }

    .detail_qContent {
        width: 50%;
        height: 250px;
    }
    .detail_qImg {
        width: 50%;
        height: 250px;
    }

    .detail_wrap {
        width: 100%;
        height: 30%;
    }

    .detail_csContent {
        width: 100%;
        height: 90%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        box-sizing: border-box;
        margin-top: 20px;
    }

    .btn {
        width: 80%;
        display: flex;
        justify-content: space-between;
        margin-top: 10px;
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

const AdminCsBoardDetail = () => {

    const navigate = useNavigate();

    const location = useLocation();
    const csboardVo = location.state.vo;
    console.log(csboardVo);

    const [vo , setVo] = useState(csboardVo);
    const [editedAnswer , setEditedAnswer] = useState(csboardVo.aContent);
    const [editedDelYn , setEditedDelYn] = useState(csboardVo.aYn);

    // 뒤로가기 버튼 클릭 시 동작 함수
    const handleBack = () => {
        navigate("/admin/csboard/list")
    };

    // 수정하기 버튼 클릭 시 동작 함수
    const handleEdit = () => {
        const editedVo = {
            ...vo,
            aContent: editedAnswer,
            aYn: editedDelYn,
    };

    fetch("http://127.0.0.1:8888/app/adminCsboard/answer", {
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
            alert("고객센터 수정 완료");
          navigate("/admin/csboard/list");
        } else {
          alert("고객센터 수정 실패");
        }
      })
      .catch((e) => {
        alert("고객센터 수정 중 에러 발생");
      });
    };

    // select 값이 변경될 때 동작 함수
    const handleSelectChange = (event) => {

        const selectedValue = event.target.value;
  
    // 선택한 값에 따라 delYn 값 변경
        const newDelYn = selectedValue === "Y" ? "Y" : "N";
  
        setEditedDelYn(newDelYn);
    };

    // Answer 값이 변경될 때 동작 함수
    const handleAnswerChange = (event) => {
        setEditedAnswer(event.target.value);
    };
    
    

    return (
        <StyledAdminCsBoardDetailDiv>
            <table>
                <thead>
                    <tr>
                        <td className=''>번호</td>
                        <td className=''>답변여부</td>
                        <td className=''>닉네임</td>
                        <td className=''>작성일자</td>
                        <td className=''>답변일자</td>
                    </tr>
                    <tr>
                        <td className=''>{csboardVo.qNo}</td>
                        <td>
                            <select className='' value={editedDelYn} onChange={handleSelectChange}>
                                <option value="N">N</option>
                                <option value="Y">Y</option>
                                </select>
                                </td>
                        <td className=''>{csboardVo.nick}</td>
                        <td className=''>{csboardVo.enrollDate}</td>
                        <td className=''>{csboardVo.answerDate}</td>
                    </tr>
                </thead>
            </table>
                <tbody>
                    <tr>
                        <td className='detail_qTitle' name='qTitle'>
                            {csboardVo.qTitle}
                        </td>
                    </tr>
                    <tr className='detail_second'>
                        <td className='detail_qImg' name='qImg'>
                        <img src={csboardVo.qImg} alt="사진" width='100px' height='100px'/>
                        </td>
                        <td className='detail_qContent' name='qContent'>
                            {csboardVo.qContent}
                        </td>
                    </tr>
                </tbody>
                <div className='detail_wrap'>
                    <textarea className='detail_csContent' name='aContent' placeholder='답변을 입력하세요' value={editedAnswer} onChange={handleAnswerChange}>
                        {csboardVo.aContent}
                    </textarea>
                </div>
                <div className='btn'>
                    <input style={{backgroundColor: '#ffe23dfb'}} className='back_button' type="submit" value="뒤로가기" onClick={handleBack} />
                    <input style={{backgroundColor: '#ffe23dfb'}} className='edit_button' type="submit" value="답변완료" onClick={handleEdit} />
                </div>
        </StyledAdminCsBoardDetailDiv>
    );
};

export default AdminCsBoardDetail;