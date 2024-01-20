import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Pagination from '../../../page/Paging';

const StyledAdminNoticeListDiv = styled.div`
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

    .notice_no {
        width: 5%;
    }

    .notice_title {
        width: 70%;
    }

    .notice_enrollDate {
        width: 15%;
    }

    .notice_delYn {
        width: 10%;
    }

    .notice_top {
        width: 100%;
        display: flex;
        justify-content: space-between;
        margin-bottom: 1%;
    }

    .notice_select {
        display: flex;
    }

    .notice_write {
        display: flex;
    }

    .notice_write > button {
        width: 150px;
        height: 25px;
        border: none;
        border-radius: 10px;
    }

    .notice_button {
        width: 80px;
        height: 25px;
        border: none;
        border-radius: 10px;
    }

/* 페이지네이션 */
    .page {
        margin-right: 20%;
        list-style-type: none;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: row;
    }
    li {
        margin-left: 10%;
        cursor: pointer;
    }

`;

const AdminNoticeList = () => {

    const navigate = useNavigate();

    const [select, setSelect] = useState();
    const [input, setInput] = useState();
    const [voList , setVoList] = useState([]);
    const [currentPage , setCurrentPage] = useState(1);
    const [pageTotal , setPageTotal] = useState(1);

    // 목록조회
    const loadAdminNoticeVoList = (page = 1) => {
        fetch("http://127.0.0.1:8888/app/adminNotice/list" , {
            method : 'post' ,
            headers : {
                "Content-Type" : "application/json"
            },
            body : JSON.stringify({ pageNo : page - 1 , limit : 10})
        })
        .then( (resp) => {return resp.json()} )
        .then( (data) => { 
            setVoList(data.voList);
            setPageTotal(data.pageTotal); 
        })
        .catch(error => console.error("Error fetching data:" , error));
    };
    
    // 렌더링 이후 내용실행
    useEffect( () => {
        loadAdminNoticeVoList();
    }, [currentPage] );
    
    // detail 로 넘겨줄 값 설정
    const detailItem = (vo) => {
        navigate('/admin/notice/detail', { state:  {vo}  });
    };

    // 초기화 버튼 클릭 시 동작 함수
    const handleReset = () => {
        setSelect('');
        setInput('');
    };

     // 검색버튼 동작 함수
     const handleSearch = () => {
        
    };

    // 페이지 클릭 시 동작 함수
     const handlePageClick = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    // 작성하기 버튼 클릭 시 동작 함수
    const handleWrite = () => {
        navigate("/admin/notice/write")
    };

    return (
        <StyledAdminNoticeListDiv>
            <div className='list_header'>
                <h1>공지사항</h1>
            </div>
            <div className='notice_top'>
                <div className='notice_select'>
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
                        <button class="notice_button" style={{backgroundColor: '#ffe23dfb'}} onClick={handleSearch}>검색</button>
                    </div>
                    <div>
                        <button class="notice_button" style={{backgroundColor: '#ffe23dfb'}} onClick={handleReset}>초기화</button>
                    </div>
                </div>
                <div className='notice_write'>
                    <button style={{backgroundColor: '#ffe23dfb'}} onClick={handleWrite}>게시글 작성하기</button>
                </div>
            </div>
            <table>
                <thead>
                    <tr>
                        <td className='notice_no'>번호</td>
                        <td className='notice_title'>제목</td>
                        <td className='notice_enrollDate'>작성일자</td>
                        <td className='notice_delYn'>공개여부</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        voList.map( (vo) => (
                        <tr key={vo.no} onClick={() => {
                            detailItem(vo)}
                            }>
                            <td className='notice_no'>{vo.noticeNo}</td>
                            <td className='notice_title'>{vo.title}</td>
                            <td className='notice_enrollDate'>{vo.enrollDate}</td>
                            <td className='notice_delYn'>{vo.delYn}</td>
                        </tr>
                        ))
                    }
                </tbody>
            </table>
            <Pagination
                currentPage={currentPage}
                pageTotal={pageTotal}
                onPageClick={handlePageClick}
            />
                    {/* <ul className='page'>
                        <li><a href="">◀</a></li>
                        <li><a href="">1</a></li>
                        <li><a href="">2</a></li>
                        <li><a href="">3</a></li>
                        <li><a href="">4</a></li>
                        <li><a href="">5</a></li>
                        <li><a href="">▶</a></li>
                    </ul> */}
        </StyledAdminNoticeListDiv>
    );
};

export default AdminNoticeList;