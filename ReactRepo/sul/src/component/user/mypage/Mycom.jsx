import React, { useEffect, useState } from 'react';
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

    const [communityVoList, setCommunityVoList] = useState([]);
    const loadCommunityVoList = () => {
        fetch("http://127.0.0.1:8888/app/community/my")
        .then(resp => resp.json())
        .then( (x) => {setCommunityVoList(x);})
        ;
    }

    useEffect( ()=> {
        console.log("useEffect호출");
        loadCommunityVoList();
    }, []);



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
                {
                    communityVoList.length === 0
                    ?
                    <h3>로딩중</h3>
                    :
                    communityVoList.map( vo => <tr key={vo.communityNo}>
                        <td>{vo.title}</td>
                        <td>{vo.name}</td>
                        <td>{vo.enrollDate}</td>
                    </tr>
                 ) 
                }
                
                
                
                
            </table>
            
        </StyledMycomDiv>
    );
};

export default Mycom;