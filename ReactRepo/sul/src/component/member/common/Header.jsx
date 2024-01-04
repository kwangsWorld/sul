import React from 'react';
import styled from 'styled-components';

const StyledHeaderDiv = styled.div`
    width: 100%;
    height: 56px;
    padding: 0px 69px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    & > .header_left {
        width:500px;
        height: 50px;
        display: flex;
        box-sizing: border-box;
    }
    & > .header_left > :nth-child(1){
        width:100px;
        height: 50px;
        display: flex;
    }
    & > .header_left > :
`

const Header = () => {
    return (
        <StyledHeaderDiv>
            <div className='header_left'>
                <div className='icon'>icon</div>
                <div className='search'>search</div>
            </div>
            <div className='header_right'>
                <div className='join_login'>회원가입/로그인</div>
                <div className='cart'>장바구니</div>
            </div>
        </StyledHeaderDiv>
    );
};

export default Header;