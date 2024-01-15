import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const StyledAdminNoticeDetailDiv = styled.div`
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

    .detail_wrap {
        width: 100%;
        height: 70%;
    }

    .detail_title {
        width: 100%;
        height: 10%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        box-sizing: border-box;
        border-bottom: solid 1px;
    }

    .detail_content {
        width: 100%;
        height: 80%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        box-sizing: border-box;
    }

    .btn {
        width: 80%;
        display: flex;
        justify-content: space-between;
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

const AdminNoticeDetail = () => {

    const navigate = useNavigate();

    const location = useLocation();
    const noticeVo = location.state.vo;
    console.log(noticeVo);

    const [vo , setVo] = useState(noticeVo);
    const [editedTitle , setEditedTitle] = useState(noticeVo.title);
    const [editedContent , setEditedContent] = useState(noticeVo.content);
    const [editedDelYn , setEditedDelYn] = useState(noticeVo.delYn);

    // 뒤로가기 버튼 클릭 시 동작 함수
    const handleBack = () => {
        navigate("/admin/adminNotice/list")
    };

    // 수정하기 버튼 클릭 시 동작 함수
    const handleEdit = () => {
        const editedVo = {
            ...vo,
            title: editedTitle,
            content: editedContent,
            delYn: editedDelYn,
    };

    fetch("http://127.0.0.1:8888/app/adminNotice/edit", {
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
            alert("공지사항 수정 완료");
          navigate("/admin/adminNotice/list");
        } else {
          alert("공지사항 수정 실패");
        }
      })
      .catch((e) => {
        alert("공지사항 수정 중 에러 발생");
      });
    };

    // select 값이 변경될 때 동작 함수
    const handleSelectChange = (event) => {

        const selectedValue = event.target.value;
  
    // 선택한 값에 따라 delYn 값 변경
        const newDelYn = selectedValue === "Y" ? "Y" : "N";
  
        setEditedDelYn(newDelYn);
    };

    // content 값이 변경될 때 동작 함수
    const handleContentChange = (event) => {
        setEditedContent(event.target.value);
    };
    
    // title 값이 변경될 때 동작 함수
    const handleTitleChange = (event) => {
        setEditedTitle(event.target.value);
    };

    return (
        <StyledAdminNoticeDetailDiv>
            <table>
                <thead>
                    <tr>
                        <td className=''>번호</td>
                        <td className=''>공개여부</td>
                        <td className=''>조회수</td>
                        <td className=''>작성일자</td>
                        <td className=''>수정일자</td>
                    </tr>
                    <tr>
                        <td className=''>{noticeVo.noticeNo}</td>
                        <td>
                            <select className='' value={editedDelYn} onChange={handleSelectChange}>
                                <option value="N">N</option>
                                <option value="Y">Y</option>
                                </select>
                                </td>
                        <td className=''>{noticeVo.inquiry}</td>
                        <td className=''>{noticeVo.enrollDate}</td>
                        <td className=''>{noticeVo.updateDate}</td>
                    </tr>
                </thead>
            </table>
                <div className='detail_wrap'>
                    <textarea className='detail_title' name='title' value={editedTitle} onChange={handleTitleChange}>
                        {noticeVo.title}
                    </textarea>
                    <textarea className='detail_content' name='content' value={editedContent} onChange={handleContentChange}>
                        {noticeVo.content}
                    </textarea>
                </div>
                <div className='btn'>
                    <input style={{backgroundColor: '#ffe23dfb'}} className='back_button' type="submit" value="뒤로가기" onClick={handleBack} />
                    <input style={{backgroundColor: '#ffe23dfb'}} className='edit_button' type="submit" value="수정하기" onClick={handleEdit} />
                </div>
        </StyledAdminNoticeDetailDiv>
    );
};

export default AdminNoticeDetail;