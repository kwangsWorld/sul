import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { MemberContext } from '../../context/MemberContext';

const StyledHeaderDiv = styled.div`
    min-width: 1500px;
    position: sticky;
    top: 0;
    z-index: 999;
    background-color: white;

    .header_wrap {
        width: 100%;
        height: 56px;
        padding: 0px 69px;
        display: flex;
        align-items: center;
        justify-content: space-around;
        box-sizing: border-box;
        border-bottom: 2px solid lightgray;
    }

    .icon {
        font-size: 25px;
        font-style: italic;
        font-weight: bolder;
    }

    .header_right {
        display: flex;
        flex-direction: row;
    }

    .join_login {
        display: flex;
        flex-direction: row;
        margin-right: 20px;
        font-size: 20px;
    }

    .join {
        margin-right: 20px;
    }

    .header_search {
        width: 500px;
        height: 30px;
        border-radius: 10px;
        border: 1px solid gray;
    }
    .btn{
        margin-top: 15%;
    }
    .out{
        margin-top: 13%;
    }
    button{
        border: none;
        background-color: white;
        font-weight: bold;
    }
`;

const Header = () => {

    const {loginMember} = useContext(MemberContext);
 
    const navigate = useNavigate();
    const [loginInfo, setLoginInfo] = useState(JSON.parse(sessionStorage.getItem('loginMemberVo')));

    console.log("헤더");
    console.log("로그인", loginInfo);

    const handleLogout = () => {
        sessionStorage.removeItem("loginMemberVo");
        setLoginInfo(null);
        navigate("/product/list")
    };

    return (
        <StyledHeaderDiv>
            <div className='header_wrap'>
                <div className='header_left'>
                    <div className='icon'>
                        <Link to="/product/list">SULDAMA</Link>
                    </div>
                </div>
                <div className='header_center'>
                    <input className='header_search' type="text" placeholder='지우야, 또 술먹게? 어떤술 찾아줘?' />
                </div>
                <div className='header_right'>
                    <div className='join_login'>
                        {loginMember === null
                        ? 
                        <>
                            <div className='join'>
                                <Link to="/member/joinfirst">회원가입</Link>
                            </div>
                            <div>
                                <Link to="/member/login">로그인</Link>
                            </div>
                        </>
                         : 
                        <>
                            <div className='join'>
                                <Link to="/mypage/Info">
                                    <h4>{loginMember.nick}</h4>
                                </Link>
                            </div>
                            <div className='out'>
                                <button className='btn' onClick={handleLogout}>로그아웃</button>
                            </div>
                            <img
                                className='btn'
                                width="30px"
                                height="30px"
                                src="https://artfeel.co.kr/web/product/big/o_Icon_011.jpg"
                                alt="장바구니"
                                onClick={() => {
                                    navigate("/cart/list");
                                }}
                            />
                        </>
                        }
                    </div>
                    
                </div>
            </div>
        </StyledHeaderDiv>
    );
};

export default Header;
