import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const StyledAdminNoticeWriteDiv = styled.div`
    width: 100%;
    height: 80%;
    margin-top: 5%;

    table {
        width: 100%;
        height: 80%;
    }

    tr {
        width: 100%;
    }

    tr > td:nth-child(1) {
        width: 20%;
    }
    
    tr > td:nth-child(2) {
        width: 80%;
    }

    .write_title {
        width: 80%;
        height: 50px;
    }

    .write_content {
        width: 80%;
        height: 400px;
    }

    .btn {
        width: 80%;
        display: flex;
        justify-content: space-between;
    }

    .wrtie_button {
        width: 100px;
        height: 50px;
        border: none;
        border-radius: 10px;
    }

    .back_button {
        width: 100px;
        height: 50px;
        border: none;
        border-radius: 10px;
    }

    h1 {
        width: 100%;
    }

    h2 {
        margin-left: 20%;
    }

    .h2_content {
        margin-bottom: 180%;
    }

`;


const AdminNoticeWrite = () => {

    const navigate = useNavigate();
    const loginAdminVo = sessionStorage.getItem("loginAdminVo");
    const vo = JSON.parse(loginAdminVo);
    const adminNo = vo.adminNo;

    const [inputNoticeVo , setInputNoticeVo] = useState({
        "adminNo" : adminNo, 
    });

    const handleWrite = (event) => {
        event.preventDefault();

        fetch("http://127.0.0.1:8888/app/adminNotice/write" , {
            method : 'post',
            headers : {
                "Content-Type" : "application/json"
            },
            body : JSON.stringify(inputNoticeVo)
        })
        .then( resp => {return resp.json();} )
        .then( (data) => {
            if( data.msg === "good"){
                alert("게시글 작성 성공")
                navigate("/admin/notice/list")
            }
            else(
                alert("게시글 작성 실패")
            )
            
        } )
        .catch( () => {
            alert("게시글 작성 에러발생");
        } )
    };

    const handleChangeInput = (event) => {

        const {name , value} = event.target;

        setInputNoticeVo({
            ...inputNoticeVo ,
            [name] : value,
        })
    }

    // 뒤로가기 버튼 클릭 시 동작 함수
    const handleBack = () => {
        navigate("/admin/adminNotice/list")
};

    return (
        <StyledAdminNoticeWriteDiv>
            <form onSubmit={handleWrite}>
                <table>
                    <tbody>
                        <tr>
                            <td><h2>제목</h2></td>
                            <td><input className='write_title' type="text" name='title' placeholder='공지사항 제목을 입력하세요.' onChange={handleChangeInput} /></td>
                        </tr>
                        <tr>
                            <td><h2 className='h2_content'>내용</h2></td>
                            <td ><textarea className='write_content' name='content' placeholder='공지사항 내용을 입력하세요.' onChange={handleChangeInput} ></textarea></td>
                        </tr>
                            <td></td>
                                <td className='btn'>
                                    <input style={{backgroundColor: '#ffe23dfb'}} className='back_button' type="submit" value="뒤로가기" onClick={handleBack} />
                                    <input style={{backgroundColor: '#ffe23dfb'}} className='wrtie_button' type="submit" value="작성하기" />
                                </td>
                    </tbody>
                </table>
            </form>
        </StyledAdminNoticeWriteDiv>
    );
};

export default AdminNoticeWrite;