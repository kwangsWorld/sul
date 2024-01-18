import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Myheader from './Myheader';
import { Link, useNavigate } from 'react-router-dom';

const StyledMyaddressDiv = styled.div`
width: 100%;
height: 100%;
justify-content: center;
align-items: center;
display: flex;
flex-direction: column;
margin-top: 5%;
  table{
    border: 3px solid gray;
    width: 40%;
    height: 100%;
    margin-bottom: 10%;
  }
  tr{
    display: flex;
    border-top: 3px solid gray;
    flex-direction: column;
  }
  tr:first-child{
    padding-top: 5%;
    padding-bottom: 5%;
  }
  tr:nth-child(2){
    padding-top: 3%;
    padding-bottom: 3%;
  }
  td{
    font-weight: bold;
    padding-top: 2%;
    text-align: center;
  }
  button{
    background-color: white;
    border-radius: 20px;
    font-size: 13px;
    font-weight: bold;
    border: 6px solid #ffe23dfb;
  }
  .btn{
    padding-left: 45%;
    padding-top: 2%;
  }
  .div {
    width: 20%;
    padding-bottom: 0.5%;
    padding-left: 5%;
  }
  .font {
    margin-left: 25%;
    font-weight: bold;
  }

  .font:hover {
    color: gray;
  }
`;

const Myaddress = () => {
  
  const navigate = useNavigate();
  const [addressVo, setAddressVo] = useState([]);
  const loginInfo = JSON.parse(sessionStorage.getItem('loginMemberVo'));
  const loadMemberVoList = () => {

    


    fetch("http://127.0.0.1:8888/app/address/list",{
      method : 'post',
      headers:{
        "Content-Type" : "application/json"
      },
      body: JSON.stringify(loginInfo)
    })
    .then( resp => resp.json())
    .then((x)=> {setAddressVo(x);})
    ;
  }

  useEffect( ()=>{
    console.log("useEffect호출");
    loadMemberVoList();
  }, []);


  const handleplus = () => {
    navigate("/mypage/myaddressplus")
  };

  const detailItem = (vo)=> {
    navigate("/mypage/addressedit", { state: {vo}});
  };

  return (
    <StyledMyaddressDiv>
     
        <Myheader />
      <h1>배송지</h1>
      <div className="div">
        <button onClick={handleplus}>새 배송지 추가하기 +</button>
      </div>
      <table>
        <tbody>
          {
            addressVo.length === 0 
            ?
            <h1>로딩중</h1>
            : 
              addressVo.map((vo) => (
              <tr key={vo.addressNo}>     
                <td>{vo.name}</td>
                <td>{vo.tel}</td>
                <td>{vo.address}</td>
                <div className='btn'>
                  <td>
                    <button >삭제</button>
                  </td>
                </div>
            </tr>
              )
            )
              
          }
        </tbody>
      </table>
    </StyledMyaddressDiv>
  );
};

export default Myaddress;