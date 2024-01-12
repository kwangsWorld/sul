import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Myheader from './Myheader';

const StyledMycomdetailDiv = styled.div`
    width: 100%;
    height: 200%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
        table{
            width: 60%;
            height: 180%;
            font-size: 16px;
            border-collapse: collapse;
            border: 2px solid gray;
            margin-bottom: 30%;
        }
        tr > td:first-child{
            padding-left: 10%;
            font-weight: bold;
        }
        
        .div{
           width: 50%;
            padding-bottom: 1%;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        button{
            border: 2px solid gray;
            width: 10%;
            height: 40px;
            border-radius: 10px;
            background-color: #ffe23dfb;
            font-weight: bold;
        }
        button:hover{
            background-color: gray;
        }
        .second{
            border-top: 2px solid gray;
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

const Mycomdetail = () => {

    const navigate = useNavigate();

    const handlelist = () => {
        navigate('/mypage/mycom')
    };

    return (

        <StyledMycomdetailDiv>
            <Myheader />
            <h1>
                커뮤니티 게시판
            </h1>
            <div className='div'>
                <button onClick={handlelist}>목록으로</button>
                <button>수정하기</button>
                <button>삭제하기</button>
            </div>
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
                
            </table>
            
            
        </StyledMycomdetailDiv>
    );
};

export default Mycomdetail;