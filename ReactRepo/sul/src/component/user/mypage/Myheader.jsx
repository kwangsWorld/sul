import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledMyheaderDiv = styled.div`
width: 100%;
height: 100%;
    & > ul{
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 5%;
        border: 3px solid lightgray;
        width: 85%;
        height: 90px;
        margin-left:8%;
    }
    & > ul > li{
        list-style: none;
        padding-left: 4%;
    }
    & > ul > li:nth-child(2){
        border-left: 2px solid lightgray;
        margin-left: 3%;
    }
    & > ul > li:nth-child(8){
        padding-right: 8%;
    }
    a{
        text-decoration: none;
        color: black;
        font-weight: bold;
    }
    
`;

const Myheader = () => {

    const loginInfo = JSON.parse(sessionStorage.getItem('loginMemberVo'));

    return (
        <StyledMyheaderDiv>
            <ul>
                <li><Link to='/mypage/info'>{loginInfo.nick} 님</Link></li>
                <li><Link to='/mypage/myorder'>💸주문내역</Link></li>
                <li><Link to='/mypage/mycancel'>💱취소내역</Link></li>
                <li><Link to='/mypage/info'>👤회원정보</Link></li>
                <li><Link to='/mypage/myaddress'>🛻배송지관리</Link></li>
                <li><Link to='/csboard/list'>📞고객센터</Link></li>
                <li><Link to='/notice/list'>📒공지사항</Link></li>
                <li><Link to='/mypage/mycom'>💬커뮤니티</Link></li>
            </ul>
        </StyledMyheaderDiv>
    );
};

export default Myheader;