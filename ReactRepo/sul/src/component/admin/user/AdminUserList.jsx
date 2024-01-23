import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Paging from '../../../paging/Paging';

const StyledAdminUserListDiv = styled.div`
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

    .user_no {
        width: 5%;
    }

    .user_typeName {
        width: 20%;
    }

    .user_name {
        width: 20%;
    }

    .user_delYn {
        width: 10%;
    }

    .user_top {
        width: 100%;
        display: flex;
        justify-content: space-between;
        margin-bottom: 1%;
    }

    .user_select {
        display: flex;
    }

    .user_button {
        width: 80px;
        height: 25px;
        border: none;
        border-radius: 10px;
    }

`;

const AdminUserList = () => {

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
        }));
    };
    
    // 목록조회
    const [voList , setVoList] = useState([]);
    const loadAdminUserVoList = () => {
        fetch("http://127.0.0.1:8888/app/adminMember/list" , {
            method : 'post' ,
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
        } );
    };
    
    // 렌더링
    useEffect( () => {
        loadAdminUserVoList();
    }, [pageVo] );
    
    // detail 로 넘겨줄 값 설정
    const detailItem = (vo) => {
        navigate('/admin/User/detail', { state:  {vo}  });
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
        <StyledAdminUserListDiv>
            <div className='list_header'>
                <h1>회원관리</h1>
            </div>
            <div className='user_top'>
                <div className='user_select'>
                    <div>
                        <select name="" id="" value={select} onChange={ (event) => {
                            return setSelect(event.target.value)
                        } }>
                            <option value=""></option>
                            <option value="number">이름</option>
                            <option value="name">닉네임</option>
                        </select>
                    </div>
                    <div>
                        <input type="text"  name="searchInput" id="searchInput" value={input} onChange={ (event) => {
                            return setInput(event.target.value);
                        } }></input>
                    </div>
                    <div>
                        <button class="user_button" style={{backgroundColor: '#ffe23dfb'}} onClick={handleSearch}>검색</button>
                    </div>
                    <div>
                        <button class="user_button" style={{backgroundColor: '#ffe23dfb'}} onClick={handleReset}>초기화</button>
                    </div>
                </div>
            </div>
            <table>
                <thead>
                    <tr>
                        <td className='user_no'>번호</td>
                        <td className='user_id'>아이디</td>
                        <td className='user_nick'>닉네임</td>
                        <td className='user_name'>이름</td>
                        <td className='user_enrollDate'>가입일자</td>
                        <td className='user_delYn'>탈퇴여부</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        voList.map( (vo) => (
                        <tr key={vo.no} onClick={() => {
                            detailItem(vo)}
                            }>
                            <td className='user_no'>{vo.memberNo}</td>
                            <td className='user_id'>{vo.id}</td>
                            <td className='user_nick'>{vo.name}</td>
                            <td className='user_name'>{vo.nick}</td>
                            <td className='user_enrollDate'>{vo.enrollDate}</td>
                            <td className='user_delYn'>{vo.delYn}</td>
                        </tr>
                        ))
                    }
                </tbody>
            </table>
            <div id="pageArea">
                <Paging pageTotal={pageTotal} currentPage={pageVo.pageNo} handlePageChange={handlePageChange}/>
            </div>
        </StyledAdminUserListDiv>
    );
};

export default AdminUserList;