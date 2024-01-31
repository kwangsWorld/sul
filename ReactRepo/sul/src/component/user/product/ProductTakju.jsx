import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const StyledTakjuListDiv = styled.div`
    width: 100vw;
    height: 100vh;
    /* background-color: lightcoral; */
    display: grid;
    grid-template-rows: 0.5fr 4fr 4fr;

    img{
        border-radius: 5%;
    }
    img:hover{
        transform: scale(1.1);
    }
    .second_line, .three_line{
        display: grid;
        grid-template-columns: 2fr 2fr 2fr 2fr 2fr;
        margin-top: 3%;
    }

    .detail_box{
        /* background-color: bisque; */
        display: grid;
        grid-template-rows: 7fr 0.8fr 0.8fr 0.8fr;
        justify-content: center;
        align-items: center;
        text-align: center;
        cursor: pointer;
    }

    .image{
        border-radius: 10px;
    }

    .first_line{
        font-size: 25px;
        margin-top: 3%;
        margin-left: 3%;
    }
`;

const ProductTakju = () => {
    const navigate = useNavigate();
    const [arr, setArr] = useState([]);

    useEffect(() => {
        fetch("http://127.0.0.1:8888/app/product/list/1",
        {method : 'get'})
        .then( (resp) => {return resp.json()})
        .then( (voList) => {return setArr(voList)
            ;})
            ;
        } , [] );

    const box = () => {
        return arr.map((vo, index) => (
          <div className='detail_box' key={index} onClick={()=>{
            navigate("/product/detail/" + vo.productNo);
          }}>
                <img src={vo.image} alt="사진" width='295px' height='300px'/>
                <div>상품명 : {vo.pName}</div>
                <div>가격 : {vo.price}원</div>
                {/* <div>평점:{vo.rating}점</div> */}
          </div>
        ));
      };

    return (

        <StyledTakjuListDiv>
            <div className='first_line'> 
            🍶맛있는 막걸리는 여기 다 있어요~.🍶
            </div>
            <div className='second_line'>
                {box()}
            </div>
            <div className='three_line'>
            </div>
            
        </StyledTakjuListDiv>
            
    );
};

export default ProductTakju;