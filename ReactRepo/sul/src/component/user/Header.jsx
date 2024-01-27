import React, { useContext, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { MemberContext } from '../../context/MemberContext';

const StyledHeaderDiv = styled.div`
    min-width: 1500px;
    position: sticky;
    top: 0;
    z-index: 999;
    background-color: white;
    
    h4{
       padding-right: 5%;
    }
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
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .nick{
        width: 30%;
        margin-right: 20px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .header_search {
        width: 500px;
        height: 30px;
        border-radius: 10px;
        border: 1px solid gray;
    }

    .header_center {
        display: flex;
        height: 30px;
    }

    .header_button {
        width: 70px;
        margin-top: 5px;
        margin-left: 10px;
        border-radius: 10px;
        border: 1px solid gray;
    }

    .cart{
        margin-top: 16%;
    }

    .out{
        margin-top: 2%;
        padding-left: 25%;
    }

    .log{
        font-size: 14px;
    }

    button{
        border: none;
        background-color: white;
        font-weight: bold;
    }
`;

const Header = () => {

    const {loginMember, setLoginMember} = useContext(MemberContext);
 
    const navigate = useNavigate();


      // 페이지 로드 시 세션 스토리지에서 로그인 정보 가져오기
      const [loginInfo, setLoginInfo] = useState(() => {
        const loginInfoStr = sessionStorage.getItem('loginMemberVo');
        return JSON.parse(loginInfoStr) || null;
    });

    console.log("헤더");
    console.log("로그인", loginInfo);

    const handleLogout = () => {
        sessionStorage.removeItem("loginMemberVo");
        setLoginInfo(null);
        setLoginMember(null);
        navigate("/product/list")
    };

    const [input, setInput] = useState("");
    const [vo , setVo] = useState({});

    // 검색버튼 동작 함수
    const handleSearch = () => {
        console.log("handleSearch called...............");
        console.log("줘야해222222" , vo);
        navigate('/product/search', { state: {pName : input} });
    };

    console.log("줘야해" , vo);

    // useEffect( () => {
    //     handleSearch();
    // }, [pageVo])

    return (
        <StyledHeaderDiv>
            <div className='header_wrap'>
                <div className='header_left'>
                    <div className='icon'>
                       
                        <Link  to="/product/list">SULDAMA</Link>
                    </div>
                </div>
                <div className='header_center'>
                    <div>
                        <input className='header_search' type="text" value={input} onChange={ (event) => {
                            return setInput(event.target.value);
                        }} placeholder='지우야, 또 술먹게? 어떤술 찾아줘?' />
                    </div>
                    <div>
                        <button class="header_button" onClick={handleSearch}>검색</button>
                    </div>
                </div>
                <div className='header_right'>
                    <div className='join_login'>
                        {loginMember === null
                        ? 
                        <>
                            <Link to="/admin/member/first">👤</Link>
                            <div className='join'>
                                <Link className='log' to="/member/joinfirst">회원가입</Link>
                            </div>
                            <div>
                                <Link className='log' to="/member/login">로그인</Link>
                            </div>
                        </>
                         : 
                        <>
                            <div className='nick'>
                                <Link to="/mypage/Info">
                                    <h4>{loginMember.nick}</h4>
                                </Link>
                                <Link className='com' to="/community/comlist">community</Link>
                            </div>
                            <div className='out'>
                                <button className='btn' onClick={handleLogout}>로그아웃</button>
                                <img
                                    className='cart'
                                    width="30px"
                                    height="30px"
                                    src="https://artfeel.co.kr/web/product/big/o_Icon_011.jpg"
                                    alt="장바구니"
                                    onClick={() => {
                                        navigate("/cart/list");
                                }}
                            />
                            </div>
                            
                        </>
                        }
                    </div>
                    
                </div>
            </div>
        </StyledHeaderDiv>
    );
};

export default Header;