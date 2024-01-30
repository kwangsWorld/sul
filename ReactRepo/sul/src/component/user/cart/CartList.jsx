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

    .delete_box{
        width: 100px;
        height: 50px;
        background-color: #ffe23dfb;
        border:none;
        border-radius: 10px;
        cursor: pointer;
        font-size: 15px;
    }

`;

const CartList = () => {


    console.log("card list 컴포넌트 ~~~");
    
    let t = 0;

    const navigate = useNavigate();
    const [arr, setArr] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
    const [isChecked, setIsChecked] = useState(false);
    const [cartArr, setCartArr] =  useState([]);
    const [selectAll, setSelectAll] = useState(false);

    const handleSelectAllTogle = (e) => {
        const checked = e.target.checked;
        setSelectAll(checked);
        setCartArr(checked ? arr.map((productVo) => productVo.productNo) : []);
        // 전체 선택일 경우 상품 번호 배열에 추가, 아닐 경우 빈 배열로 설정
    };

    const handleCheckboxToggle = (e, productNo) => {
        const checked = e.target.checked;
        console.log("checked:",checked);
        if(checked){
            setTotalPrice((prevTotalPrice) => {
                // 삭제된 상품들의 가격 합 구하기
                
                let presentPrice = 0;
                for(const item of arr){
                    if(item.productNo===productNo){
                        presentPrice = parseInt(item.price);
                    }
                }

                return prevTotalPrice + presentPrice;
            });
        }else{
            setTotalPrice((prevTotalPrice) => {
                // 삭제된 상품들의 가격 합 구하기
                
                let presentPrice = 0;
                for(const item of arr){
                    if(item.productNo===productNo){
                        presentPrice = parseInt(item.price);
                    }
                }

                return prevTotalPrice - presentPrice;
            });
        }

        setCartArr((prevArr) => {
            if (checked) {
                return [...prevArr, productNo]; // 선택된 상품 번호 추가
            } else {
                return prevArr.filter((item) => item !== productNo); // 선택 취소된 상품 번호 제거
            }
        });
         // 모두 선택 체크박스의 해제 처리
         if (selectAll) {
            setSelectAll(false);
        }
    };

    console.log("@@@@@@@@@@@@22222222222: ", cartArr);

    const deleteCartList =  () => {

        console.log(cartArr)

        fetch("http://127.0.0.1:8888/app/cart/deleteList" ,{
            method : 'post',
            headers: {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify( cartArr)})
            // body: JSON.stringify( {deleteList : cartArr})})
            .then( (resp) => {return resp.json()})
            .then( (data) => {
                 console.log("delete 실행 결과 : " , data);

                 // 데이터 삭제 후 상태 업데이트
                 setArr((prevArr) => prevArr.filter((item) => !cartArr.includes(item.productNo)));
                 
                 
                 
             })
    }


    


    const loginInfo = JSON.parse(sessionStorage.getItem("loginMemberVo"));
    const memberNo = loginInfo.memberNo;
    // console.log("memberNo: ", memberNo);
    

    useEffect(() => {
        fetch("http://127.0.0.1:8888/app/cart/list" ,{
            method : 'post',
            headers: {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify({memberNo})})
            .then( (resp) => {return resp.json()})
            .then( (voList) => {
                // console.log("voList값: " ,voList);
                setArr(voList); 
                console.log(arr);
                // setTotalPrice(
                //     ()=>{
                //         for(let sendBuyPageObj of voList){
                //             // console.log(sendBuyPageObj.price);
                //             t += parseInt(sendBuyPageObj.price);
                //         }
                //         return t;
                //     }
                // )
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

    const changePlusCnt = (event, idx,productNo) => {
        const checkedStatus =  document.querySelector("#checkbox"+productNo).checked;
        console.log("checkedStatus",checkedStatus);
        console.log("productNo",productNo);
        if(checkedStatus){
        setArr((prevState) => {
            return produce(prevState, (draft) => {
                draft[idx].cnt = parseInt(draft[idx].cnt) + 1;
                draft[idx].price = parseInt(draft[idx].price) + (parseInt(draft[idx].price)/(parseInt(draft[idx].cnt)-1));
                setTotalPrice(totalPrice + parseInt(arr[idx].price)/(parseInt(arr[idx].cnt)));
            });
        });
        }
        console.log("cnt값: " + arr[idx].cnt)
    };

    const handleBuyButtonClick = () => {
        const selectedProducts = arr.filter(
          (productVo) => selectAll || cartArr.includes(productVo.productNo)
        );
    
        const sendBuyPageObj = {
          arr: selectedProducts,
          totalPrice: totalPrice,
        };
        navigate("/cart/buyList", { state: sendBuyPageObj });
      };

    // console.log("sendBuyPageObj : ", sendBuyPageObj);

    console.log("isChecked : ",isChecked );

    return (
        <StyledCartListDiv>
            <div className='cart_wrap'>
                <div className='top_left_wrap'>
                    <div className='all_select'>
                        <div>
                            {/* <input type="checkbox" checked={selectAll} onChange={handleSelectAllTogle}/>
                            모두 선택 */}
                        </div>
                        <div>
                            <button className='delete_box' type='button' onClick={deleteCartList}>선택 삭제</button>
                        </div>
                    </div>
                </div>
                
                <div><span>  </span></div>


                <div className='bottom_left_wrap'>
                    <hr className='line'/>
                    {
                         arr.map((productVo, idx) => (
                    
                    <div key = {productVo.cartNo} className='cart_list'>
                        <div className='select'>
                            <input 
                                type="checkbox" 
                                id={"checkbox"+productVo.productNo}
                                value={productVo.productNo} 
                                checked={selectAll || cartArr.includes(productVo.productNo)} 
                                onChange={(e) => handleCheckboxToggle(e, productVo.productNo)}
                            />
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
                                        {productVo.name}
                                        </div>
                                    <div>용량:  
                                        {productVo.capacity}
                                        ml</div>
                                    <div>가격: 
                                        {parseInt(productVo.price).toLocaleString('ko-KR')}
                                        원</div>
                                </div>
                             
                        </div>
                        <div><span></span></div>
                            <div className='detail'>
                            <div className='cnt_box'>
                                <div className='minus' onClick={(e)=>changeMinusCnt(e,idx,productVo.productNo)}>-</div>
                                <div className='cnt'> {productVo.cnt} </div>
                                <div className='plus' onClick={(e)=>{changePlusCnt(e,idx,productVo.productNo); }}>+</div>
                            </div>
                            <div className='price'></div>
                        </div>
                    </div>
                    ))
                    } 
                </div>

                <div className='bottom_right'>
                    <br />
                    총 결제 금액: {parseInt(totalPrice).toLocaleString('ko-KR')} 원
                    <br />
                    <button className='buy_btn' 
                    onClick={()=>{
                        handleBuyButtonClick();
                        }}>구매하기</button>
                </div>
            
            </div> {/*cart_wrap*/}

        </StyledCartListDiv>
    );
};

export default CartList;

