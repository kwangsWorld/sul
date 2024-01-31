import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Paging from '../../../paging/Paging';

const StyledComlistDiv = styled.div`
width: 100%;
height: 100%;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
margin-top: 3%;
   table{
    width: 60%;
    border-collapse: collapse;
    margin-bottom: 3%;
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
    .head:hover{
        background-color: white;
    }
    tr:hover{
        background-color: lightgray;
    }
    .option{
        display: flex;
        justify-content: space-between;
    }
    select{
        padding-left: 30%;
    }
    .btn{
        margin-right: 40%;
    }
    button{
        border: 6px solid #ffe23dfb;
        border-radius: 10px;
    }
   .page{
        margin-left: 8%;
   }
   
`;

const Comlist = () => {

    const navigate = useNavigate();

    const [communityVoList , setCommunityVoList] = useState([]);
    const [select, setSelect] = useState();
    const [input, setInput] = useState();
    const names = communityVoList.map(vo => vo.name);
    console.log("name",names);
    

    
      // 페이징
        const [pageTotal , setPageTotal] = useState([]);
        const [pageVo , setPageVo] = useState({
            pageNo : 1,
            limit : 10,
        });

        // 페이지 클릭 시 동작 함수
        const handlePageChange = (pageNo) => {
            setPageVo( (pageVo) => ({
                ...pageVo ,
                pageNo: pageNo,
            }));
        };
    const [voList , setVoList] = useState([]);
    const loadCommunityVoList = () => {
        fetch("http://127.0.0.1:8888/app/community/list",{
            method: 'post',
            headers: {
                "Content-Type": "application/json"
            },
            body : JSON.stringify(pageVo)
        })
        .then(resp => {return resp.json()})
        .then((data)=> {
            setCommunityVoList(data.voList);
            setPageTotal(data.pageTotal);
        })
        .catch(error => console.error("Error fetching data:" , error));
    };

    useEffect( () => {
        console.log("useEffect 호출");
        loadCommunityVoList();
    }, [pageVo]);


    const handleDetail = (vo) => {
        navigate('/community/comdetail', {state: {vo}});
    };

    
    const handleSearch = () => {
        
        const requestData = { 
            name: input,
            pageNo: 1, 
            limit: 10 
        };
    
        console.log('Request Data:', requestData);
    
        setPageVo(requestData);
        
    };
    console.log();

    return (

        <StyledComlistDiv>
            <table>
                <tr className='head'>
                    <td className='font'>커뮤니티 게시판</td>
                    <td>
                        <div className='option'>
                            <input type="text" placeholder='술 또는 안주 검색해주세요.'  name="searchInput" id="searchInput" value={input} onChange={ (event) => {
                                return setInput(event.target.value);
                            } }></input>
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
            <div id="pageArea" className='page'>
                <Paging pageTotal={pageTotal} currentPage={pageVo.pageNo} handlePageChange={handlePageChange} />
            </div>
        </StyledComlistDiv>
    );
};

export default Comlist;