import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Myheader from './Myheader';
import { Link } from 'react-router-dom';

const StyledMyaddressDiv = styled.div`
  width: 100%;
  height: 200%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  table {
    width: 35%;
    background-color: lightgray;
    margin-bottom: 43%;
    padding-bottom: 10%;
    border-radius: 50px;
    height: 90%; /* 높이 조절 */
  }

  h1 {
    padding-bottom: 2%;
  }

  tr {
    width: 100%;
    height: 100px;
    display: flex; /* 추가 */
    flex-direction: column; /* 추가 */
  }

  td {
    font-weight: bold;
    font-size: 20px;
    display: flex; /* 추가 */
    flex-direction: column; /* 추가 */
    align-items: center; /* 추가 */
    padding-top: 10%;
  }

  .button > button{
    border: 6px solid #ffe23dfb;
    background-color: white;
    width: 100%;
    height: 50px;
    border-radius: 20px;
    font-size: 16px;
    font-weight: bold;
  }

  .div {
    width: 20%;
    padding-bottom: 0.5%;
  }

  .font {
    margin-left: 30%;
    font-weight: bold;
    color: #615303;
  }

  .font:hover {
    color: gray;
  }
`;

const Myaddress = () => {
  const [addressVoList, setAddressVoList] = useState([]);
  const loadAddressVoList = () => {
    fetch("http://127.0.0.1:8888/app/address/list")
      .then((resp) => resp.json())
      .then((x) => {
        setAddressVoList(x);
      });
  };

  useEffect(() => {
    console.log("useEffect 호출");
    loadAddressVoList();
  }, []);

  return (
    <StyledMyaddressDiv>
      <Myheader />
      <h1>배송지</h1>
      <div className="div">
        <Link className="font" to="">
          수정
        </Link>
        <Link className="font">삭제</Link>
      </div>
      <table>
        <tbody>
          {addressVoList.length === 0 ? (
            <h2>로딩중</h2>
          ) : (
            addressVoList.map((vo) => (
              <tr key={vo.addressNo}>
                <td>{vo.name}</td>
                <td>{vo.address}</td>
                <td>{vo.tel}</td>
                <td>
                  <Link className='button' to='/mypage/myaddressplus'><button>새 배송지 추가하기 +</button></Link>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </StyledMyaddressDiv>
  );
};

export default Myaddress;