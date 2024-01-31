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
  margin-top: 6%;
  form {
    width: 100%;
    height: 100%;
  }

  .table {
    width: 60%;
    height: 100%;
    margin-left: 20%;
    font-size: 16px;
    padding-top: 10%;
    border-collapse: collapse;
    border: 2px solid lightgray;
  }
  h1 {
    padding-bottom: 3%;
    padding-top: 5%;
  }
  tr:first-child{
    border-bottom: 2px solid lightgray;
    height: 60px;
  }
  tr:first-child > td:first-child{
    width: 15%;
    padding-left: 3%;
  }
  tr:nth-child(2){
    height : 50vh;
  }
  tr:nth-child(3){
    border-bottom: 2px solid lightgray;
  }
  input {
    border: 2px solid lightgray;
    height: 50px;
  }

  a {
    font-weight: bold;
    margin-top: 5%;
  }
  .second{
    padding-left: 7%;
    font-weight: bold;
  }
  .content{
    padding-bottom: 3%;
    padding-left: 10%;
  }
  .comment {
    width: 90%;
  }
  .ccmt{
    height: 70px;
  }
  .img {
    padding-bottom: 3%;
    padding-left: 10%;
  }

  .insert {
    background-color: #ffe23dfb;
    width: 20%;
    border-radius: 20px;
    border: none;
  }
  .eotrmf{
    display: flex;
  }
`;

const Comdetail = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const communityVo = location.state.vo;
  const [communitycommtVo, setCommunitycommtVo] = useState([]);
  const loginInfo = JSON.parse(sessionStorage.getItem('loginMemberVo'));

  useEffect(() => {
    const fetchData = async () => {
      try {
        const obj = {
          ...communityVo,
          ...loginInfo,
        };

        const response = await fetch("http://127.0.0.1:8888/app/ccommt/list", {
          method: 'post',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(obj),
        });

        const data = await response.json();
        setCommunitycommtVo(data);
      } catch (error) {
        console.error("Error fetching comments:", error);
      }
    };

    fetchData();
  }, [communityVo, loginInfo]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const commentData = {
      communityNo: communityVo.communityNo,
      content: event.target.comment.value,
      nick: loginInfo.nick,
      memberNo: loginInfo.memberNo,
    };

    try {
      const response = await fetch("http://127.0.0.1:8888/app/ccommt/insert", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(commentData),
      });

      const data = await response.json();

      if (data.msg === 'good') {
        alert("댓글 등록이 완료되었습니다.");

        // Fetch the updated comment list
        const updatedCommentsResponse = await fetch("http://127.0.0.1:8888/app/ccommt/list", {
          method: 'post',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(commentData),
        });

        const updatedComments = await updatedCommentsResponse.json();

        // Update the state with the new comment data
        setCommunitycommtVo(updatedComments);

        navigate('/community/comlist', { state: { vo: {...communityVo, communitycommtVo: updatedComments} } });
      } else {
        alert("댓글 작성에 실패했습니다.");
      }
    } catch (error) {
      console.error("Error submitting comment:", error);
      alert("댓글 작성 중 에러");
    }
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
              <td className='img' colSpan={3}><img src={communityVo.img} alt='사진' width='380px' height='300px' /></td>
            </tr>
            <tr>
              <td className='content' colSpan={3}>{communityVo.content}</td>
            </tr>
            {communitycommtVo.map((vo) => (
              <tr className='ccmt' key={vo.communitycommtNo}>
                <td className='second'>{vo.nick}</td>
                <td colSpan={2}>{vo.content}</td>
              </tr>
            ))}
            <tr className='ccmt'>
              <td className='second'>{loginInfo.nick}</td>
              <td className='eotrmf' colSpan={2}>
                <input className='comment' type='text' name='comment' placeholder='댓글을 작성하세요.' />
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
