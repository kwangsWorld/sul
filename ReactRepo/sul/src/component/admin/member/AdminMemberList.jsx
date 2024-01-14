import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const StyledAdminMemberListDiv = styled.div`
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

    .member_no {
        width: 5%;
    }

    .member_typeName {
        width: 20%;
    }

    .member_name {
        width: 20%;
    }

    .member_delYn {
        width: 10%;
    }

    .member_top {
        width: 100%;
        display: flex;
        justify-content: space-between;
        margin-bottom: 1%;
    }

    .member_select {
        display: flex;
    }

    .member_insert {
        display: flex;
    }

    .member_insert > button {
        width: 150px;
        height: 25px;
        border: none;
        border-radius: 10px;
    }

    .member_button {
        width: 80px;
        height: 25px;
        border: none;
        border-radius: 10px;
    }

/* 페이지네이션 */
    .member_page {
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

const AdminMemberList = () => {

    const navigate = useNavigate();

    const [select, setSelect] = useState();
    const [input, setInput] = useState();
    const [voList , setVoList] = useState([]);

    console.log(voList);

    // 목록조회
    const loadAdminMemberVoList = () => {
        fetch("http://127.0.0.1:8888/app/adminMember/list" , {
            method : 'get'
        })
        .then( (resp) => {return resp.json()} )
        .then( (data) => { return setVoList(data); } )
        ;
    }
    
    // 렌더링
    useEffect( () => {
        loadAdminMemberVoList();
    }, [] );
    console.log(voList);
    
    // detail 로 넘겨줄 값 설정
    const detailItem = (vo) => {
        navigate('/adminMember/detail', { state:  {vo}  });
    };

    // 초기화 버튼 클릭 시 동작 함수
    const handleReset = () => {
        setSelect('');
        setInput('');
    };

     // 검색버튼 동작 함수
     const handleSearch = () => {
        
    };

    // 작성하기 버튼 클릭 시 동작 함수
    const handleInsert = () => {
        navigate("/adminMember/insert")
    };



    return (
        <StyledAdminMemberListDiv>
            <div className='list_header'>
                <h1>상품관리</h1>
            </div>
            <div className='member_top'>
                <div className='member_select'>
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
                        <button class="member_button" style={{backgroundColor: '#ffe23dfb'}} onClick={handleSearch}>검색</button>
                    </div>
                    <div>
                        <button class="member_button" style={{backgroundColor: '#ffe23dfb'}} onClick={handleReset}>초기화</button>
                    </div>
                </div>
                <div className='member_insert'>
                    <button style={{backgroundColor: '#ffe23dfb'}} onClick={handleInsert}>상품 추가하기</button>
                </div>
            </div>
            <table>
                <thead>
                    <tr>
                        <td className='member_no'>번호</td>
                        <td className='member_typeName'>종류</td>
                        <td className='member_name'>상품명</td>
                        <td className='member_degree'>도수</td>
                        <td className='member_capacity'>용량</td>
                        <td className='member_delYn'>판매여부</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        voList.map( (vo) => (
                        <tr key={vo.no} onClick={() => {
                            detailItem(vo)}
                            }>
                            <td className='member_no'>{vo.memberNo}</td>
                            <td className='member_typeName'>{vo.tName}</td>
                            <td className='member_name'>{vo.pName}</td>
                            <td className='member_degree'>{vo.degree}</td>
                            <td className='member_capacity'>{vo.capacity}</td>
                            <td className='member_delYn'>{vo.delYn}</td>
                        </tr>
                        ))
                    }
                </tbody>
            </table>
                    <ul className='member_page'>
                        <li><a href="">◀</a></li>
                        <li><a href="">1</a></li>
                        <li><a href="">2</a></li>
                        <li><a href="">3</a></li>
                        <li><a href="">4</a></li>
                        <li><a href="">5</a></li>
                        <li><a href="">▶</a></li>
                    </ul>
        </StyledAdminMemberListDiv>
    );
};

export default AdminMemberList;