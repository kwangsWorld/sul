import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Myheader from './Myheader';
import { useLocation, useNavigate } from 'react-router-dom';

const StyledOrderDetaildDiv = styled.div`
width : 100%;

  .main {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-top: 5%;
  }

  table {
    border-collapse: collapse;
    width: 40%;
    border: 2px solid lightgray;

  }
  tr{
    display: flex;
    flex-direction: column;
    border-bottom: 2px solid lightgray;
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
  }
  td:nth-child(3){
    display: flex;
  }
  .quantity{
    padding-left: 6%;
  }
  button{
    border: none;
    background-color: white;
    font-weight: bold;
    margin-top: 3%;
  }
  
  button:hover, input:hover{
    color: blue;
  }
  .child{
    padding-left: 15%;
  }
  .submit{
    background-color: white;
    border: none;
    font-weight: bold;
    padding-left: 15%;
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
    border: 2px solid lightgray;
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
  .tr{
    border-bottom: none;
  }
`;

const Myorderdetail = () => {

    const navigate = useNavigate();
    const location = useLocation();
    const orderVo = location.state.vo;
    const [vo, setVo] = useState(orderVo);
    const [showModal, setShowModal] = useState(false);
    const [detailVoList, setDetailVoList] = useState([]);
   
    const handleList = () => {
        navigate('/mypage/myorder')
    };
    
    const loadDetailVoList= () => {
      fetch("http://127.0.0.1:8888/app/order/detail", {
        method : 'post',
        headers: {
          'Content-Type':'application/json',
        },
        body: JSON.stringify({
          orderNo : vo.orderNo,
        }),
     })
     .then( (resp) => resp.json())
     .then((data) => {
      console.log(data);
      setDetailVoList(data);
     });
  
    };

    useEffect(()=>{
      loadDetailVoList();
    },[])
    
    const [inputReviewVo, setInputReviewVo] = useState({});
    const loginInfo = JSON.parse(sessionStorage.getItem('loginMemberVo'));
    
    const handleReviewClick = (detailItem) => {
      console.log(detailItem);

      setInputReviewVo({
        ...inputReviewVo,
        name: detailItem.name,
        orderListNo: detailItem.orderListNo
    });
        setShowModal(true);
      };

    const handleChangeInput = (event) => {
      const {name, value, files} = event.target;
      
      setInputReviewVo({
        ...inputReviewVo,
        [name] : files ? files[0] : value,
      })
    }

    const handleSubmit = (event) =>{
        event.preventDefault();
   
        const formData = new FormData();
        formData.append("rating", inputReviewVo.rating);
        formData.append("content", inputReviewVo.content);
        formData.append("file", inputReviewVo.file);
        formData.append("orderListNo", inputReviewVo.orderListNo);
        formData.append("memberNo", loginInfo.memberNo);

        const obj = {
          ...inputReviewVo,
          ...loginInfo,
        };

        formData.forEach( (value, key) => {
          obj[key] = value;
        })

        console.log("전체 :::" , obj);
   
        fetch("http://127.0.0.1:8888/app/review/write", {
           method : 'post',
           body: formData
        })
        .then( resp => {return resp.json();})
        .then((data) => {
         if(data.msg === "good"){
           alert("리뷰작성이 완료되었습니다.")
           navigate("/")
         }else{
           alert("리뷰작성 실패.")
         }
        })
        .catch(() => {
         alert("리뷰작성중 에러발생")
        });
     };
     const handleCloseModal = () => {
        setShowModal(false);
      };
    


    return (
        <StyledOrderDetaildDiv showModal={showModal}>
            <Myheader />
            <div className='main'>
                <table>
                    <tbody>
                    {detailVoList.map((detailItem, index) => (
                      <tr key={index}>
                        <td className='child'><img src={detailItem.image} /></td>
                        <td className='child'>상품명 : {detailItem.name}</td>
                        <td className='child'>가격 : {detailItem.price} <div className='quantity'>수량 : {detailItem.quantity}</div></td>
                        <td>
                            <input
                            className='submit'
                            type='submit'
                            value='리뷰하기'
                            onClick={()=>{handleReviewClick(detailItem)}}
                            />
                        </td>
                      </tr>
                    ))}
                    </tbody>
                </table>
                <button onClick={handleList}>뒤로가기</button>
            </div>
            <div className='modal'>
        <div className='modal-content'>
          <span className='close' onClick={handleCloseModal}>
            &times;
          </span>
          <p>리뷰작성하기</p>
          <form onSubmit={handleSubmit}>
            <table className='second'>
                <tbody>
                    <tr className='tr'>
                        <td>{inputReviewVo.name}</td>
                    </tr>
                    <tr className='tr'>
                        <td><select name="rating" id="" onChange={handleChangeInput}>
                            <option name="rating" value="1">⭐</option>
                            <option name="rating" value="2">⭐⭐</option>
                            <option name="rating" value="3">⭐⭐⭐</option>
                            <option name="rating" value="4">⭐⭐⭐⭐</option>
                            <option name="rating" value="5">⭐⭐⭐⭐⭐</option>
                          </select></td>
                    </tr>
                    <tr className='tr'>
                        <td><input className='content' type='text' name='content' placeholder='내용을 입력해주세요' onChange={handleChangeInput} /></td>
                    </tr>
                    <tr className='tr'>
                        <td><input className='file' type='file' name='file' onChange={handleChangeInput} /></td>
                    </tr>
                </tbody>
                <tr>
                      <td className='btn' colSpan={2}><input className='write' type='submit' value="작성하기" /></td>
                  </tr>
            </table>
            {/* <input className='write' type='submit' value="작성하기" /> */}
          </form>
        </div>
      </div>
        </StyledOrderDetaildDiv>
    );
};

export default Myorderdetail;