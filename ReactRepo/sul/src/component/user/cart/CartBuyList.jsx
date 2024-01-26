import React, { useEffect, useState } from 'react';
import { json, useLocation } from 'react-router-dom';
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
        border-bottom: 1px solid lightgray;
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

    .final_buy_yes{
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

    const [arr, setArr] = useState(useLocation().state);
    const [isChecked, setIsChecked] = useState(false);
    const [isArrowActivated, setIsArrowActivated] = useState(false);
    const loginInfo = JSON.parse(sessionStorage.getItem("loginMemberVo")); //세션스토리지에서 객체 얻어오기

    // const addOrder = () => {
    //     fetch("http://127.0.0.1:8888/app/")
    // }

    const memberNo = loginInfo.memberNo;

    const productInfo = {
        ...arr,
        memberNo : memberNo,
    }

    console.log("productInfo : ", productInfo);

    const addOrderList = () => {

        fetch("http://127.0.0.1:8888/app/orderList/add", {
            method: 'post' ,
            headers: {
                "Content-Type" : "application/json"
            },
            body:JSON.stringify(productInfo)})
            .then( (resp) => {return resp.json()})
    };


    //iamport라이브러리 추가 (index.html에 하면 모든 component에 적용되기 때문에 별도로 수정)
    const script = document.createElement("script");
    // console.log("script: ", script);
    script.src = "https://cdn.iamport.kr/v1/iamport.js";
    document.body.appendChild(script);

    const handleCheckboxToggle = (e) => {
        // e.preventDefault(); 기본 동작 막기
        setIsChecked((prev) => !prev);
    };

    const handleArrowToggle = () => {
        setIsArrowActivated((prev) => !prev);
    }
    // console.log("arr : ", arr);
    // console.log("useLocation값:", useLocation());
    const totalPrice = arr.totalPrice;

    // console.log("세션 값: ", loginInfo);

    //카카오페이 시작
    var IMP = window.IMP;

    var today = new Date();
    var hours = today.getHours();
    var minutes = today.getMinutes();
    var seconds = today.getSeconds();
    var milliseconds = today.getMilliseconds();
    var makeMerchantUid = `${hours}` + `${minutes}` + `${seconds}` + `${milliseconds}`;
    
    function kakaoPay(e){
        e.stopPropagation(); // 이벤트 전파 방지
        if (window.confirm("구매하시겠습니까?")) {
            if(loginInfo != null){
                IMP.init("imp87087825");
                IMP.request_pay({
                    pg: 'kakaopay.TC0ONETIME',
                    pay_method: 'card',
                    merchant_uid: "SULDAMA" + makeMerchantUid,
                    name: '주문 총계',
                    amount: totalPrice
                }, async function (rsp) {
                    // if (rsp.success){
                    //     console.log(rsp);
                    //     if(rsp.status == 200){
                    //         alert('결제 완료!')
                    //         window.location.relaod();
                    //     }else{
                    //         alert(`error:[${rsp.status}]\n결제요청이 승인된 경우 관리자에게 문의바랍니다.`);
                    //     }
                    // }else if (rsp.success == false){
                    //     alert(rsp.error_msg)
                    // }
                    if(rsp.success){
                        alert("구매 성공!")
                    }else if(rsp.success == false) {
                        alert(rsp.error_msg)
                    }
                });
            }
            else{
                alert('로그인이 필요합니다!')
            }
        }else{
            return false;
        }
    }
    //카카오페이 끝


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
                    {
                        arr.arr.map((vo) => (
                        <div key = {vo.cartNo}  className='order_list'>
                            <div className='product_img'>
                                <img 
                                    width='100px'
                                    height='100px'
                                    src="https://m.soollove.com/web/product/big/202312/57fda681ed7628e049055c3f0df77ba9.jpg" alt="이미지" />
                            </div>
                            <div className='product_info'>
                                <div>이름 : {vo.name} </div>
                                <div>용량: {vo.capacity}ml</div>
                                <div>가격: {parseInt(vo.price).toLocaleString('ko-KR')}원</div>
                                <div>수량: {vo.cnt}병</div>
                                <br />
                            </div>
                        </div>
                        ))
                    }
                    <hr />  
                    <div>총 결제 금액: {parseInt(totalPrice).toLocaleString('ko-KR')}원</div>
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
                        {
                            isArrowActivated && 
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
                {isChecked ? 
                    <button className='final_buy_yes' onClick={(e)=>{kakaoPay(e)}}>
                        {parseInt(totalPrice).toLocaleString('ko-KR')}원 결제하기
                    </button>
                : 
                    <button className='final_buy_no'>
                        {parseInt(totalPrice).toLocaleString('ko-KR')}원 결제하기
                    </button>
                }
            </div>
        </StyledBuyListDiv>
    );
};

export default BuyList;
