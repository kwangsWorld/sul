import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Myheader from './Myheader';

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
    width: 40%;
    border: 2px solid gray;
  }
  tr{
    display: flex;
    flex-direction: column;
  }
  tr:nth-child(5) {
    border-bottom: 1px solid gray;
  }
  table td {
    padding-top: 3%;
    padding-bottom: 3%;
    text-align: left;
    font-weight: bold;
  }
  td:first-child{
   display: flex;
   justify-content: center;
   border-bottom: 2px solid gray;
  }
  .tel{
    padding-left: 7%;
  }
  .child{
    padding-left: 18%;
  }
  .submit {
    width: 70%;
    height: 40px;
    border-radius: 20px;
    border: 6px solid #ffe23dfb;
    background-color: white;
    font-weight: bold;
  }


`;

const Myorder = () => {
 const [orderVoList, setOrderVoList] = useState([]);
  const loginInfo = JSON.parse(sessionStorage.getItem('loginMemberVo'));
  const [showModal, setShowModal] = useState(false);

  const loadOrderVoList = () => {
    fetch("http://127.0.0.1:8888/app/order/delete",{
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


  return (
    <StyledMyorderDiv showModal={showModal}>
      <Myheader />
      <div className='main'>
        <h2>취소내역</h2>
        <table>
          <tbody>
            {
              orderVoList.length === 0
              ?
              <h3>취소내역이 없습니다.</h3>
              :
              orderVoList.map( vo  => <tr key={vo.orderNo}>
                  <td className='child'>주문번호 : {vo.orderNo}</td>
                  <td className='child'>주문날짜 : {vo.enrollDate}</td>
                  <td className='child'>총가격 : {vo.totalPrice}</td>
                </tr> )   
            }
          </tbody>
        </table>
      </div>


    </StyledMyorderDiv>
  );
};

export default Myorder;
