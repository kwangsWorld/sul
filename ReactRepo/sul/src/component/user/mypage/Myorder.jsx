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

  /* 모달 스타일 */
  .modal {
    display: ${(props) => (props.showModal ? 'block' : 'none')};
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
  }

  .modal-content {
    background: white;
    width: 50%;
    margin: 10% auto;
    padding: 20px;
    border-radius: 10px;
  }
  p{
    font-weight: bold;
  }
  .close {
    float: right;
    cursor: pointer;
  }
  .second{
    width: 100%;
    height: 100%;
  }
  .content{
    width: 90%;
    height: 120px;
    border: none;
  }
  .file{
    width: 90%;
  }
  .write{
    margin-top: 3%;
    margin-left: 23%;
    width: 50%;
    height: 30px;
    border-radius: 50px;
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

  const handleReviewClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <StyledMyorderDiv showModal={showModal}>
      <Myheader />
      <div className='main'>
        <table>
          <tbody>
            {
              orderVoList.length === 0
              ?
              <h3>주문내역이 없습니다.</h3>
              :
              orderVoList.map( vo  => <tr key={vo.orderNo}>
                  <td>{loginInfo.name}<div className='tel'>{loginInfo.tel}</div></td>
                  <td className='child'>{vo.deliveryStatus}</td>
                  <td className='child'>주문날짜 : {vo.orderDate}</td>
                  <td className='child'>{vo.image}</td>
                  <td className='child'>품명 : {vo.name}</td>
                  <td className='child'>수량 : {vo.quantity}</td>
                </tr> )   
            }
            <tr>
              <td>
                <input
                  className='submit'
                  type='submit'
                  value='리뷰하기'
                  onClick={handleReviewClick}
                />
              </td>
            </tr>
          </tbody>
        </table>
      </div>


      <div className='modal'>
        <div className='modal-content'>
          <span className='close' onClick={handleCloseModal}>
            &times;
          </span>
          <p>리뷰작성하기</p>
          <form>
            <table className='second'>
                <tbody>
                    <tr>
                        <td>상품이름</td>
                    </tr>
                    <tr>
                        <td>별점⭐⭐⭐</td>
                    </tr>
                    <tr>
                        <td><input className='content' type='text' name='content' placeholder='내용을 입력해주세요' /></td>
                    </tr>
                    <tr>
                        <td><input className='file' type='file' name='file' /></td>
                    </tr>
                </tbody>
            </table>
            <input className='write' type='submit' value="작성하기" />
          </form>
        </div>
      </div>
    </StyledMyorderDiv>
  );
};

export default Myorder;
