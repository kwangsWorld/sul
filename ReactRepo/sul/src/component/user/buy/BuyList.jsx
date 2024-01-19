import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';


const StyledBuyListDiv = styled.div`
    width: 100%;
    height: 100%;
    /* background-color: orange; */
    /* padding: 40px 200px; */

    .buy_wrap{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        /* background-color: lightpink; */
    }

    .buy_header{
        padding: 40px 200px;
        /* background-color: blueviolet; */
    }

    .address{
        width:30%;
        height: 30%;
        justify-content: center;
        border: 1px solid black;
        text-align: center;
    }
    .address_header{
        display: flex;
        justify-content: space-around;
    }

    .order{
        margin-top:30px;
        width:30%;
        height: 30%;
        justify-content: center;
        border: 1px solid black;
        text-align: center;
    }

    .order_list{
        display: flex;
        justify-content: space-evenly;
    }

    .line{
        border: 1px solid #ffe23dfb;
    }

    .checkbox_agree{
        
    }

    .checkbox_info{
        font-size: 10px;
        color: gray;
    }

    .final_buy{
        width: 300px;
        height: 100px;
        font-size: 30px;
        background-color: #ffe23dfb;
        border: none;
        border-radius: 10px;
    }
    .final_buy_no{
        width: 300px;
        height: 100px;
        font-size: 30px;
        background-color: gray;
        border: none;
        border-radius: 10px;
    }

`;

const BuyList = () => {
    const [isChecked, setIsChecked] = useState(false);
    const [isArrowActivated, setIsArrowActivated] = useState(false);

    const handleCheckboxToggle = () => {
        setIsChecked((prev) => !prev);
    };

    const handleArrowToggle = () => {
        setIsArrowActivated((prev) => !prev);
    }
    
    const obj = useLocation();
    console.log("obj : " , obj);
    // console.log("obj.피네임 : " , obj.state.pname);
    // console.log("obj.카운트 : " , obj.state.cnt);

    const totalPrice = obj.state.price * obj.state.cnt;

    return (
        <StyledBuyListDiv>
            <div className='buy_header'>
                <div>주문/결제</div>
                <hr className='line'/>
            </div>
            <div className='buy_wrap'>
                <div className='address'>
                    <div className='address_header'>
                        <div>배송지</div>
                        <div>변경</div>
                    </div>
                    <hr />
                    <div className='address_main'>
                        <div>이광포</div>
                        <div>010-7422-9262</div>
                        <div>서울 성동구 둘레15가길 2</div>
                    </div>
                </div>
                <div className='order'>
                    <div className='order_head'>
                        주문 예정 상품
                    </div>
                    <hr />
                    <div className='order_list'>
                        <div className='product_img'>
                            <img 
                                width='100px'
                                height='100px'
                                src="https://m.soollove.com/web/product/big/202312/57fda681ed7628e049055c3f0df77ba9.jpg" alt="이미지" />
                        </div>
                        <div className='product_info'>
                            <div>이름 : {obj.state.name}</div>
                            <div>용량: {obj.state.capacity}ml</div>
                            <div>가격: {obj.state.price}원</div>
                            <div>수량: {obj.state.cnt}병</div>
                            <br />
                        </div>
                    </div>
                    <hr />  
                    <div>총 결제 금액: {totalPrice}원</div>
                </div>

                <div className='agree_user_info'>
                    <br />
                    <input type="checkbox" checked={isChecked} onChange={handleCheckboxToggle}/>
                    <span className='checkbox_agree'>전통주 구매자의 정보수집·이용(필수)
                        <span onClick={handleArrowToggle}>
                            {!isArrowActivated ? "▼" : "▲"}
                        </span>
                    </span>
                    <br />
                    {isArrowActivated && 
                        <div className='checkbox_info'>
                            <div>개인정보 판매자 제공에 동의합니다.</div>
                            <div>제공받는자: "양조장"</div>
                            <div>목적: 판매자와 구매자 사이의 원활한 거래 진행 </div>
                            <div>,상품을 위한 배송지 확인</div>
                            <div>,배송지 확인, 고객상담 및 불만처리 등명</div>
                            <div>정보: 구매자 정보 (이름, 전화번호, 주소),</div>
                            <div>수취인 정보(이름, 전화번호, 주소)</div>
                            <div>보유기간: 발송완료 후 90일</div>
                        </div>
                    }
                </div>
                <br />
                {isChecked ? <button className='final_buy'>{totalPrice}원 결제하기</button>
                : <button className='final_buy_no'>{totalPrice}원 결제하기</button>}
            </div>
        </StyledBuyListDiv>
    );
};

export default BuyList;
