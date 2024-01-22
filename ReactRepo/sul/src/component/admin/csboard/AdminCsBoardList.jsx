import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Paging from '../../../paging/Paging';

const StyledAdminCsBoardListDiv = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    & > table {
        width: 100%;
        height: 80%;
        border: solid 1px;
        border-collapse: collapse;
    }

    & > table > tbody {
        height: 10vh;
    }

    td {
        text-align: center;
        border-bottom: solid 1px;
    }

    select {
        height: 25px;
    }

    input {
        height: 25px;
    }

    .list_header {
        width: 100%;
    }

    .csboard_no {
        width: 5%;
    }

    .csboard_title {
        width: 70%;
    }

    .csboard_enrollDate {
        width: 15%;
    }

    .csboard_delYn {
        width: 10%;
    }

    .csboard_top {
        width: 100%;
        display: flex;
        justify-content: space-between;
        margin-bottom: 1%;
    }

    .csboard_select {
        display: flex;
    }

    .csboard_write > button {
        width: 150px;
        height: 25px;
        border: none;
        border-radius: 10px;
    }

    .csboard_button {
        width: 80px;
        height: 25px;
        border: none;
        border-radius: 10px;
    }

/* 페이지네이션 */
    .csboard_page {
        margin-right: 20%;
        list-style-type: none;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: row;
    }
    li {
        margin-left: 10%;
    }

`;

const AdminCsBoardList = () => {

    const navigate = useNavigate();

    // 페이징
    const [pageTotal , setPageTotal] = useState([]);
    const [pageVo , setPageVo] = useState({
        pageNo : 1,
        limit : 10,
    });

    // 페이지 클릭 시 동작 함수
    const handlePageChange = (pageNo) => {
        setPageVo( () => ({
            ...pageVo , 
            pageNo : pageNo,
        } ));
    }

    // 목록조회
    const [voList , setVoList] = useState([]);
    const loadAdminCsBoardVoList = () => {
        fetch("http://127.0.0.1:8888/app/adminCsboard/list" , {
            method : 'post',
            headers : {
                "Content-Type" : "application/json"
            },
            body : JSON.stringify(pageVo)
        })
        .then( (resp) => {return resp.json()} )
        .then( (data) => { 
            return(
            setVoList(data.voList),
            setPageTotal(data.pageTotal)
        );
        } )
        ;
    }
    
    // 렌더링
    useEffect( () => {
        loadAdminCsBoardVoList();
    }, [pageVo] );
    
    // detail 로 넘겨줄 값 설정
    const detailItem = (vo) => {
        navigate('/admin/csboard/detail', { state:  {vo}  });
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

    return (
        <StyledAdminCsBoardListDiv>
            <div className='list_header'>
                <h1>고객센터</h1>
            </div>
            <div className='csboard_top'>
                <div className='csboard_select'>
                    <div>
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
                    <div>
                        <button class="csboard_button" style={{backgroundColor: '#ffe23dfb'}} onClick={handleSearch}>검색</button>
                    </div>
                    <div>
                        <button class="csboard_button" style={{backgroundColor: '#ffe23dfb'}} onClick={handleReset}>초기화</button>
                    </div>
                </div>
            </div>
            <table>
                <thead>
                    <tr>
                        <td className='csboard_no'>번호</td>
                        <td className='csboard_title'>제목</td>
                        <td className='csboard_enrollDate'>작성일자</td>
                        <td className='csboard_delYn'>답변여부</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        voList.map( (vo) => (
                        <tr key={vo.no} onClick={() => {
                            detailItem(vo)}
                            }>
                            <td className='csboard_no'>{vo.qNo}</td>
                            <td className='csboard_title'>{vo.qTitle}</td>
                            <td className='csboard_enrollDate'>{vo.qDate}</td>
                            <td className='csboard_delYn'>{vo.aYn}</td>
                        </tr>
                        ))
                    }
                </tbody>
            </table>
            <div id="pageArea">
                <Paging pageTotal={pageTotal} currentPage={pageVo.pageNo} handlePageChange={handlePageChange}/>
            </div>
        </StyledAdminCsBoardListDiv>
    );
};

export default AdminCsBoardList;