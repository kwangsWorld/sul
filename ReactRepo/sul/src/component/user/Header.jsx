import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const StyledHeaderDiv = styled.div`
    width: 100%;
    height: 56px;
    padding: 0px 69px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    box-sizing: border-box;
    border-bottom: 2px solid pink;

    /* position: fixed;
    top: 0; */

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
        display: flex;
        flex-direction: row;
        margin-right: 20px;
        font-size: 20px;
    }

    .join{
        margin-right: 20px;
    }



    .header_search{
        width:500px;
        height: 30px;
        border-radius: 10px;
        border: 1px solid gray;
    }
`

const Header = () => {
    return (
        <StyledHeaderDiv>
            <div className='header_left'>
                <div className='icon'>SULDAMA</div>
            </div>
            <div className='header_center'>
                <input className='header_search' type="text" placeholder='지우야, 또 술먹게? 어떤술 찾아줘?'/>
                {/* <FontAwesomeIcon icon={faMagnifyingGlass} /> */}
            </div>
            <div className='header_right'>
                <div className='join_login'>
                    <div className='join'>회원가입</div>
                    <div>
                        <Link to = "/member/login">로그인</Link>
                    </div>
                </div>
                <img width = "30px" height = "30px" src="https://artfeel.co.kr/web/product/big/o_Icon_011.jpg" alt="장바구니"></img>
            </div>
        </StyledHeaderDiv>
    );
};

export default Header;