import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

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
    margin-top: 15%;
   }
   a{
    text-decoration: none;
    color: #474646;
    font-weight: bold;
    border: 6px solid #ffe23dfb;
    background-color: white;
    border-radius: 20px;
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
    .option{
        display: flex;
        justify-content: space-between;
    }
    select{
        padding-left: 30%;
    }
    .btn{
        padding-right: 10%;
    }
    button{
        border: 6px solid #ffe23dfb;
        border-radius: 10px;
    }
   
   
`;

const Comlist = () => {

    const navigate = useNavigate();

    const [communityVoList , setCommunityVoList] = useState([]);
    const [select, setSelect] = useState();

    const loadCommunityVoList = () => {
        fetch("http://127.0.0.1:8888/app/community/list", {
            method : 'get'
        })
        .then(resp => resp.json())
        .then((x)=>{setCommunityVoList(x)})
        ;
    }

    useEffect( () => {
        console.log("useEffect 호출");
        loadCommunityVoList();
    }, []);


    const handleDetail = (vo) => {
        navigate('/community/comdetail', {state: {vo}});
    };

    const handleSearch = () => {

    };

    return (

        <StyledComlistDiv>
            <table>
                <tr>
                    <td className='font'>커뮤니티 게시판</td>
                    <td>
                        <div className='option'>
                            <select  onChange={(event) => {
                                    return setSelect(event.target.value)
                            }}>
                                <option value=""></option>
                                <option value="1">술</option>
                                <option value="2">안주</option>
                            </select>
                            <div className='btn'>
                                <button class="button" style={{backgroundColor: '#ffe23dfb'}} onClick={handleSearch} >검색</button>
                            </div>
                        </div>
                    </td>

                    <td><Link to='/community/comwrite'>작성하기</Link></td>
                </tr>
                <tr>
                    <td>제목</td>
                    <td>카테고리</td>
                    <td>작성일</td>
                </tr>
                {
                    communityVoList.length === 0
                    ?
                    <h2>로딩중</h2>
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