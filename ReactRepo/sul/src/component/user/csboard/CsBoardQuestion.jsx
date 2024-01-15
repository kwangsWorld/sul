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

const CsBoardQuestion = (event) => {
    
    const navigate = useNavigate();
    // const adminMemberVo = sessionStorage.getItem("adminMemberVo");
    // const vo = JSON.parse(adminMemberVo);
    // const adminNo = vo.no;
    
    const [inputCsBoardVo , setInputCsBoardVo] = useState({
        // "adminNo" : adminNo
    });
    
    const handleWrite = (event) => {
        event.preventDefault();

        fetch("http://127.0.0.1:8888/app/csboard/question" , {
            method : 'post',
            headers : {
                "Content-Type" : "application/json"
            },
            body : JSON.stringify(inputCsBoardVo)
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

    const handleChangeInput = (event) => {

        const {name , value} = event.target;

        setInputCsBoardVo({
            ...inputCsBoardVo ,
            [name] : value,
        })
    }




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
                        <td><input type='file' name='f' /></td>
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