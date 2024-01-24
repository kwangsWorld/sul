import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Myheader from './Myheader';

const StyledComdetailDiv = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 5%;
  form {
    width: 100%;
    height: 100%;
    margin-bottom: 3%;
  }

  .table {
    width: 50%;
    height: 400px;
    margin-left: 26%;
    font-size: 16px;
    border-collapse: collapse;
    border: 2px solid gray;
  }
  h1 {
    padding-bottom: 3%;
    padding-top: 5%;
  }
  button{
    background-color: white;
    border-radius: 20px;
    font-size: 16px;
    font-weight: bold;
    border: 6px solid #ffe23dfb;
  }

  tr > td:first-child {
    padding-left: 10%;
    font-weight: bold;
  }
  tr:first-child{
    height: 45px;
  }
  tr{
    border-bottom: 2px solid gray;
  }
  td:nth-child(2){
  }
  input {
    border: 2px solid lightgray;
    height: 40%;
  }
  textarea{
    border: none;
    text-align: center;
    padding-top: 4%;
  }
  .tse{
    width: 200px;
    margin-left: 20%;
    height: 200px;
    text-align: left;
  }
  .second {
    border-top: 2px solid gray;
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
  .btn{
    margin-bottom: 10%;
  }
`;

const Comdetail = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const communityVo = location.state.vo;
  const[vo, setVo] =useState(communityVo);
  const [editedTitle , setEditedTitle] = useState(communityVo.title);
  const [editedContent , setEditedContent] = useState(communityVo.content);
  const [editedImg , setEditedImg] = useState(communityVo.img);
  const [editedDelYn , setEditedDelYn] = useState(communityVo.delYn);
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

  const handleList = () => {
    navigate("/mypage/mycom")
  };

  const handleEdit = () => {
    const editVo = {
        ...vo,
        title: editedTitle,
        content: editedContent,
        img: editedImg,
    };

    fetch("http://127.0.0.1:8888/app/community/edit",{
        method: 'post',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(editVo)
    })
    .then((resp) => resp.json())
    .then((data) => {
        if(data.msg === "good"){
            setVo(editVo);
            alert("게시글 수정이 완료되었습니다.");
            navigate("/mypage/mycom")
        }else{
            alert("게시글 수정 실패.")

        }
    })
    .catch((e) => {
        alert("게시글 수정 중 에러 발생");
    });
  };

  const handleDelete = () => {
    
    const editedVo = {
      ...vo,
      delYn : editedDelYn,
    };

    fetch("http://127.0.0.1:8888/app/community/delete", {
      method: 'post',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(editedVo)
    })
      .then((resp) => resp.json())
      .then((data) => {
        if (data.msg === 'good') {
          setVo(editedVo);
          alert('게시글 삭제가 완료되었습니다.');
          navigate('/mypage/mycom');
        } else {
          alert('게시글 삭제 실패.');
        }
      })
      .catch((e) => {
        alert('게시글 삭제 중 에러 발생');
      });
  };

 
  const handleImgChange = (event) => {
    setEditedImg(event.target.value);
  }

  const handleContentChange = (event) => {
    setEditedContent(event.target.value);
  }

  const handleTitleChange = (event) => {
    setEditedTitle(event.target.value);
  }

  return (
    <StyledComdetailDiv>
        <Myheader />
      <h1>커뮤니티 게시판</h1>
      <form>
        <table className='table'>
          <tbody>
            <tr>
              <td>제목</td>
              <td><textarea name='title' value={editedTitle} onChange={handleTitleChange}>
                {communityVo.title}</textarea></td>
              <td>{communityVo.nick}</td>
            </tr>
            <tr>
              <td className='img' name='img' value={editedImg} onChange={handleImgChange}>
                {communityVo.img}이미지</td>
              <td className='content'><textarea className='tse' name='content' value={editedContent} onChange={handleContentChange}>
                {communityVo.content}</textarea></td>
            </tr>
            {communitycommtVo.map((vo) => (
              <tr key={vo.communitycommtNo}>
                <td className='second'>{vo.nick}</td>
                <td className='second'>{vo.content}</td>
                <td className='second'>{vo.enrollDate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </form>
      <div className='btn'>
        <button onClick={handleList}>목록으로</button>
        <button onClick={handleEdit}>수정하기</button>
        <button onClick={handleDelete} >삭제하기</button>
      </div>
    </StyledComdetailDiv>
  );
};

export default Comdetail;
