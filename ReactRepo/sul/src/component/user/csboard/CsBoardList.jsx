import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Paging from '../../../paging/Paging';

const StyledCsBoardListDiv = styled.div`
min-width: 1500px;
width: 100%;
height: 100%;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;

    .top {
        width: 60%;
        display: flex;
        justify-content: space-between;
    }

    .top_left {
        width: 500px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-right: 100px;
    }

    .top_right {
        width: 10%;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .left_first {
        
        display: flex;
    }

    select {
        width: 60px;
        height: 30px;
    }

    input {
        width: 330px;
        height: 30px;
    }

    table{
         width: 60%;
         border-collapse: collapse;
         margin-bottom: 2%;
    }

   button {
        text-decoration: none;
        color: #474646;
        font-weight: bold;
        background-color: #ffe23dfb;
        border-radius: 10px;
   }

   .font{
        font-size: 30px;
        font-weight: bold;
        border-radius: 10px;
        padding-bottom: 2%;
    }

    table  > tr:nth-child(1) >  td{
        background-color: gray;
        font-weight: bold;
    }

    table > tr > td{
        border-bottom: 1px solid lightgray;
        padding-top: 3%;
        padding-left: 3%;
    }

    .pageArea {
        margin-left: 100px;
    }
`;

const CsBoardList = () => {

    const navigate = useNavigate();

    // 페이징
    const [pageTotal , setPageTotal] = useState([]);
    const [pageVo , setPageVo] = useState({
        pageNo : 1,
        limit : 10
    })

    // 페이지 클릭 시 동작 함수
    const handlePageChange = (pageNo) => {
        setPageVo ( (pageVo) => ({
            ...pageVo ,
            pageNo : pageNo,
        }));
    }
    
    // 목록조회
    const [voList , setVoList] = useState([]);
    const loadCsboardVoList = () => {
        fetch("http://127.0.0.1:8888/app/csboard/list" ,{
            method : 'post' ,
            headers : {
                "Content-Type" : "application/json"
            },
            body : JSON.stringify(pageVo)
        })
        .then( (resp) => {return resp.json()} )
        .then( (data) => {
            setVoList(data.voList);
            setPageTotal(data.pageTotal);
        } )
    };

    // 렌더링
    useEffect( () => {
        loadCsboardVoList();
    }, [pageVo]);

    // detail 로 넘겨줄 값 설정
    const detailItem = (vo) => {
        navigate('/csboard/detail', { state:  {vo}  });
    };

    const [select, setSelect] = useState();
    const [input, setInput] = useState();
    // 초기화 버튼 클릭 시 동작 함수
    const handleReset = () => {
        setSelect('');
        setInput('');
    };

     // 검색버튼 동작 함수
     const handleSearch = () => {
        
    };

    // 질문하기 버튼 클릭 시 동작 함수
    const handleQuestion = () => {
        navigate("/csboard/question")
    };

    return (

        <StyledCsBoardListDiv>
            <div className='top'>
                <div>
                    <h1>고객센터</h1>
                </div>
                <div className='top_left'>
                    <div className='left_first'>
                        <div className=''>
                            <select name="" id="" value={select} onChange={ (event) => {
                                return setSelect(event.target.value)
                            } }>
                                <option value=""></option>
                                <option value="number">번호</option>
                                <option value="title">제목</option>
                            </select>
                        </div>
                        <div>
                            <input type="text"  name="searchInput" id="searchInput" value={input} onChange={ (event) => {
                                return setInput(event.target.value);
                            } }></input>
                        </div>
                    </div>
                    <div>
                        <button class="button" style={{backgroundColor: '#ffe23dfb'}} onClick={handleSearch}>검색</button>
                    </div>
                    <div>
                        <button class="button" style={{backgroundColor: '#ffe23dfb'}} onClick={handleReset}>초기화</button>
                    </div>
                </div>
                <div className='top_right'>
                    <div className='question'>
                        <button style={{backgroundColor: '#ffe23dfb'}} onClick={handleQuestion}>질문하기</button>
                    </div>
                </div>   
            </div>      
                    
            <table>
                <tr>
                    <td>번호</td>
                    <td>닉네임</td>
                    <td>제목</td>
                    <td>작성일</td>
                </tr>
                {
                    voList.map((vo) => (
                    <tr key={vo.csboardNo} onClick={() => {
                        detailItem(vo)}
                    }>
                        <td>{vo.qNo}</td>
                        <td>{vo.nick}</td>
                        <td>{vo.qTitle}</td>
                        <td>{vo.enrollDate}</td>
                    </tr>
                    ))
                }
            </table>
            <div className="pageArea">
                <Paging pageTotal={pageTotal} currentPage={pageVo.pageNo} handlePageChange={handlePageChange}/>
            </div>
        </StyledCsBoardListDiv>
    );
};

export default CsBoardList;