import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

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
        margin-top: 10%;
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
         margin-bottom: 20%;
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
`;

const NoticeList = () => {

    const navigate = useNavigate();

    const [select, setSelect] = useState();
    const [input, setInput] = useState();
    const [noticeVoList , setVoList] = useState([]);
    console.log(noticeVoList);

    // 목록조회
    const loadNoticeVoList = () => {
        fetch("http://127.0.0.1:8888/app/notice/list" ,{
            method : 'get'
        })
        .then( (resp) => {return resp.json()} )
        .then( (data) => {return setVoList(data); } )
        ;
    }

    // 렌더링
    useEffect( () => {
        loadNoticeVoList();
    }, []);

    // detail 로 넘겨줄 값 설정
    const detailItem = (vo) => {
        navigate('/notice/detail', { state:  {vo}  });
    };

    // 초기화 버튼 클릭 시 동작 함수
    const handleReset = () => {
        setSelect('');
        setInput('');
    };

     // 검색버튼 동작 함수
     const handleSearch = () => {
        
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
                    noticeVoList.map( (vo) => (
                    <tr key={vo.noticeNo} onClick={() => {
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
        </StyledNoticeListDiv>
    );
};

export default NoticeList;