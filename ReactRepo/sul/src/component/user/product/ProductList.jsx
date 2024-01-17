import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import ProductListItem from './ProductListItem';

const StyledListDiv = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: lightcoral;
    display: grid;
    grid-template-rows: 0.5fr 4fr 0.5fr 4fr;

    .second_line, .fourth_line{
        display: grid;
        grid-template-columns: 2.5fr 2.5fr 2.5fr 2.5fr 2.5fr;
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
            return <ProductListItem name={vo.pName} price={vo.price} rating={vo.rating} productNo={vo.productNo}/>;
        } )
    }

    const box2 = () => {
        return arr2.map( (vo) => {
            return <ProductListItem name={vo.pName} price={vo.price} rating={vo.rating} productNo={vo.productNo}/>;
        } )
    }

    

    return (

        <StyledListDiv>
            <div>청룡의 해 시작을 함께할 우리술!</div>
            <div className='second_line'>
                {box1()}
            </div>
            <div className='three_line'>평점이 증명해주는 Hot of Hot한 우리술!</div>
            <div className='fourth_line'>
                {box2()}
            </div>
        </StyledListDiv>
            
    );
};

export default ProductList;