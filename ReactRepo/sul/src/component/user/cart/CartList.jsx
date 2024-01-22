import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

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

    .plus{
        width: 100%;
        height: 100%;
        border-right: 1px solid lightgray;
    }

    .minus{
        width: 100%;
        height: 100%;
        border-left: 1px solid lightgray;
    }

    .detail{
        display: flex;
        justify-content: space-between;
    }

    .bottom_right{
        /* background-color: blueviolet; */
    }

`;

const CartList = () => {

    const navigate = useNavigate();
    const [arr, setArr] = useState([]);

    useEffect(() => {
        fetch("http://127.0.0.1:8888/app/cart/list",
            {method : 'get'})
            .then( (resp) => {return resp.json()})
            .then( (voList) => {
                console.log("voList값: " ,voList);
                setArr(voList); 
            }
        )
        ;
    } , [] );

    console.log("arr : " , arr);

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
                    <hr />
                    <div className='cart_list'>
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
                                <div>이름: </div>
                                <div>용량: ml</div>
                                <div>가격: 원</div>
                            </div>
                            
                        </div>
                        <div><span></span></div>
                            <div className='detail'>
                            <div className='cnt_box'>
                                <div className='plus'>-</div>
                                <div className='cnt'> 수량값 </div>
                                <div className='minus'>+</div>
                            </div>
                            <div className='price'></div>
                        </div>
                    </div>
                </div>

                <div className='bottom_right'>
                    <br />
                    총 결제 금액: 총금액 땡땡 원
                    <br />
                    <button onClick={()=>{navigate("/buy/list");}}>구매하기</button>
                </div>
            
            </div> {/*cart_wrap*/}

        </StyledCartListDiv>
    );
};

export default CartList;