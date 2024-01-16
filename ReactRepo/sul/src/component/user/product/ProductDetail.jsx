import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';

const StyledDetailDiv = styled.div`
    
    width: 100%;
    height:100%;
    background-color: lightskyblue;
    padding: 30px 300px;
    display: flex;

    .left_side{
        width:60%;
        height: 100%;
        background-color: pink;
    }

    .left_side_top{
        display: flex;
        background-color: lightcoral;
    }
    
    .left_side_down{
        background-color: gray;
    }

    .right_side{
        width: 40%;
        height: 100%;
        background-color: orange;
    }

    .count_box{
        display: flex;
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
                            <div>이름: {vo.pName} </div>
                            <div>종류: {vo.tName}</div>
                            <div>평점: {vo.rating}</div>
                            <div>용량: {vo.capacity}ml</div>
                            <div>판매가격: {vo.price}원</div>
                            <div>도수: {vo.degree}%</div>
                            <div>유통기한: {vo.expiryDate}</div>
                            <div>보관방법: {vo.storage}</div>
                            <p>현재 페이지의 파라미터는 {params.productNo}입니다.</p>
                    </div>
                </div>
                <div className='left_side_down'>
                    <div className='taste'> 맛: {vo.taste}</div>
                    <div className='appetizer'> 안주: {vo.appetizer}</div>
                </div>
            </div>
            <div className='right_side'>
                <div>수량</div>
                <div className='count_box'>
                    <div>
                        <img width= '50px' height= '50px' src="https://cdn.icon-icons.com/icons2/1674/PNG/512/minus_111123.png" alt="마이너스" />
                    </div>
                    <input type="number" />
                    <div>
                        <img width= '50px' height= '50px'src="https://cdn.icon-icons.com/icons2/510/PNG/512/plus-round_icon-icons.com_50065.png" alt="플러스" />
                    </div>
                </div>
                <div>총 상품가격</div>
                <input type="text" />
                <br />
                <button >장바구니</button> 
                <button onClick={()=> {navigate("/buy/list");}}>바로 구매하기</button>
            </div>
        </StyledDetailDiv>
    );
};

export default ProductDetail;