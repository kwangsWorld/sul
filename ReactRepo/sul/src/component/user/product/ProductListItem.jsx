import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const StyledItemDiv = styled.div`
    display: inline-block;
    justify-content: center;
    align-items: center;
    text-align: center;

    .detail_box{
        cursor: pointer;
    }

    .detail_box >div{
    }

    .image{
        border-radius: 10px;
        margin-bottom: 10px;
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
            <img    className='image'
                    src= "https://cogulmars.cafe24.com/img/04about_img03.png"
                    alt="이미지ㅋㅋ"
                    width='295px'
                    height='300px'
            />
                <div>이름 : {name}</div>
                <div>가격 : {price}원</div>
                <div>평점 : {rating}점</div>
            </div>

            
        </StyledItemDiv>
    );
};

export default ProductListItem;