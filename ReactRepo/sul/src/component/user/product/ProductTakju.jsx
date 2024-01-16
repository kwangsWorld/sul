import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const StyledTakjuListDiv = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: lightcoral;
    display: grid;
    grid-template-rows: 0.5fr 4fr 4fr;

    .second_line, .three_line{
        display: grid;
        grid-template-columns: 2fr 2fr 2fr 2fr 2fr;
    }

    .detail_box{
        background-color: bisque;
        display: grid;
        grid-template-rows: 7fr 1fr 1fr 1fr;
        justify-content: center;
        align-items: center;
        text-align: center;
        cursor: pointer;
    }
`;

const ProductTakju = () => {
    const [arr, setArr] = useState([]);

    useEffect(() => {
        fetch("http://127.0.0.1:8888/app/product/list/1",
        {method : 'get'})
        .then( (resp) => {return resp.json()})
        .then( (voList) => {return setArr(voList);
        } )
        ;
    } , [] );

    const f = () => {
        console.log(arr);
        return arr.map((vo, index) => (
          <div className='detail_box' key={index}>
                {console.log(vo)}
                <img 
                        src="https://cogulmars.cafe24.com/img/04about_img01.png" 
                        alt="이미지"
                        width='295px'
                        height='300px' />
                <div>{vo.pName}</div>
                <div>{vo.price}</div>
                <div>{vo.rating}</div>
          </div>
        ));
      };

    return (

        <StyledTakjuListDiv>
            <div className='first_text'> 
            청룡의 해 시작을 함께할 우리술!
            </div>
            <div className='second_line'>
                {f()};
            </div>
            <div className='three_line'>
                {f()};
            </div>
            
        </StyledTakjuListDiv>
            
    );
};

export default ProductTakju;