import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';

const StyledDetailDiv = styled.div`
    
    width: 100%;
    height:100%;
    //background-color: lightskyblue;
    padding: 30px 300px;
    display: flex;
    margin-top: 5%;

    tr > td{
         border-bottom: 1px solid lightgray;
    }
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
        margin-top: 20%;
    }

    .name, .price{
        font-size: 20px;
        font-weight: bold;
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
        margin-left: 10%;
        margin-bottom: 40px;
        border-radius: 20px;
        padding-left: 3%;
        padding-top: 2%;
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
        width: 25%;
        height: 35%;
        //border: 1px solid gray;
       // border-radius: 10%;
        text-align: center;
        justify-content: center;
        align-items: center;
        font-size:25px;
       //background-color: orange;
    }

    .right_table{
        width: 100%;
        height: 100%;
        border: 1px solid lightgray;
    }
    
    

    /* .cnt_name, .total_price_name{
        display: flex;
        font-size: 20px;
        justify-content: baseline;
    } */

    .go_cart, .go_buy{
        width: 100%;
        height: 100%;
        background-color: #ffe23dfb;
        border: none;
        border-radius: 10px;
    }


    .review_box{
        display: grid;
        grid-template-rows: 5fr 5fr;
    }

    .review_firstLine{
        margin-top: 50px;
        width: 150%;
        height: 50px;
        display: grid;
        grid-template-columns: 4fr 2fr 2fr 2fr;
        border-top: solid 2px gray;
        border-bottom: solid 2px gray;
        border-radius: 10px;
        text-align: center;
        align-items: center;
    }

    .review_secondLine{
        display: grid;
        grid-template-columns: 3fr 2fr 3fr;
        padding-top: 5%;
    }
    
`;

const ProductDetail = () => {
    const params = useParams();
    const navigate = useNavigate();
    const [vo, setVo] = useState(params.productNo);
    const [totalPrice, setTotalPrice] = useState();
    const [cnt, setCnt] = useState(1);
    const [reviewVolist, setreviewVolist] = useState([]);
    const loginInfo = JSON.parse(sessionStorage.getItem("loginMemberVo"));

    const memberNo = loginInfo.memberNo;
    // console.log("memberNo: ", memberNo);

    const obj = {
        no : vo.productNo,
        name : vo.pName ,
        price : totalPrice,
        capacity : vo.capacity,
        cnt : cnt /* 키값과 벨류가 같으면 cnt만 써도됨*/
    };


    const loadDetailList = () => {
        // console.log(params.productNo);
        fetch("http://127.0.0.1:8888/app/product/detail?productNo=" + params.productNo)
        .then(resp => resp.json())
        .then(data => {
            setVo(data)
            setTotalPrice(data.price)
        })
        ;
    }

    useEffect( () => {
        loadDetailList();
    } , [] );


    const minus = () => {
        if(cnt>1)
        setCnt(cnt-1);
        setTotalPrice(parseInt(vo.price) * (cnt-1));

    }
    const plus = () => {
        setCnt(cnt+1);
        setTotalPrice(parseInt(vo.price) * (cnt+1));
    }

    const addCart = () => {
        console.log("add carttttttttttttttttttttttttttt");

        const productInfo = {
            ...vo,
            cnt : cnt,
            price : totalPrice,
            memberNo
        };

        fetch("http://127.0.0.1:8888/app/cart/add",{
            method: 'post' ,
            headers: {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify(productInfo)})
            .then( (resp) => {
                navigate("/cart/list");
                return resp.json()})
            };
            

        useEffect( () => { 
            fetch("http://127.0.0.1:8888/app/review/list", {
                method: 'post' ,
                headers: {
                    "Content-Type" : "application/json"
            },
            body: JSON.stringify({ productNo : params.productNo })
            })
            .then((resp) => {
                return resp.json();
            })
            .then((data) => {
                setreviewVolist(data);
            });
        } , [] );

    return (
        <StyledDetailDiv>
            <div className='left_side'>
                <div className='left_side_top'>
                    <div className='left_img'>
                    <img src={vo.image} alt="사진" width='300px' height='300px'/>
                    </div>
                    <div className='left_detail'>
                            <div className='name'>이름: {vo.pName} </div>
                            <div className='price'>판매가격: {parseInt(vo.price).toLocaleString('ko-KR')}원</div>
                            <div className='type'>주종: {vo.tName}</div>
                            <div className='degree'>도수: {vo.degree}%</div>
                            <div className='capacity'>용량: {vo.capacity}ml</div>
                            <div className='expire_date'>유통기한: {vo.expiryDate}</div>
                            <div className='sotrage'>보관방법: {vo.storage}</div>
                            {/* <div className='rating'>평점: {vo.rating}점</div> */}
                            {/* <p>현재 페이지의 파라미터는 {params.productNo}입니다.</p> */}
                    </div>
                </div>
                <div className='left_side_down'>
                    <div className='point'>핵심 포인트</div>
                    <div className='first_line'>
                        <div className='image'>
                            <img src="https://www.sooldamhwa.com/images/modules/damhwaMarket/point_anju.png" alt="taste" />
                        </div>
                        <div className='taste'>
                            <div className='taste_title'> 맛 </div>
                            <br />
                            <div className='taste_info'>{vo.taste}</div>
                        </div>
                    </div>
                    <div className='second_line'>
                        <div className='image'>
                            <img src="https://www.sooldamhwa.com/images/modules/damhwaMarket/point_damhwa.png" alt="appetizer" />
                        </div>
                        <div className='appetizer'>
                            <div className='appetizer_title'> 안주 </div>
                            <br />
                            <div className='appetizer_info'>{vo.appetizer}</div>
                        </div>
                    </div>
                </div>
                {
                    reviewVolist.map((reviewVo) => (
                        <div className='reivew_box'>
                        <div className='review_firstLine'>
                        <div>{reviewVo.name}</div>
                        <div>{vo.pName}</div>
                        <div>{reviewVo.rating}</div>
                        <div>{reviewVo.enrollDate}</div>
                        </div>
                        <div className='review_secondLine'>
                            <div>
                                <img src={reviewVo.img} alt="사진" width='150px' height='150px'/>
                            </div>
                            <div></div>
                            <div>
                                {reviewVo.content}
                            </div>
                        </div>
                </div>
                    ))
                }
                
            </div>
            <div className='right_side'>
                <table className='right_table' border="1px">
                    <tbody>
                        <tr className='cnt_name'>
                            <td colSpan={4}>수량</td>
                        </tr>
                        <tr>
                            <td onClick={minus}>-</td>
                            {/* {console.log("cnt : " + cnt)} */}
                            <td colSpan={2}>
                                {cnt}
                            </td>
                            <td onClick={plus}>+</td>
                        </tr>
                        <tr>
                            <td colSpan={4}  className='total_price_name'>
                                총상품가격
                            </td>
                        </tr>
                        <tr>
                            <td colSpan={4} cn>
                                {parseInt(totalPrice).toLocaleString('ko-KR')}원
                            </td>
                        </tr>
                        <tr>
                            <td colSpan={2}>
                                <button className='go_cart' 
                                    onClick={()=> { addCart(); }}>🛒장바구니</button>
                            </td>
                            <td colSpan={2}>
                                <button className='go_buy' onClick={()=> {navigate("/buy/list" , {state:obj});}}>💰구매하기</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </StyledDetailDiv>
    );
};

export default ProductDetail;