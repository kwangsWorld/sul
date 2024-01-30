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
    border: 2px solid gray;
    width: 40%;
    height: 100%;
    margin-bottom: 10%;
  }
  tr{
    display: flex;
    border-top: 2px solid gray;
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
    border: 3px solid #ffe23dfb;
  }
  .btn{
    padding-left: 39%;
    padding-top: 2%;
  }
  .div {
    width: 20%;
    padding-bottom: 0.5%;
    padding-left: 6%;
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
  const [vo, setVo] = useState(addressVo);
  const [editedDelYn, setEditedDelYn] = useState(addressVo.delYn);
  const loginInfo = JSON.parse(sessionStorage.getItem('loginMemberVo'));
  const memberNo = loginInfo&&loginInfo.memberNo;
  const addressNo = loginInfo&&loginInfo.addressNo;

  console.log("addressNo",addressNo);


  const loadMemberVoList = () => {

    fetch("http://127.0.0.1:8888/app/address/list",{
      method : 'post',
      headers:{
        "Content-Type" : "application/json"
      },
      body: JSON.stringify(loginInfo)
    })
    .then( resp => resp.json())
    .then((x)=> {
      setAddressVo(x);
      console.log("x : " , x);
    })
    ;
  }
   
  const handleplus = () => {
    navigate("/mypage/myaddressplus")
  };

  const handleDelete = (no) => {

    const editedVo = {
      ...vo,
      addressNo: no,
      delYn : 'Y',
    };

    fetch("http://127.0.0.1:8888/app/address/delete",{
      method : 'post',
      headers : {
        "Content-Type":"application/json"
      },
      body: JSON.stringify(editedVo)
    })
    .then( (resp) => resp.json())
    .then( (data) => {
      if(data.msg === 'good') {
        setVo(editedVo);
        alert('배송지가 삭제되었습니다.');
        navigate('/mypage/info');
      }else{
        alert('배송지 삭제 실패.');
      }
    })
    .catch( (e) => {
      alert('배송지 삭제 중 에러 발생');
    });
  };

  const handleSelectAddress = (no) => {
    const editedVo = {
      ...vo,
      memberNo : memberNo,
      addressNo: no,
    };

    fetch("http://127.0.0.1:8888/app/member/selectBasicAdrress", {
      method:'post',
      headers : {
        "Content-Type" : "application/json"
      },
      body: JSON.stringify(editedVo)
    })
    .then((resp) => resp.json())
    .then((data) => {
      if(data.msg === 'good') {
        alert('기본 배송지로 설정되었습니다.');
      }else{
        alert('기본 배송지 설정 실패.');
      }
    })
    .catch((e) => {
      alert('기본배송지 설정 중 에러');
    });
  };

  useEffect( ()=>{
    console.log("useEffect호출");
    loadMemberVoList();
  }, []);

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
            <h1>배송지를 추가해주세요.</h1>
            : 
              addressVo.map((vo) => (
              <tr key={vo.addressNo}>     
                <td>{vo.name}</td>
                <td>{vo.tel}</td>
                <td>{vo.address}</td>
                <div className='btn'>
                  <td>
                    <button onClick={ ()=>{handleDelete(vo.addressNo);} }>삭제</button>
                  </td>
                  <td>
                      <button onClick={() => { handleSelectAddress(vo.addressNo); }}>기본 배송지로 설정</button>
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