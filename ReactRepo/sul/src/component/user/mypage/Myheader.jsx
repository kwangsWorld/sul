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
        margin-top: 13%;
        border: 3px solid lightgray;
        width: 75%;
        height: 90px;
        margin-left: 15%;
    }
    & > ul > li{
        list-style: none;
        padding-left: 6%;
    }
    & > ul > li:nth-child(2){
        border-left: 2px solid lightgray;
        margin-left: 3%;
    }
    & > ul > li:nth-child(7){
        margin-left: 3%;
        padding-right: 8%;
    }
    a{
        text-decoration: none;
        color: black;
        font-weight: bold;
    }
`;

const Myheader = () => {
    return (
        <StyledMyheaderDiv>
            <ul>
                <li><Link to='/mypage/info'>누구님</Link></li>
                <li><Link to='/mypage/info'>💸주문내역</Link></li>
                <li><Link to='/mypage/info'>💱취소내역</Link></li>
                <li><Link to='/mypage/info'>⭐리뷰</Link></li>
                <li><Link to='/mypage/info'>👤회원정보</Link></li>
                <li><Link to='/mypage/info'>🛻배송지관리</Link></li>
                <li><Link to='/mypage/info'>📞고객센터</Link></li>
            </ul>
        </StyledMyheaderDiv>
    );
};

export default Myheader;