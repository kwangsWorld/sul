import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const StyledItemDiv = styled.div`
    display: grid;
    grid-template-rows: 7fr 1fr 1fr 1fr;
    justify-content: center;
    align-items: center;
    text-align: center;

    .detail_box{
        cursor: pointer;
    }
`

const ProductListItem = ({name, price, rating, productNo}) => {

    const navigate =  useNavigate();
    return (
        <StyledItemDiv>
            <div className='detail_box'
                onClick={() =>{
                    navigate("/product/detail/"+ productNo);
                }}>
            <img
                    src= "https://cogulmars.cafe24.com/img/04about_img03.png"
                    alt="이미지ㅋㅋ"
                    width='295px'
                    height='300px'
            />
                <div>{name}</div>
                <div>{price}</div>
                <div>{rating}</div>
            </div>

            
        </StyledItemDiv>
    );
};

export default ProductListItem;