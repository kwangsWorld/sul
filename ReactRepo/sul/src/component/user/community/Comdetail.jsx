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
  form {
    width: 100%;
    height: 100%;
  }

  .table {
    width: 60%;
    height: 150%;
    margin-left: 20%;
    font-size: 16px;
    border-collapse: collapse;
    border: 2px solid gray;
  }
  h1 {
    padding-bottom: 3%;
    padding-top: 5%;
  }
  tr:first-child{
    border-bottom: 2px solid gray;
    height: 10%;
  }
  tr:nth-child(2){
    border-bottom: 2px solid gray;
    height: 50%;
  }
  tr:nth-child(3){
    height: 100px;
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
    font-weight: bold;
    padding-top: 13%;
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
  const navigate = useNavigate();
  const location = useLocation();
  const communityVo = location.state.vo;
  const [communitycommtVo, setCommunitycommtVo] = useState([]);
  const loginInfo = JSON.parse(sessionStorage.getItem('loginMemberVo'));

  useEffect(() => {
    const obj = {
      ...communityVo,
      ...loginInfo,
    };

    fetch("http://127.0.0.1:8888/app/ccommt/list", {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(obj),
    })
      .then((resp) => resp.json())
      .then((data) => {
        setCommunitycommtVo(data);
      });
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();

    const commentData = {
      communityNo: communityVo.communityNo,
      content: event.target.comment.value,
      nick: loginInfo.nick,
      memberNo: loginInfo.memberNo,
    };

    fetch("http://127.0.0.1:8888/app/ccommt/insert", {
      method: "POST",
      headers: {
        "Content-Type": "application/json" ,
      }, 
      body: JSON.stringify(commentData),
    })
      .then((resp) => resp.json())
      .then((data) => {
        if (data.msg === 'good') {
          alert("댓글 등록이 완료되었습니다.");

          // Update the state with the new comment data
          setCommunitycommtVo([...communitycommtVo, data]);

          navigate('/community/comlist', { state: { vo: {...communityVo, communitycommtVo: [...communitycommtVo, data]} } });
        } else {
          alert("댓글 작성에 실패했습니다.");
        }
      })
      .catch(() => {
        alert("댓글 작성 중 에러");
      });
  };

  const handleChangeInput = (event) => {
    const { name, value } = event.target;

    setCommunitycommtVo((prevCommunitycommtVo) => [...prevCommunitycommtVo, { [name]: value }]);
  };


  return (
    <StyledComdetailDiv>
      <h1>커뮤니티 게시판</h1>
      <form onSubmit={handleSubmit}>
        <table className='table'>
          <tbody>
            <tr>
              <td>제목</td>
              <td>{communityVo.title}</td>
              <td>{communityVo.nick}</td>
            </tr> 
            <tr>
              <td className='img'><img src={communityVo.img} alt='사진' width='200px' height='200px' /></td>
              <td className='img'>{communityVo.content}</td>
            </tr>
            {communitycommtVo.map((vo) => (
              <tr key={vo.communitycommtNo}>
                <td className='second'>{vo.nick}</td>
                <td className='second'>{vo.content}</td>
                <td className='second'>{vo.enrollDate}</td>
              </tr>
            ))}
            <tr>
              <td>{loginInfo.nick}</td>
              <td>
                <input className='comment' type='text' name='comment' placeholder='댓글을 작성하세요.' onChange={handleChangeInput} />
              </td>
              <td>
                <input className='insert' type='submit' value='등록' />
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
