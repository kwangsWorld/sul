import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const StyledAdminReviewListDiv = styled.div`
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

/* 페이지네이션 */
    .review_page {
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

const AdminReviewList = () => {

    const navigate = useNavigate();

    const [select, setSelect] = useState();
    const [input, setInput] = useState();
    const [voList , setVoList] = useState([]);

    console.log(voList);

    // 목록조회
    const loadAdminReviewVoList = () => {
        fetch("http://127.0.0.1:8888/app/adminReview/list" , {
            method : 'get'
        })
        .then( (resp) => {return resp.json()} )
        .then( (data) => { return setVoList(data); } )
        ;
    }
    
    // 렌더링
    useEffect( () => {
        loadAdminReviewVoList();
    }, [] );
    console.log(voList);
    
    // detail 로 넘겨줄 값 설정
    const detailItem = (vo) => {
        navigate('/admin/adminReview/detail', { state:  {vo}  });
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
                            <option value="number">번호</option>
                            <option value="name">상품</option>
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
                        <tr key={vo.no} onClick={() => {
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
                    <ul className='review_page'>
                        <li><a href="">◀</a></li>
                        <li><a href="">1</a></li>
                        <li><a href="">2</a></li>
                        <li><a href="">3</a></li>
                        <li><a href="">4</a></li>
                        <li><a href="">5</a></li>
                        <li><a href="">▶</a></li>
                    </ul>
        </StyledAdminReviewListDiv>
    );
};

export default AdminReviewList;