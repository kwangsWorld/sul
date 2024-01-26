import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Paging from '../../../paging/Paging';

const StyledAdminReviewListDiv = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    & > table {
        width: 100%;
        border: solid 1px;
        border-collapse: collapse;
    }

    .list {
        height: 50px;
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

    .review_no {
        width: 5%;
    }

    .review_nick {
        width: 20%;
    }

    .review_content {
        width: 20%;
    }

    .review_delYn {
        width: 10%;
    }

    .review_top {
        width: 100%;
        display: flex;
        justify-content: space-between;
        margin-bottom: 1%;
    }

    .review_select {
        display: flex;
    }

    .review_button {
        width: 80px;
        height: 25px;
        border: none;
        border-radius: 10px;
    }

`;

const AdminReviewList = () => {

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
            ...pageVo,
            pageNo : pageNo,
        }) );
    };
    
    // 목록조회
    const [voList , setVoList] = useState([]);
    const loadAdminReviewVoList = () => {
        fetch("http://127.0.0.1:8888/app/adminReview/list" , {
            method : 'post',
            headers : {
                "Content-Type" : "application/json"
            },
            body : JSON.stringify(pageVo)
        })
        .then( (resp) => {return resp.json()} )
        .then( (data) => { 
            return(
                 setVoList(data.voList) ,
                 setPageTotal(data.pageTotal)
                 );
                } );
    };
    
    // 렌더링
    useEffect( () => {
        loadAdminReviewVoList();
    }, [pageVo] );
    
    // detail 로 넘겨줄 값 설정
    const detailItem = (vo) => {
        navigate('/admin/review/detail', { state:  {vo}  });
    };

    // 검색버튼 동작 함수
    const handleSearch = () => {
        setPageVo({
            reviewNo : select === 'no' ? input : null,
            nick : select === 'nick' ? input : null,
            pageNo : 1,
            limit : 10,
        })
    };

    const [select, setSelect] = useState();
    const [input, setInput] = useState();
    // 초기화 버튼 클릭 시 동작 함수
    const handleReset = () => {
        setSelect('');
        setInput('');
    };

    return (
        <StyledAdminReviewListDiv>
            <div className='list_header'>
                <h1>리뷰관리</h1>
            </div>
            <div className='review_top'>
                <div className='review_select'>
                    <div>
                        <select name="" id="" value={select} onChange={ (event) => {
                            return setSelect(event.target.value)
                        } }>
                            <option value=""></option>
                            <option value="no">번호</option>
                            <option value="nick">닉네임</option>
                        </select>
                    </div>
                    <div>
                        <input type="text"  name="searchInput" id="searchInput" value={input} onChange={ (event) => {
                            return setInput(event.target.value);
                        } }></input>
                    </div>
                    <div>
                        <button class="review_button" style={{backgroundColor: '#ffe23dfb'}} onClick={handleSearch}>검색</button>
                    </div>
                    <div>
                        <button class="review_button" style={{backgroundColor: '#ffe23dfb'}} onClick={handleReset}>초기화</button>
                    </div>
                </div>
            </div>
            <table>
                <thead>
                    <tr>
                        <td className='review_no'>번호</td>
                        <td className='review_nick'>닉네임</td>
                        <td className='review_content'>내용</td>
                        <td className='review_rating'>별점</td>
                        <td className='review_enrollDate'>등록일자</td>
                        <td className='review_delYn'>공개여부</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        voList.map( (vo) => (
                        <tr className='list' key={vo.no} onClick={() => {
                            detailItem(vo)}
                            }>
                            <td className='review_no'>{vo.reviewNo}</td>
                            <td className='review_nick'>{vo.nick}</td>
                            <td className='review_content'>{vo.content}</td>
                            <td className='review_rating'>{vo.rating}</td>
                            <td className='review_enrollDate'>{vo.enrollDate}</td>
                            <td className='review_delYn'>{vo.delYn}</td>
                        </tr>
                        ))
                    }
                </tbody>
            </table>
            <div id="pageArea">
                <Paging pageTotal={pageTotal} currentPage={pageVo.pageNo} handlePageChange={handlePageChange}/>
            </div>
        </StyledAdminReviewListDiv>
    );
};

export default AdminReviewList;