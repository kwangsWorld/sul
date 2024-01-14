import React from 'react';
import styled from 'styled-components';

const StyledBuyListDiv = styled.div`
    width: 100%;
    height: 100%;
    background-color: orange;
    /* padding: 40px 200px; */

    .buy_wrap{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        background-color: lightpink;
    }

    .buy_header{
        padding: 40px 200px;
        background-color: blueviolet;
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

`;

const BuyList = () => {
    return (
        <StyledBuyListDiv>
            <div className='buy_header'>
                <div>주문/결제</div>
            </div>
            <hr />
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
                    <div order_head>
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
                            <div>원쏘주</div>
                            <div>용량:375ml</div>
                            <div>9000원</div>
                            <div>수량 11개</div>
                            <br />
                            <div>총 결제 금액: 99000원</div>
                        </div>
                    </div>
                </div>
                

                <div>
                    <input type="checkbox" />
                    전통주 구매자의 정보수집·이용(필수)
                </div>
                <button>116,000원 결제하기</button>
            </div>
        </StyledBuyListDiv>
    );
};

export default BuyList;