import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Myheader from './Myheader';
import { useNavigate } from 'react-router-dom';

const StyledMyorderDiv = styled.div`
  h3{
    text-align: center;
  }
  .main {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding-top: 5%;
  }

  table {
    border-collapse: collapse;
    width: 50%;
    border: 2px solid gray;
  }
  tr{
    display: flex;
    flex-direction: column;
    border-bottom: 2px solid gray;
  }
 
  table td {
    padding-top: 3%;
    padding-bottom: 3%;
    font-weight: bold;
    padding-left: 15%;
  }
  .td{
    border-bottom: 2px solid gray;
  }
  .submit{
    border: none;
    background-color: white;
    font-weight: bold;
    font-size: 15px;
    padding-left: 70%;
  }
  .submit:hover{
    color: blue;
  }
`;

const Myorder = () => {
  
  const navigate = useNavigate();
  const [orderVoList, setOrderVoList] = useState([]);
  const[vo, setVo] = useState(orderVoList);
  const loginInfo = JSON.parse(sessionStorage.getItem('loginMemberVo'));
  const orderNo = orderVoList.map(order => order.orderNo );
  console.log("order",orderVoList);
  const loadOrderVoList = () => {
    fetch("http://127.0.0.1:8888/app/order/list",{
      method : 'post',
      headers : {
        "Content-Type" : "application/json"
      },
      body : JSON.stringify(loginInfo)
    })
    .then( resp => resp.json())
    .then((x) => {setOrderVoList(x);})
    ;
  }
  
  useEffect( ()=> {
    console.log("useEffect호출");
    loadOrderVoList();
  },[]);

  const detailItem = (vo) => {
    navigate('/mypage/myorderdetail', {state: {vo}});
  };

  const handleCancelChange = (orderNo) => {
    const editedVo = {
      ...vo,
      orderNo:orderNo,
      ...loginInfo,
    };
    fetch("http://127.0.0.1:8888/app/order/cancel",{
      method: 'post',
      headers: {
        "Content-Type" : "application/json"
      },
      body: JSON.stringify(editedVo)
    })
    .then((resp) => resp.json())
    .then((data) => {
      if(data.msg === 'good'){
        setVo(editedVo);
        alert('주문이 취소되었습니다.');
        navigate('/mypage/myorder');
      }else{
        alert('주문 취소 실패.');
      }
    })
    .catch((e)=>{
      alert('주문 취소 중 에러발생');
    });
  };

  return (
    <StyledMyorderDiv>
      <Myheader />
      <div className='main'>
        <table>
          <tbody>
            {
              orderVoList.length === 0
              ?
              <h3>주문내역이 없습니다.</h3>
              :
              orderVoList.map((vo)  => (
              <tr key={vo.orderNo} onClick={()=>{
                  detailItem(vo)}
              }>
                  <td className='child'>{vo.deliveryStatus}<input className='submit' type='submit' value="취소하기" onClick={() => {handleCancelChange(vo.orderNo);}} /></td>
                  <td className='child'>주문번호 : {vo.orderNo}</td>
                  <td className='child'>주문날짜 : {vo.enrollDate}</td>
                  <td className='child'>총가격 : {vo.totalPrice}</td>
                </tr> ))  
            }
             
          </tbody>
        </table>
      </div>


      
    </StyledMyorderDiv>
  );
};

export default Myorder;
