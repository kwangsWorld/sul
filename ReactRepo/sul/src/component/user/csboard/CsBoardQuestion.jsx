import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const StyledCsBoardQuestionDiv = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

        form {
            width: 100%;
            margin-left: 20%;
        }
        h1{
            text-align: center;
            padding-right: 20%;
        }
        table{
            border: 3px solid #ffe23dfb;
            width: 80%;
            padding-top: 5%;
            padding-bottom: 5%;
            border-radius: 50px;
            margin-top: 5%;
        }
        textarea{
            width: 90%;
            height: 300px;
            border: 3px solid lightgray;
        }
        tr > td:first-child{
            font-size: 18px;
            font-weight: bold;
            padding-left: 8%;
        }
        .title{
            width: 90%;
            height: 50px;
            border: none;
            border-bottom: 3px solid lightgray;
        }
        .write{
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

const CsBoardQuestion = () => {
    
    const navigate = useNavigate();
    
    const [inputCsBoardVo , setInputCsBoardVo] = useState({});
    const loginInfo = JSON.parse(sessionStorage.getItem("loginMemberVo"));

    const handleChangeInput = (event) => {

        const {name , value , files} = event.target;

        setInputCsBoardVo({
            ...inputCsBoardVo ,
            [name] : files ? files[0] : value,
        })
    }
    
    const handleWrite = (event) => {
        event.preventDefault();

        const formData = new FormData();
        formData.append("qTitle" , inputCsBoardVo.qTitle);
        formData.append("qContent" , inputCsBoardVo.qContent);
        formData.append("file" , inputCsBoardVo.file);
        formData.append("memberNo" , loginInfo.memberNo);
        
        const obj = {
            ...inputCsBoardVo ,
            ...loginInfo 
        };

        formData.forEach( (value, key) => {
            obj[key] = value;
        })
        
        console.log("전체 :::" , obj);

        fetch("http://127.0.0.1:8888/app/csboard/question" , {
            method : 'post',
            body : formData
        })
        .then( resp => {return resp.json();} )
        .then( (data) => {
            if( data.msg === "good"){
                alert("문의글 작성 성공")
                navigate("/csboard/list")
            }else{
                alert("문의글 작성 실패")
                navigate("/csboard/list")
            }
        } )
        .catch( () => {
            alert("문의글 작성 에러발생");
        } )
    };

    

    return (
        <StyledCsBoardQuestionDiv>
           <form onSubmit={handleWrite}>
            <h1>Q 고객센터 Q</h1>
                <table>
                    <tr>
                        <td>제목</td>
                        <td><input className='title' type='text' name='qTitle' placeholder='제목을 입력하세요.' onChange={handleChangeInput}/></td>
                    </tr>
                    <tr>
                        <td>내용</td>
                        <td><textarea name='qContent' placeholder='내용을 입력하세요.' onChange={handleChangeInput}></textarea></td>
                    </tr>
                    <tr>
                        <td>이미지</td>
                        <td><input type='file' name='file' onChange={handleChangeInput}/></td>
                    </tr>
                    <tr>
                        <td className='btn' colSpan={2}><input className='write' type='submit' value="작성하기" /></td>
                    </tr>
                </table>
           </form>
        </StyledCsBoardQuestionDiv>
    );
};

export default CsBoardQuestion;