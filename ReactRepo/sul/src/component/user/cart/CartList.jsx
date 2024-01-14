import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const StyledCartListDiv = styled.div`

    width: 100%;
    height: 100%;

    .cart_wrap{
        padding: 0px 300px ;
        width:100%;
        height: 100%;
        background-color: lightgreen;
        display: grid;
        grid-template-rows: 1fr 8fr;
        grid-template-columns: 6fr 4fr;
        box-sizing: border-box;
    }

    .top_left_wrap{
        background-color: lightsalmon;
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
        background-color: aquamarine;
    }

    .select{
        display: flex;
        justify-content:center;
        align-items: center;
    }

    .count_box{
        display: flex;
    }

    .list{
        display: flex;
        background-color: khaki;
    }


    .detail{
        display: flex;
        justify-content: space-between;
    }

    .bottom_right{
        background-color: blueviolet;
    }

`;

const CartList = () => {

    const navigate = useNavigate();

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
                
                <div><span>22</span></div>


                <div className='bottom_left_wrap'>
                    <hr />
                    <div className='cart_list'>
                        <div className='select'>
                            <input type="checkbox" />
                        </div>
                        
                        <div className='list'>
                            <img 
                            width= '70px' 
                            height= '70px' 
                            src="https://m.soollove.com/web/product/big/202312/57fda681ed7628e049055c3f0df77ba9.jpg" 
                            alt="bottle" 
                                />
                                <div>WON SOJU</div>
                        </div>
                        <div><span>test</span></div>
                            <div className='detail'>
                            <div className='count_box'>
                                <div>
                                    <img width= '30px' height= '30px' src="https://cdn.icon-icons.com/icons2/1674/PNG/512/minus_111123.png" alt="마이너스" />
                                </div>
                                <input type="number" />
                                <div>
                                    <img width= '30px' height= '30px'src="https://cdn.icon-icons.com/icons2/510/PNG/512/plus-round_icon-icons.com_50065.png" alt="플러스" />
                                </div>
                            </div>
                            <div className='price'>가격:38000원</div>
                            
                        </div>
                    </div>
                </div>

                <div className='bottom_right'>
                    <br />
                    총 결제 금액: 38000원
                    <br />
                    <button onClick={()=>{navigate("/buy/list");}}>구매하기</button>
                </div>
            
            </div> {/*cart_wrap*/}

        </StyledCartListDiv>
    );
};

export default CartList;