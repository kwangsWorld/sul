import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';

const StyledDetailDiv = styled.div`
    
    width: 100%;
    height:100%;
    /* background-color: lightskyblue; */
    padding: 30px 300px;
    display: flex;

    .left_side{
        width:60%;
        height: 100%;
        /* background-color: pink; */
    }

    .left_side_top{
        display: flex;
        /* background-color: lightcoral; */
    }
    
    .left_side_down{
        /* background-color: gray; */
    }

    .right_side{
        padding: 40px;
        width: 40%;
        height: 50%;
        border: 1px solid gray;
        border-radius: 10%;
        /* background-color: orange; */
    }

    .count_box{
        display: flex;
    }

    .left_detail{
        
    }

    
`;

const ProductDetail = () => {
    const params = useParams();
    const navigate = useNavigate();

    const [vo, setVo] = useState(params.productNo);
    const loadDetailList = () => {
        // console.log(params.productNo);
        fetch("http://127.0.0.1:8888/app/product/detail?productNo=" + params.productNo)
        .then(resp => resp.json())
        .then(data => {
            setVo(data)
            console.log("vo : " + vo);
        })
        ;
    }

    useEffect( () => {
        loadDetailList();
    } , [] );

    return (
        <StyledDetailDiv>
            <div className='left_side'>
                <div className='left_side_top'>
                    <div className='left_img'>
                        <img 
                            width= '400px' 
                            height= '400px' 
                            src="https://m.soollove.com/web/product/big/202312/57fda681ed7628e049055c3f0df77ba9.jpg" 
                            alt="bottle" 
                        />
                    </div>
                    <div className='left_detail'>
                            <div className='name'>이름: {vo.pName} </div>
                            <div className='type'>종류: {vo.tName}</div>
                            <div className='rating'>평점: {vo.rating}</div>
                            <div className='capacity'>용량: {vo.capacity}ml</div>
                            <div className='price'>판매가격: {vo.price}원</div>
                            <div className='degree'>도수: {vo.degree}%</div>
                            <div className='expire_date'>유통기한: {vo.expiryDate}</div>
                            <div className='sotrage'>보관방법: {vo.storage}</div>
                            {/* <p>현재 페이지의 파라미터는 {params.productNo}입니다.</p> */}
                    </div>
                </div>
                <div className='left_side_down'>
                    <div className='taste'> 맛: {vo.taste}</div>
                    <div className='appetizer'> 안주: {vo.appetizer}</div>
                </div>
            </div>
            <div className='right_side'>
                <table border='1px'>
                    <tr>
                        <td colSpan={4}>수량</td>
                    </tr>
                    <tr>
                        <td>-</td>
                        <td colSpan={2}>
                            수량~~
                        </td>
                        <td>+</td>
                    </tr>
                    <tr>
                        <td colSpan={4}>
                            총 상품가격
                        </td>
                    </tr>
                    <tr>
                        <td colSpan={4}>가격~~</td>
                    </tr>
                    <tr>
                        <td colSpan={2}>
                            <button onClick={()=> {navigate("/cart/list");}}>장바구니</button>
                        </td>
                        <td colSpan={2}>
                            <button onClick={()=> {navigate("/buy/list");}}>바로 구매하기</button>
                        </td>
                    </tr>
                </table>
            </div>
        </StyledDetailDiv>
    );
};

export default ProductDetail;