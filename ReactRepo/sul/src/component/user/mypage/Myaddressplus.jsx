import styled from 'styled-components';
import Myheader from './Myheader';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const StyledMyaddressDiv = styled.div`
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  margin-top: 5%;

  form {
    width: 90%;
    height: 70%;
    margin-left: 45%;
  }

  table {
    border: 3px solid gray;
    width: 50%;
    height: 80%;
    margin-bottom: 10%;
    padding-top: 3%;
  }

  tr {
    display: flex;
    flex-direction: column;
  }

  tr:first-child {
    padding-top: 5%;
    padding-bottom: 5%;
  }

  tr:nth-child(2) {
    border-top: 3px solid gray;
    padding-top: 3%;
    padding-bottom: 3%;
  }

  td {
    font-weight: bold;
    padding-top: 2%;
    text-align: center;
  }

  input {
    width: 50%;
    height: 50px;
    border: none;
    border-bottom: 1px solid gray;
  }

  .btn {
    background-color: white;
    border-radius: 20px;
    font-size: 16px;
    font-weight: bold;
    border: 6px solid #ffe23dfb;
  }

  .deleteBtn {
    background-color: white;
    border-radius: 20px;
    font-size: 16px;
    font-weight: bold;
    border: 6px solid red;
    margin-top: 10px;
  }
`;

const Myaddress = () => {
  const navigate = useNavigate();
  const [inputAddressVo, setInputAddressVo] = useState({});
  const [addressList, setAddressList] = useState([]);

  const loginInfo = JSON.parse(sessionStorage.getItem('loginMemberVo'));

  useEffect(() => {
    loadAddressList();
  }, []);

  const loadAddressList = () => {
    fetch("http://127.0.0.1:8888/app/address/list",{
      method : 'post',
      headers: {
        "Content-Type" : "application/json"
      },
      body: JSON.stringify(loginInfo)
    })
      .then((resp) => resp.json())
      .then((data) => {
        setAddressList(data);
      })
      .catch(() => {
        alert('주소 목록 불러오기 에러');
      });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const obj = {
      ...inputAddressVo,
      ...loginInfo,
    };

    fetch("http://127.0.0.1:8888/app/address/plus", {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(obj),
    })
      .then((resp) => resp.json())
      .then((data) => {
        if (data.msg === 'good') {
          alert('배송지가 추가되었습니다.');
          navigate("/mypage/myaddress")
          loadAddressList();
        } else {
          alert('다시 추가해주세요.');
        }
      })
      .catch(() => {
        alert('배송지 추가 에러');
      });
  };

  const handleChangeInput = (event) => {
    const { name, value } = event.target;

    setInputAddressVo({
      ...inputAddressVo,
      [name]: value,
    });
  };

 

  return (
    <StyledMyaddressDiv>
      <Myheader />
      <h1>배송지</h1>
      <form onSubmit={handleSubmit}>
        <table>
          <tbody>
            <tr>
              <td>{loginInfo.name}</td>
              <td>{loginInfo.tel}</td>
              <td>
                <input
                  type='text'
                  name='address'
                  placeholder='주소를 입력하세요.'
                  onChange={handleChangeInput}
                />
              </td>
              <td>
                <input className='btn' type='submit' value='등록' />
              </td>
            </tr>
          </tbody>
        </table>
      </form>
      
    </StyledMyaddressDiv>
  );
};

export default Myaddress;
