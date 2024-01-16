import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const StyledComdetailDiv = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  form{
    width: 100%;
    height: 100%;
  }
  h1 {
    padding-bottom: 3%;
  }
  
  .table {
    width: 60%;
    height: 60%;
    font-size: 16px;
    border-collapse: collapse;
    border: 2px solid black;
  }

  tr > td:first-child {
    padding-left: 10%;
    font-weight: bold;
  }

  input {
    border: 2px solid lightgray;
    height: 40%;
  }

  a {
    padding-top: 3%;
    font-weight: bold;
  }

  .second {
    border-top: 2px solid black;
  }

  .comment {
    width: 90%;
  }

  .img {
    padding-bottom: 5%;
  }

  .insert {
    background-color: #ffe23dfb;
    width: 40%;
    border-radius: 20px;
    border: none;
  }
`;

const Comdetail = () => {
  const location = useLocation();
  const communityVo = location.state.vo;
  const [communitycommtVo, setCommunitycommtVo] = useState([]);
  const [communitycommtVoList, setCommunitycommtVoList] = useState([]);
  const loginInfo = JSON.parse(sessionStorage.getItem('loginMemberVo'));

    useEffect(() => {
      console.log("커뮤니티 넘버:",communityVo.communityNo);

    const obj = {
        ...communityVo,
        ...loginInfo
    };

    fetch("http://127.0.0.1:8888/app/ccommt/list",{
        method:'post',
        headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(obj)
    })
    .then((resp) => {return resp.json()})
    .then(data =>{
        setCommunitycommtVo(data);
    })
  }, []);


  return (
    <StyledComdetailDiv>
      <h1>커뮤니티 게시판</h1>
      <form>
        <table className='table'>
          <tbody>
            <tr>
              <td>제목</td>
              <td>{communityVo.title}</td>
              <td>{communityVo.nick}</td>
            </tr>
            <tr>
              <td className='img'>{communityVo.img}이미지</td>
              <td className='img'>{communityVo.content}</td>
            </tr>
            {communitycommtVo.map(vo => (
              <tr key={vo.communitycommtNo}>
                <td className='second'>{vo.nick}</td>
                <td className='second'>{vo.content}</td>
                <td className='second'>{vo.enrollDate}</td>
              </tr>
            ))}
            <tr>
              <td>{loginInfo.nick}</td>
              <td>
                <input className='comment' type='text' name='comment' placeholder='댓글을 작성하세요.' />
              </td>
              <td>
                <input className='insert' type='submit' value='등록' />{' '}
              </td>
            </tr>
          </tbody>
        </table>
      </form>
      
      <Link to='/community/comlist'>목록으로</Link>
    </StyledComdetailDiv>
  );
};

export default Comdetail;
