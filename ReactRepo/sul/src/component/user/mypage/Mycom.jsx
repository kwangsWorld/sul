import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Myheader from './Myheader';

const StyledComlistDiv = styled.div`
width: 100%;
height: 100%;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
   table{
    width: 60%;
    border-collapse: collapse;
    margin-bottom: 20%;
    margin-top: 7%;
   }
   tr:hover{
    background-color: lightgray;
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
        padding-top: 1%;
        padding-left: 3%;
        padding-bottom: 2%;
    }
    td:nth-child(2){
        text-align: center;
    }
    td:nth-child(3){
        text-align: right;
        padding-right: 2%;
    }
   
   
   
`;

const Comlist = () => {

    const navigate = useNavigate();

    const [communityVoList , setCommunityVoList] = useState([]);
    const loginInfo = JSON.parse(sessionStorage.getItem('loginMemberVo'));

    const loadCommunityVoList = () => {

        fetch("http://127.0.0.1:8888/app/community/my",{
            method: 'post',
            headers : {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify(loginInfo)
        })
        .then(resp => resp.json())
        .then((x)=> {setCommunityVoList(x);})
        ;
    }

    useEffect( () => {
        console.log("useEffect 호출");
        loadCommunityVoList();
    }, []);


    const handleDetail = (vo) => {
        navigate('/mypage/mycomdetail', {state: {vo}});
    };



    return (

        <StyledComlistDiv>
            <Myheader />
            <table>
                <tr>
                    <td className='font'>커뮤니티 게시판</td>
                </tr>
                <tr>
                    <td>제목</td>
                    <td>카테고리</td>
                    <td>작성일</td>
                </tr>
                {
                    communityVoList.length === 0
                    ?
                    <h2>게시글이 없습니다.</h2>
                    :
                    communityVoList.map( vo => <tr key={vo.communityNo} onClick={()=>{
                        handleDetail(vo)
                    }}>
                        <td>{vo.title}</td>
                        <td>{vo.name}</td>
                        <td>{vo.enrollDate}</td>
                    </tr>
                    )
                }
                
            </table>
        </StyledComlistDiv>
    );
};

export default Comlist;