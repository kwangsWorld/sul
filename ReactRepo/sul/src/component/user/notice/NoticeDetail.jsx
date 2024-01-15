import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const StyledNoticeDetailDiv = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
        h1{
            padding-bottom: 2%;
        }
        table{
            width: 60%;
            height: 60%;
            font-size: 16px;
            border-collapse: collapse;
            border: 2px solid black;
        }
        table > tr:nth-child(2) {
            border-bottom: 2px solid black;
        }

        tr {

        }

        .top {
            width: 100%;
            height: 20%;
        }

        .mid {
            width: 100%;
            height: 20%;
        }

        .bottom {
            width: 100%;
            height: 60%;
        }

        .top_td {
            width: 80px;
        }

        .mid_td {
            width: 80px;
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
                <tr className='top'>
                    <td className='top_td'>번호</td>
                    <td >{noticeVo.noticeNo}</td>
                    <td className='top_td'>제목</td>
                    <td>{noticeVo.title}</td>
                    <td className='top_td'>조회수</td>
                    <td>{noticeVo.inquiry}</td>
                </tr>
                <tr className='mid'>
                    <td className='mid_td'>작성자</td>
                    <td>{noticeVo.adminName}</td>
                    <td className='mid_td'>작성일자</td>
                    <td>{noticeVo.enrollDate}</td>
                    <td className='mid_td'>수정일자</td>
                    <td>{noticeVo.updateDate}</td>
                </tr>
                <tr className='bottom'>
                    <td>내용</td>
                    <td className='content'>{noticeVo.content}</td>
                </tr>
            </table>
            <input style={{backgroundColor: '#ffe23dfb'}} className='back_button' type="submit" value="뒤로가기" onClick={handleBack} />
        </StyledNoticeDetailDiv>
    );
};

export default NoticeDetail;