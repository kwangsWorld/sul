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

const ProductListItem = ({name, price, productNo, image}) => {

    const navigate =  useNavigate();
    return (
        <StyledItemDiv>
            <div className='detail_box'
                onClick={() =>{
                    navigate("/product/detail/"+ productNo);
                }}>
                <img src={image} alt="사진" width='295px' height='300px'/>
                <div>이름 : {name}</div>
                <div>가격 : {price}원</div>
                {/* <div>평점 : {rating}점</div> */}
            </div>

            
        </StyledItemDiv>
    );
};

export default ProductListItem;