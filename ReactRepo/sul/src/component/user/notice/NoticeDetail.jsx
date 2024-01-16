import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const StyledNoticeDetailDiv = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-align: center;
        h1{
            padding-bottom: 2%;
        }

        table{
            width: 60%;
            height: 70%;
            font-size: 16px;
            border-collapse: collapse;
            border: 2px solid black;
        }

        td {
            margin: auto;
        }

        .top {
            width: 100%;
            height: 50%;
            display: grid;
            grid-template-columns: 2.5fr 2.5fr 2.5fr 2.5fr 2.5fr;
        }

        .mid {
            width: 100%;
            height: 50%;
            display: grid;
            grid-template-columns: 2.5fr 2.5fr 2.5fr 2.5fr 2.5fr;
            border-top: 1px solid black;
        }

        .bottom {
            width: 100%;
            height: 80%;
            border-top: 2px solid black;
        }

        .back_button {
            width: 100px;
            height: 50px;
            margin-top: 30px;
            font-weight: bold;
        }
`;

const NoticeDetail = () => {

    const navigate = useNavigate();

    const location = useLocation();
    const noticeVo = location.state.vo;
    const noticeNo = noticeVo.noticeNo;
    console.log(noticeVo);
    console.log(noticeNo);

    // 조회수 증가
    const IncreaseHit = () => {
        fetch("http://127.0.0.1:8888/app/notice/increaseHit" , {
            method: 'post' ,
            headers: {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify({noticeNo})
        })
        .then( (resp) => {return resp.json()} )
    };

    // 렌더링
    useEffect( () => {
        IncreaseHit();
    }, []);


    // 뒤로가기 버튼 클릭 시 동작 함수
    const handleBack = () => {
        navigate("/notice/list")
    };

    return (
        <StyledNoticeDetailDiv>
            <h1>
                공지사항
            </h1>
            <table>
                <thead>
                    <tr className='top'>
                        <td>제목</td>
                        <td>조회수</td>
                        <td>작성자</td>
                        <td>작성일자</td>
                        <td>수정일자</td>
                    </tr>
                    <tr className='mid'>
                        <td>{noticeVo.title}</td>
                        <td>{noticeVo.inquiry}</td>
                        <td>{noticeVo.adminName}</td>
                        <td>{noticeVo.enrollDate}</td>
                        <td>{noticeVo.updateDate}</td>
                    </tr>
                    </thead>
                <tr className='bottom'>
                    <td className='content'>{noticeVo.content}</td>
                </tr>
            </table>
            <input style={{backgroundColor: '#ffe23dfb'}} className='back_button' type="submit" value="뒤로가기" onClick={handleBack} />
        </StyledNoticeDetailDiv>
    );
};

export default NoticeDetail;