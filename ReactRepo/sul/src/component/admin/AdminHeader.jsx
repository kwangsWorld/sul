import React from 'react';
import styled from 'styled-components';

const StyledAdminHeaderDiv = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-sizing: border-box;
    border-bottom: 1px solid;

    .icon{
        font-size: 25px;
        font-style: italic;
        font-weight: bolder;

    
    }
    .header_left{
        margin-left: 6%;
    }

    .header_right{
        display: flex;
        flex-direction: row;
    }

    .join_login{
        display: flex;
        flex-direction: row;
        margin-right: 20px;
    }

    .join_login>div{
        display: flex;
        flex-direction: row;
        margin-right: 20px;
    }

    .header_search{
        width:500px;
        height: 30px;
        border-radius: 10px;
        border: 1px solid gray;
        font-weight: bold;
    }
`;

const AdminHeader = () => {
    return (
        <StyledAdminHeaderDiv>
                <div className='header_left'>
                    <div className='icon'>SULDAMA</div>
                </div>
                <div className='header_center'>
                    <input className='header_search' type="text" placeholder='지우야, 또 술먹게? 어떤술 찾아줘?'/>
                </div>
                <div className='header_right'>
                    <div className='join_login'>
                        <div>회원가입</div>
                        <div>로그인</div>
                    </div>
                    <img width = "30px" height = "30px" src="https://artfeel.co.kr/web/product/big/o_Icon_011.jpg" alt="장바구니"></img>
                </div>
        </StyledAdminHeaderDiv>
    );
};

export default AdminHeader;