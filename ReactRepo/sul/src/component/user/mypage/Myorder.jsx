import React, { useState } from 'react';
import styled from 'styled-components';
import Myheader from './Myheader';

const StyledMyorderDiv = styled.div`
  .main {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding-top: 5%;
  }
  .ul {
    width: 60%;
    height: 20%;
    list-style: none;
    display: flex;
    border: 3px solid gray;
    border-radius: 30px;
  }

  .ul > li {
    padding-left: 12%;
    padding-top: 3%;
    padding-bottom: 3%;
    font-size: 20px;
    font-weight: bold;
    color: gray;
    margin-right: 6%;
  }

  table {
    border-collapse: collapse;
    width: 40%;
    border: 2px solid gray;
  }
  tr:nth-child(5) {
    border-bottom: 1px solid gray;
  }
  table td {
    padding-left: 19%;
    padding-top: 2%;
    padding-bottom: 3%;
    text-align: left;
    font-weight: bold;
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
  const [showModal, setShowModal] = useState(false);

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
        <ul className='ul'>
          <li>배송준비중</li>
          <li>배송중</li>
          <li>배송완료</li>
        </ul>
        <table>
          <tbody>
            <tr>
              <td>2022.01.01</td>
            </tr>
            <tr>
              <td>이미지</td>
            </tr>
            <tr>
              <td>술이름술술</td>
            </tr>
            <tr>
              <td>수량1개</td>
            </tr>
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
