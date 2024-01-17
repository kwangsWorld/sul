import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import ProductListItem from './ProductListItem';

const StyledListDiv = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: lightcoral;
    display: grid;
    grid-template-rows: 0.5fr 4fr 0.5fr 4fr;

    .second_line{
        display: grid;
        grid-template-columns: 2.5fr 2.5fr 2.5fr 2.5fr 2.5fr;
    }
`;

const ProductList = () => {

    const [arr, setArr] = useState([]);

    useEffect(() => {
        fetch("http://127.0.0.1:8888/app/product/list",
        {method : 'get'})
        .then( (resp) => {return resp.json()})
        .then( (voList) => {return setArr(voList);
        } )
        ;
    } , [] );


    return (

        <StyledListDiv>
            {/* <div className='first_text'> 
            청룡의 해 시작을 함께할 우리술!
            </div>
           {
                arr.map( (vo) => {
                    return <ProductListItem name={vo.pName} price={vo.price} rating={vo.rating} productNo={vo.productNo}/>;
            } )
            }
            <div className='second_text'>
            평점이 증명해주는 Hot of Hot한 우리술!
            </div> */}
            <div>청룡의 해 시작을 함께할 우리술!</div>
            <div className='second_line'>{
                arr.map( (vo) => {
                    return <ProductListItem name={vo.pName} price={vo.price} rating={vo.rating} productNo={vo.productNo}/>;
                } )
            }
            </div>
            <div className='three_line'>평점이 증명해주는 Hot of Hot한 우리술!</div>
            <div className='fourth_line'>
                <ProductListItem/>
                <ProductListItem/>
                <ProductListItem/>
                <ProductListItem/>
                <ProductListItem/>
            </div>
        </StyledListDiv>
            
    );
};

export default ProductList;