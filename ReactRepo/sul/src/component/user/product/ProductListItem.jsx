import React from 'react';
import styled from 'styled-components';

const StyledItemDiv = styled.div`
    display: grid;
    grid-template-rows: 7fr 1fr 1fr 1fr;
    justify-content: center;
    align-items: center;
    text-align: center;
`

const ProductListItem = () => {
    return (
        <StyledItemDiv>
            <img
                src= "https://cogulmars.cafe24.com/img/04about_img03.png"
                alt="이미지ㅋㅋ"
                width='295px'
                height='300px'
            />
            <div>제목</div>
            <div>가격</div>
            <div>평점</div>
            
        </StyledItemDiv>
    );
};

export default ProductListItem;