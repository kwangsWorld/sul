import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Paging from '../../../paging/Paging';

const StyledNoticeListDiv = styled.div`
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

    table > tr:nth-child(1) >  td{
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

const NoticeList = () => {

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
    const loadNoticeVoList = () => {
        fetch("http://127.0.0.1:8888/app/notice/list" ,{
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
        loadNoticeVoList();
    }, [pageVo]);

    // detail 로 넘겨줄 값 설정
    const detailItem = (vo) => {
        navigate('/notice/detail', { state:  {vo}  });
    };

     // 검색버튼 동작 함수
     const handleSearch = () => { 

        setPageVo({
            noticeNo: select === 'no' ? input : null,
            title: select === 'title' ? input : null,
            pageNo : 1,
            limit : 10
        })

        // // const searchVo = {
        // //     vo: pageVo,
        // //     selectVo: noticeVo,
        // // };

        // // console.log("검색 요청:", searchVo);
        // // console.log("검색 요청:", noticeVo);
        // console.log("검색 요청:", pageVo);

        // fetch("http://127.0.0.1:8888/app/notice/search", {
        //     method : 'post',
        //     headers: {
        //         "Content-Type": "application/json"
        //     },
        //     body: JSON.stringify(pageVo),
        // })
        // .then((resp) => {
        //     if (!resp.ok) {
        //         throw new Error(`HTTP 오류! 상태: ${resp.status}`);
        //     }
        //     return resp.json();
        // })
        // .then((data) => {
        //     setVoList(data.voList);
        //     setPageTotal(data.pageTotal);
        //     console.log("검색 응답:", data);
        // })
        // .catch((error) => {
        //     console.error('검색 중 오류 발생:', error);
        // });
    };

    const [select, setSelect] = useState();
    const [input, setInput] = useState();
    // 초기화 버튼 클릭 시 동작 함수
    const handleReset = () => {
        setSelect('');
        setInput('');
    };

    return (

        <StyledNoticeListDiv>
            <div className='top'>
                <div>
                    <h1>공지사항</h1>
                </div>
                <div className='top_left'>
                    <div className='left_first'>
                        <div className=''>
                            <select name="" id="" value={select} onChange={ (event) => {
                                return setSelect(event.target.value)
                            } }>
                                <option value=""></option>
                                <option value="no">번호</option>
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
                        <button className="button" style={{backgroundColor: '#ffe23dfb'}} onClick={handleSearch}>검색</button>
                    </div>
                    <div>
                        <button className="button" style={{backgroundColor: '#ffe23dfb'}} onClick={handleReset}>초기화</button>
                    </div>
                </div>
                <div className='top_right'>
                    <div className='question'>
                        
                    </div>
                </div>
            </div>      
                    
            <table>
                <tr>
                    <td>번호</td>
                    <td>제목</td>
                    <td>관리자</td>
                    <td>조회수</td>
                    <td>작성일</td>
                </tr>
                {
                    voList.map( (vo) => (
                    <tr key={vo.no} onClick={() => {
                        detailItem(vo)}
                    }>
                        <td>{vo.noticeNo}</td>
                        <td>{vo.title}</td>
                        <td>{vo.adminName}</td>
                        <td>{vo.inquiry}</td>
                        <td>{vo.enrollDate}</td>
                    </tr>
                    ))
                }
            </table>
            <div className="pageArea">
                <Paging pageTotal={pageTotal} currentPage={pageVo.pageNo} handlePageChange={handlePageChange}/>
            </div>
        </StyledNoticeListDiv>
    );
};

export default NoticeList;