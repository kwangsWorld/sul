import React, { useEffect, useRef, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import {produce} from 'immer';

const StyledCartListDiv = styled.div`

    width: 100%;
    height: 100%;

    .cart_wrap{
        padding: 0px 300px ;
        width:100%;
        height: 100%;
        /* background-color: lightgreen; */
        display: grid;
        grid-template-rows: 1fr 8fr;
        grid-template-columns: 6fr 4fr;
        box-sizing: border-box;
    }

    .line{
        border: 1px solid #ffe23dfb;
    }

    .top_left_wrap{
        /* background-color: lightsalmon; */
    }
    
    .all_select{
        display: flex;
        margin: 40px 20px 10px;
        justify-content: space-between;
    }

    .cart_list{
        display: grid;
        grid-template-rows: 5fr 5fr;
        grid-template-columns: 1fr 9fr;
        /* background-color: aquamarine; */
    }

    .select{
        display: flex;
        justify-content:center;
        align-items: center;
    }

    .total_list{
        display: flex;

        /* background-color: khaki; */
    }

    .cnt_box{
        width: 100px;
        height: 30px;
        display: grid;
        grid-template-columns: 3fr 3fr 3fr;
        border:1px solid lightgray;
        border-radius: 10px;
        font-size:20px;
        text-align: center;
    }

    .minus{
        width: 100%;
        height: 100%;
        border-right: 1px solid lightgray;
        cursor: pointer;
    }

    .plus{
        width: 100%;
        height: 100%;
        border-left: 1px solid lightgray;
        cursor: pointer;
    }

    .detail{
        display: flex;
        justify-content: space-between;
    }

    .bottom_right{
        /* background-color: blueviolet; */
    }

    .buy_btn{
        width: 170px;
        height: 70px;
        background-color: #ffe23dfb;
        border:none;
        border-radius: 10px;
        cursor: pointer;
    }

`;

const CartList = () => {
    
    let t = 0;

    const navigate = useNavigate();
    const [arr, setArr] = useState([]);
    const [totalPrice, setTotalPrice] = useState()

    useEffect(() => {
        fetch("http://127.0.0.1:8888/app/cart/list",
            {method : 'get'})
            .then( (resp) => {return resp.json()})
            .then( (voList) => {
                // console.log("voList값: " ,voList);
                setArr(voList); 
                setTotalPrice(
                    ()=>{
                        for(let x of voList){
                            console.log(x.price);
                            t += parseInt(x.price);
                        }
                        return t;
                    }
                )
            }
        )
        ;
    } , [] );

    // console.log("arr : " , arr);

    const changeMinusCnt = (event, idx) => {
        if(arr[idx].cnt <= 1){
            alert("1이상의 수량만 가능합니다.")
            return;
        }
        setArr((prevState) => {
            return produce(prevState, (draft) => {
                draft[idx].cnt = parseInt(draft[idx].cnt) - 1;
                draft[idx].price = parseInt(draft[idx].price) - (parseInt(draft[idx].price)/(parseInt(draft[idx].cnt)+1));
                setTotalPrice(totalPrice - parseInt(arr[idx].price)/(parseInt(arr[idx].cnt)));
            });
        });
        console.log("cnt값: " + arr[idx].cnt) 
    };

    const changePlusCnt = (event, idx) => {
        setArr((prevState) => {
            return produce(prevState, (draft) => {
                draft[idx].cnt = parseInt(draft[idx].cnt) + 1;
                draft[idx].price = parseInt(draft[idx].price) + (parseInt(draft[idx].price)/(parseInt(draft[idx].cnt)-1));
                setTotalPrice(totalPrice + parseInt(arr[idx].price)/(parseInt(arr[idx].cnt)));
            });
        });
        console.log("cnt값: " + arr[idx].cnt)
    };

    const x = {
        arr:arr,
        totalPrice : totalPrice
    }

    console.log("x : ", x);
    


    return (
        <StyledCartListDiv>
            <div className='cart_wrap'>
                <div className='top_left_wrap'>
                    <div className='all_select'>
                        <div>
                            <input type="checkbox" />
                            모두선택(0/3)
                        </div>
                        <div>
                            <button type='button'>선택 삭제</button>
                        </div>
                    </div>
                </div>
                
                <div><span>계산서</span></div>


                <div className='bottom_left_wrap'>
                    <hr className='line'/>
                    {
                         arr.map((vo,idx) => (
                    
                    <div key = {vo.cartNo} className='cart_list'>
                        <div className='select'>
                            <input type="checkbox" />
                        </div>
                        
                        <div className='total_list'>
                            <img 
                            width= '70px' 
                            height= '70px' 
                            src="https://m.soollove.com/web/product/big/202312/57fda681ed7628e049055c3f0df77ba9.jpg" 
                            alt="bottle" 
                            />
                            
                                <div>
                                    <div>이름:
                                        {vo.name}
                                        </div>
                                    <div>용량:  
                                        {vo.capacity}
                                        ml</div>
                                    <div>가격: 
                                        {parseInt(vo.price).toLocaleString('ko-KR')}
                                        원</div>
                                </div>
                             
                        </div>
                        <div><span></span></div>
                            <div className='detail'>
                            <div className='cnt_box'>
                                <div className='minus' onClick={(e)=>changeMinusCnt(e,idx)}>-</div>
                                <div className='cnt'> {vo.cnt} </div>
                                <div className='plus' onClick={(e)=>{changePlusCnt(e,idx); }}>+</div>
                            </div>
                            <div className='price'></div>
                        </div>
                    </div>
                    ))} 
                </div>

                <div className='bottom_right'>
                    <br />
                    총 결제 금액: {parseInt(totalPrice).toLocaleString('ko-KR')} 원
                    <br />
                    <button className='buy_btn' onClick={()=>{navigate("/cart/buyList" , {state: x});}}>구매하기</button>
                </div>
            
            </div> {/*cart_wrap*/}

        </StyledCartListDiv>
    );
};

export default CartList;

const number = 1234567.89;

const formattedNumber = number.toLocaleString('ko-KR');

