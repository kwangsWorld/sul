import React from 'react';
import styled from 'styled-components';
import Myheader from './Myheader';
import { useNavigate } from 'react-router-dom';

const StyledMycomDiv = styled.div`
width: 100%;
height: 100%;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
   table{
    width: 55%;
    border-collapse: collapse;
    margin-bottom: 20%;
    margin-top: 4%;
   }

   .font{
        font-size: 30px;
        font-weight: bold;
        border-radius: 10px;
        padding-bottom: 2%;
    }
    table  > tr:nth-child(2) >  td{
        background-color: gray;
        font-weight: bold;
    }
    table > tr > td{
        border-bottom: 1px solid lightgray;
        padding-top: 3%;
        padding-left: 3%;
    }
`;

const Mycom = () => {

    const navigate = useNavigate();

    const handledetail = () => {
        navigate('/mypage/mycomdetail')
    };

    return (
        <StyledMycomDiv>
            <Myheader />
            <table>
                <tr>
                    <td className='font'>커뮤니티 게시판</td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td>제목</td>
                    <td>카테고리</td>
                    <td>작성일</td>
                </tr>
                <tr onClick={handledetail}>
                    <td>제목</td>
                    <td>카테고리</td>
                    <td>작성일</td>
                </tr>
                <tr>
                    <td>제목</td>
                    <td>카테고리</td>
                    <td>작성일</td>
                </tr>
                
                
            </table>
            
        </StyledMycomDiv>
    );
};

export default Mycom;