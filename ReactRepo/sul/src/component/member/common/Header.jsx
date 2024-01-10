import React from 'react';
import styled from 'styled-components';

const StyledHeaderDiv = styled.div`
    width: 100%;
    height: 56px;
    padding: 0px 69px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    box-sizing: border-box;

    .icon{
        font-size: 25px;
        font-style: italic;
        font-weight: bolder;

    }
    .header_right{
        display: flex;
        flex-direction: row;
    }
    .join_login{
        margin-right: 20px;
    }
`

const Header = () => {
    return (
        <StyledHeaderDiv>
            <div className='header_left'>
                <div className='icon'>SULDAMA</div>
            </div>
            <div className='header_center'>
                검색: <input type="text" placeholder='무엇을 찾고 계신가요?'/>
            </div>
            <div className='header_right'>
                <div className='join_login'>회원가입/로그인</div>
                <img width = "30px" height = "30px" src="https://artfeel.co.kr/web/product/big/o_Icon_011.jpg" alt="장바구니"></img>
            </div>
        </StyledHeaderDiv>
    );
};

export default Header;