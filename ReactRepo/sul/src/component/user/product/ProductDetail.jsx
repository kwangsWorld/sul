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
        width: 150%;
        height: 50%;
        display: grid;
        grid-template-rows: 2fr 4fr 4fr;
        /* background-color: blue; */
        text-align: center;
        background-color: lightgray;
        border-radius: 10px;
    }

    .point{
        font-size: 30px;
        margin-top: 10px;
    }

    .first_line, .second_line{
        width: 80%;
        display: grid;
        grid-template-columns: 2fr 8fr;
        background-color: white;
        margin-left: 50px;
        margin-bottom: 40px;
        border-radius: 20px;
    }

    .image{
        margin-top: 10px;
    }

    .taste > div, .appetizer > div{
        margin-top: 10px;
    }

    .left_detail>div{
        margin-bottom: 10px;
    }

    .right_side{
        display: flex;
        padding: 40px;
        width: 30%;
        height: 50%;
        border: 1px solid gray;
        border-radius: 10%;
        text-align: center;
        justify-content: center;
        align-items: center;
        font-size:25px;
        /* background-color: orange; */
    }

    .go_cart, .go_buy{
        width: 100%;
        height: 40px;
    }

    .right_table{
        width: 100%;
        height: 100%;
    }

    .name, .price{
        font-size: 30px;
    }

    .go_cart, .go_buy{
        width: 100%;
        height: 100%;
        border-radius: 10px;
        background-color: skyblue;
        color: white;
    }
    
`;

const ProductDetail = () => {
    const params = useParams();
    const navigate = useNavigate();
    
    const [vo, setVo] = useState(params.productNo);
    const [cnt, setCnt] = useState(1);

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
    const minus = () => {
        setCnt(cnt-1);
    }
    const plus = () => {
        setCnt(cnt+1);
    }

    useEffect( () => {
        loadDetailList();
    } , [] );

    // useEffect( () => {
    //     minus();
    // }, [] );

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
                            <div className='price'>판매가격: {vo.price}원</div>
                            <div className='type'>주종: {vo.tName}</div>
                            <div className='degree'>도수: {vo.degree}%</div>
                            <div className='capacity'>용량: {vo.capacity}ml</div>
                            <div className='expire_date'>유통기한: {vo.expiryDate}</div>
                            <div className='sotrage'>보관방법: {vo.storage}</div>
                            <div className='rating'>평점: {vo.rating}점</div>
                            {/* <p>현재 페이지의 파라미터는 {params.productNo}입니다.</p> */}
                    </div>
                </div>
                <div className='left_side_down'>
                    <div className='point'>핵심 포인트</div>
                    <div className='first_line'>
                        <div className='image'>
                            <img src="https://www.sooldamhwa.com/images/modules/damhwaMarket/point_anju.png" alt="" />
                        </div>
                        <div className='taste'>
                            <div className='taste_title'> 맛 </div>
                            <br />
                            <div className='taste_info'>{vo.taste}</div>
                        </div>
                    </div>
                    <div className='second_line'>
                        <div className='image'>
                            <img src="https://www.sooldamhwa.com/images/modules/damhwaMarket/point_damhwa.png" alt="" />
                        </div>
                        <div className='appetizer'>
                            <div className='appetizer_title'> 안주 </div>
                            <br />
                            <div className='appetizer_info'>{vo.appetizer}</div>
                        </div>
                    </div>
                    
                </div>
            </div>
            <div className='right_side'>
                <table border='1px' className='right_table'>
                    <tr>
                        <td colSpan={4}>수량</td>
                    </tr>
                    <tr>
                        <td>-</td>
                        {console.log("cnt : " + cnt)}
                        <td colSpan={2}>
                            {cnt}
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
                            <button className='go_cart' onClick={()=> {navigate("/cart/list");}}>🛒장바구니</button>
                        </td>
                        <td colSpan={2}>
                            <button className='go_buy' onClick={()=> {navigate("/buy/list");}}>💰구매하기</button>
                        </td>
                    </tr>
                </table>
            </div>
        </StyledDetailDiv>
    );
};

export default ProductDetail;