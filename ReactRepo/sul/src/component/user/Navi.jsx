import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledNaviDiv = styled.div`
    width:100%;
    height: 40px;
    display: flex;
    align-items: center;
    background-color: yellow;

    .navi_wrap{
        display: flex;
        flex-direction: row;
        font-size:20px;
    }
    .navi_wrap>div{
        margin-left: 30px;
    }
    .navi_wrap:nth-child(1){
        margin-left: 150px;
    }
    
`

const Navi = () => {
    return (
        <StyledNaviDiv>
            <div className='navi_wrap'>
                <div>
                    <Link to = "/product/home">홈</Link>
                </div>
                <div>
                    <Link to = "/product/takju">탁주</Link>
                </div>
                <div>
                    <Link to = "/product/chungju">약·청주</Link>
                </div>
                <div>
                    <Link to = "/product/wine">과실주</Link>
                </div>
                <div>
                    <Link to = "/product/soju">증류수</Link>
                </div>
            </div>
        </StyledNaviDiv>
    );
};

export default Navi;