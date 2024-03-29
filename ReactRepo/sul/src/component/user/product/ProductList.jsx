import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import ProductListItem from './ProductListItem';

const StyledListDiv = styled.div`
    width: 100vw;
    height: 100vh;
    /* background-color: lightcoral; */
    display: grid;
    grid-template-rows: 0.5fr 4fr 0.5fr 4fr;
    img{
        border-radius: 5%;
    }
    img:hover{
        transform: scale(1.1);
    }

    .second_line, .fourth_line{
        display: grid;
        grid-template-columns: 2.5fr 2.5fr 2.5fr 2.5fr 2.5fr;
        margin-top: 3%;
    }

    .first_title, .second_title{
        font-size: 25px;
        margin-top: 3%;
        margin-left: 3%;
    }
`;

const ProductList = () => {

    const [arr, setArr] = useState([]);
    const [arr2, setArr2] = useState([]);

    useEffect(() => {
        fetch("http://127.0.0.1:8888/app/product/listByEnrollDate",
        {method : 'get'})
        .then( (resp) => {return resp.json()})
        .then( (voList) => {return setArr(voList);
        } )
        ;
    } , [] );

    useEffect(() => {
        fetch("http://127.0.0.1:8888/app/product/listByRating",
        {method : 'get'})
        .then( (resp) => {return resp.json()})
        .then( (voList) => {return setArr2(voList);
        } )
        ;
    } , [] );

    const box1 = () => {
        return arr.map( (vo) => {
            return <ProductListItem key={vo.productNo} name={vo.pName} price={vo.price} productNo={vo.productNo} image={vo.image}/>;
        } )
    }

    const box2 = () => {
        return arr2.map( (vo) => {
            return <ProductListItem key={vo.productNo} name={vo.pName} price={vo.price} productNo={vo.productNo} image={vo.image}/>;
        } )
    }

    return (

        <StyledListDiv>
            <div className='first_title'>🐲청룡의 해 시작을 함께할 우리술!🐲</div>
            <div className='second_line'>
                {box1()}
            </div>
            <div className='first_title'>⭐돈 값하는 FLEX한 우리술!⭐</div>
            <div className='fourth_line'>
                {box2()}
            </div>
        </StyledListDiv>
            
    );
};

export default ProductList;