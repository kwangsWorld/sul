import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const StyledItemDiv = styled.div`
    display: grid;
    grid-template-rows: 7fr 1fr 1fr 1fr;
    justify-content: center;
    align-items: center;
    text-align: center;
`

const ProductListItem = ({a, b, c, no}) => {

    const navigate =  useNavigate();
    return (
        <StyledItemDiv>
            <img
                src= "https://cogulmars.cafe24.com/img/04about_img03.png"
                alt="이미지ㅋㅋ"
                width='295px'
                height='300px'
                onClick={() =>{
                    navigate("/product/detail/"+ no);
                }}
            />
            <div>{a}</div>
            <div>{b}</div>
            <div>{c}</div>
            
        </StyledItemDiv>
    );
};

export default ProductListItem;