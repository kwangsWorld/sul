import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const StyledAdminProductListDiv = styled.div`
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

    .product_no {
        width: 5%;
    }

    .product_typeName {
        width: 20%;
    }

    .product_name {
        width: 20%;
    }

    .product_delYn {
        width: 10%;
    }

    .product_top {
        width: 100%;
        display: flex;
        justify-content: space-between;
        margin-bottom: 1%;
    }

    .product_select {
        display: flex;
    }

    .product_insert {
        display: flex;
    }

    .product_insert > button {
        width: 150px;
        height: 25px;
        border: none;
        border-radius: 10px;
    }

    .product_button {
        width: 80px;
        height: 25px;
        border: none;
        border-radius: 10px;
    }

/* 페이지네이션 */
    .product_page {
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

const AdminProductList = () => {

    const navigate = useNavigate();

    const [select, setSelect] = useState();
    const [input, setInput] = useState();
    const [voList , setVoList] = useState([]);

    console.log(voList);

    // 목록조회
    const loadAdminProductVoList = () => {
        fetch("http://127.0.0.1:8888/app/adminProduct/list" , {
            method : 'get'
        })
        .then( (resp) => {return resp.json()} )
        .then( (data) => { return setVoList(data); } )
        ;
    }
    
    // 렌더링
    useEffect( () => {
        loadAdminProductVoList();
    }, [] );
    console.log(voList);
    
    // detail 로 넘겨줄 값 설정
    const detailItem = (vo) => {
        navigate('/adminProduct/detail', { state:  {vo}  });
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
        navigate("/adminProduct/insert")
    };



    return (
        <StyledAdminProductListDiv>
            <div className='list_header'>
                <h1>상품관리</h1>
            </div>
            <div className='product_top'>
                <div className='product_select'>
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
                        <button class="product_button" style={{backgroundColor: '#ffe23dfb'}} onClick={handleSearch}>검색</button>
                    </div>
                    <div>
                        <button class="product_button" style={{backgroundColor: '#ffe23dfb'}} onClick={handleReset}>초기화</button>
                    </div>
                </div>
                <div className='product_insert'>
                    <button style={{backgroundColor: '#ffe23dfb'}} onClick={handleInsert}>상품 추가하기</button>
                </div>
            </div>
            <table>
                <thead>
                    <tr>
                        <td className='product_no'>번호</td>
                        <td className='product_typeName'>종류</td>
                        <td className='product_name'>상품명</td>
                        <td className='product_degree'>도수</td>
                        <td className='product_capacity'>용량</td>
                        <td className='product_delYn'>판매여부</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        voList.map( (vo) => (
                        <tr key={vo.no} onClick={() => {
                            detailItem(vo)}
                            }>
                            <td className='product_no'>{vo.productNo}</td>
                            <td className='product_typeName'>{vo.tName}</td>
                            <td className='product_name'>{vo.pName}</td>
                            <td className='product_degree'>{vo.degree}</td>
                            <td className='product_capacity'>{vo.capacity}</td>
                            <td className='product_delYn'>{vo.delYn}</td>
                        </tr>
                        ))
                    }
                </tbody>
            </table>
                    <ul className='product_page'>
                        <li><a href="">◀</a></li>
                        <li><a href="">1</a></li>
                        <li><a href="">2</a></li>
                        <li><a href="">3</a></li>
                        <li><a href="">4</a></li>
                        <li><a href="">5</a></li>
                        <li><a href="">▶</a></li>
                    </ul>
        </StyledAdminProductListDiv>
    );
};

export default AdminProductList;