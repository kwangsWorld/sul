import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
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
        align-items: center;
        flex-direction: column;
        box-sizing: border-box;
        border-bottom: solid 1px;
    }

    .detail_content {
        width: 100%;
        height: 80%;
        display: flex;
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

    // 뒤로가기 버튼 클릭 시 동작 함수
    const handleBack = () => {
        navigate("/adminNotice/list")
};

    // 수정하기 버튼 클릭 시 동작 함수
    const handleEdit = () => {
    navigate("/adminNotice/edit")
};

    // // select 태그 상태설정
    // const [select, setSelect] = useState();

    // fetch 를 이용해서 데이터 준비
    // const [vo , setVo] = useState([]);
    // const loadAdminNoticeDtailVoList = () => {
    //     fetch("http://127.0.0.1:8888/app/adminNotice/detail" , {
    //         method : 'get'
    //     })
    //     .then( (resp) => {return resp.json()} )
    //     .then( (data) => { return setVo(data); } )
    //     ;
    // }

    // useEffect( () => {
    //     loadAdminNoticeDtailVoList();
    // }, [] );

    return (
        <StyledAdminNoticeDetailDiv>
            <table>
                <thead>
                    <tr>
                        <td className=''>번호</td>
                        <td className=''>공개여부</td>
                        <td className=''>수정일자</td>
                        <td className=''>작성일자</td>
                    </tr>
                    <tr>
                        <td className=''>vo.noticeNo</td>
                        <td className=''>vo.updateDate</td>
                        <td className=''>vo.delYn</td>
                        <td className=''>vo.enrollDate</td>
                    </tr>
                </thead>
            </table>
                <div className='detail_wrap'>
                    <div className='detail_title'>
                        vo.title
                    </div>
                    <div className='detail_content'>
                        vo.content
                    </div>
                </div>
                <div className='btn'>
                    <input style={{backgroundColor: '#ffe23dfb'}} className='back_button' type="submit" value="뒤로가기" onClick={handleBack} />
                    <input style={{backgroundColor: '#ffe23dfb'}} className='edit_button' type="submit" value="수정하기" onClick={handleEdit} />
                </div>
        </StyledAdminNoticeDetailDiv>
    );
};

export default AdminNoticeDetail;