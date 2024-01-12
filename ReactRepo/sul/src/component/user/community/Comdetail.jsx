import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledComdetailDiv = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
        h1{
            padding-bottom: 3%;
        }
        table{
            width: 60%;
            height: 60%;
            font-size: 16px;
            border-collapse: collapse;
            border: 2px solid black;
        }
        tr > td:first-child{
            padding-left: 10%;
            font-weight: bold;
        }
        input{
            border: 2px solid lightgray;
            height: 40%;
        }
        a{
            padding-top: 3%;
            font-weight: bold;
        }
        .second{
            border-top: 2px solid black;
        }
        .comment{
            width: 90%;
        }
        .img{
            padding-bottom: 5%;
        }
        .insert{
            background-color: #ffe23dfb;
            width: 40%;
            border-radius: 20px;
            border: none;
        }
`;

const Comdetail = () => {
    return (
        <StyledComdetailDiv>
            <h1>
                커뮤니티 게시판
            </h1>
            <table>
                <tr>
                    <td>제목</td>
                    <td>제목이다</td>
                    <td>작성자</td>
                </tr>
                <tr>
                    <td className='img'>이미지</td>
                    <td className='img'>내용이다내용내용</td>
                </tr>
                <tr>
                    <td className='second'>닉네임</td>
                    <td className='second'>댓글댓글댓글</td>
                    <td className='second'>작성일</td>
                </tr>
                <tr>
                    <td>내닉네임</td>
                    <td><input className='comment' type='text' name='comment' placeholder='댓글을 작성하세요.' /></td>
                    <td><input className='insert' type='submit' value="등록" /> </td>
                </tr>
            </table>
            <Link to='/community/comlist'>목록으로</Link>
        </StyledComdetailDiv>
    );
};

export default Comdetail;