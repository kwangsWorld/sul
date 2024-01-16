import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const StyledComwriteDiv = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  form {
    width: 100%;
    margin-left: 20%;
  }
  h1 {
    text-align: center;
    padding-right: 20%;
  }
  table {
    border: 3px solid #ffe23dfb;
    width: 80%;
    padding-top: 5%;
    padding-bottom: 5%;
    border-radius: 50px;
    margin-top: 5%;
  }
  textarea {
    width: 90%;
    height: 300px;
    border: 3px solid lightgray;
  }
  tr > td:first-child {
    font-size: 18px;
    font-weight: bold;
    padding-left: 8%;
  }
  .title {
    width: 90%;
    height: 50px;
    border: none;
    border-bottom: 3px solid lightgray;
  }
  .write {
    border: none;
    width: 10%;
    height: 40px;
    font-size: 15px;
    font-weight: bold;
    border-radius: 10px;
    background-color: #ffe23dfb;
    margin-left: 40%;
    margin-top: 3%;
  }
`;

const Comwrite = () => {

  const navigate = useNavigate();
  
  const[inputCommunityVo, setInputCommunityVo] = useState({

  });

  const handleSubmit = (event) => {
      event.prventDefault();

      fetch("http://127.0.0.1:8888/app/community/insert",{
        method:'post',
        headers: {
          "Content-Type" : "application/json"
        },
        body : JSON.stringify(inputCommunityVo)
      })
      .then( resp => {return resp.json();} )
      .then( (data) => {
          if( data.msg === "good"){
              alert("게시글 작성 성공")
              navigate("/community/comlist")
          }else{
              alert("게시글 작성 실패")
              navigate("/")
          }
      } )
      .catch( () => {
          alert("게시글 작성 에러발생");
      } )
   };

   const handleChangeInput = (event) =>{
    const {name , value} = event.target;

    setInputCommunityVo({
        ...inputCommunityVo ,
        [name] : value,
    })
   }
   
  

    return (
      <StyledComwriteDiv>
        <form onSubmit={handleSubmit}>
          <h1>커뮤니티 게시판</h1>
          <table>
            <tbody>
              <tr>
                <td>제목</td>
                <td>
                  <input
                    className="title"
                    type="text"
                    name="title"
                    onChange={handleChangeInput}
                  />
                </td>
              </tr>
              <tr>
                <td>내용</td>
                <td>
                  <textarea
                    name="content"
                    onChange={handleChangeInput}
                  ></textarea>
                </td>
              </tr>
              <tr>
                <td>이미지</td>
                <td>
                  <input
                    type="file"
                    name="f"
                    onChange={handleChangeInput}
                  />
                </td>
              </tr>
            <tr>
              <td className="btn" colSpan={2}>
                <input
                  className="write"
                  type="submit"
                  value="작성하기"
                />
              </td>
            </tr>
            </tbody>
           
          </table>
        </form>
      </StyledComwriteDiv>
    );
  };

export default Comwrite;
