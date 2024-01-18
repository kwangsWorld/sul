import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledNaviDiv = styled.div`
    min-width: 1500px;
    width:100%;
    height: 40px;
    display: flex;
    align-items: center;
    background-color: white;

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

    .board {
        width: 200px;
        display: flex;
        justify-content: space-between;
        flex-direction: row;
        font-size:20px;
        margin-left: 760px;
    }
    
`

const Navi = () => {
    return (
        <StyledNaviDiv>
            <div className='navi_wrap'>
                <div>
                    <Link to = "/product/list">홈</Link>
                </div>
                <div>
                    <Link to = "/product/list/1">탁주</Link>
                </div>
                <div>
                    <Link to = "/product/list/2">약·청주</Link>
                </div>
                <div>
                    <Link to = "/product/list/3">과실주</Link>
                </div>
                <div>
                    <Link to = "/product/list/4">증류수</Link>
                </div>
            </div>
        </StyledNaviDiv>
    );
};

export default Navi;