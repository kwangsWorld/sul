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
        margin-bottom: 10px;
        border-radius: 20%;
    }
`

const ProductListItem = ({name, price, productNo, image}) => {

    const navigate =  useNavigate();
    return (
        <StyledItemDiv>
            <div className='detail_box'
                onClick={() =>{
                    navigate("/product/detail/"+ productNo);
                }}>
                <img className='im' src={image} alt="사진" width='295px' height='300px'/>
                <div>상품명 : {name}</div>
                <div>가격 : {price}원</div>
                {/* <div>평점 : {rating}점</div> */}
            </div>

            
        </StyledItemDiv>
    );
};

export default ProductListItem;