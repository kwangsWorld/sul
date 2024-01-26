import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Paging from '../../../paging/Paging';

const StyledAdminDeliveryListDiv = styled.div`
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

    .delivery_no {
        width: 5%;
    }

    .delivery_title {
        width: 70%;
    }

    .delivery_enrollDate {
        width: 15%;
    }

    .delivery_delYn {
        width: 10%;
    }

    .delivery_top {
        width: 100%;
        display: flex;
        justify-content: space-between;
        margin-bottom: 1%;
    }

    .delivery_select {
        display: flex;
    }

    .delivery_write > button {
        width: 150px;
        height: 25px;
        border: none;
        border-radius: 10px;
    }

    .delivery_button {
        width: 80px;
        height: 25px;
        border: none;
        border-radius: 10px;
    }

`;

const AdminDeliveryList = () => {

    const navigate = useNavigate();

    // 페이징
    const [pageTotal , setPageTotal] = useState([]);
    const [pageVo , setPageVo] = useState({
        pageNo : 1 ,
        limit : 10,
    });

    // 페이징 클릭 시 동작 함수
    const handlePageChange = (pageNo) => {
        setPageVo( () => ({
            ...pageVo ,
            pageNo : pageNo,
        }))
    }
    
    // 목록조회
    const [voList , setVoList] = useState([]);
    const loadAdminDeliveryVoList = () => {
        fetch("http://127.0.0.1:8888/app/adminDelivery/list" , {
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
             } );
    };
    
    // 렌더링
    useEffect( () => {
        loadAdminDeliveryVoList();
    }, [pageVo] );
    
    // detail 로 넘겨줄 값 설정
    const detailItem = (vo) => {
        navigate('/admin/delivery/detail', { state:  {vo}  });
    };
    
    // 검색버튼 동작 함수
    const handleSearch = () => {
       setPageVo({
            deliveryNo : select === 'deliveryNo' ? input : null,
            name : select === 'name' ? input : null,
            deliveryStatus : select === 'status' ? input : null,
            pageNo : 1,
            limit : 10
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
        <StyledAdminDeliveryListDiv>
            <div className='list_header'>
                <h1>배송관리</h1>
            </div>
            <div className='delivery_top'>
                <div className='delivery_select'>
                    <div>
                        <select name="" id="" value={select} onChange={ (event) => {
                            return setSelect(event.target.value)
                        } }>
                            <option value=""></option>
                            <option value="deliveryNo">번호</option>
                            <option value="name">이름</option>
                            <option value="status">배송상태</option>
                        </select>
                    </div>
                    <div>
                        <input type="text"  name="searchInput" id="searchInput" value={input} onChange={ (event) => {
                            return setInput(event.target.value);
                        } }></input>
                    </div>
                    <div>
                        <button class="delivery_button" style={{backgroundColor: '#ffe23dfb'}} onClick={handleSearch}>검색</button>
                    </div>
                    <div>
                        <button class="delivery_button" style={{backgroundColor: '#ffe23dfb'}} onClick={handleReset}>초기화</button>
                    </div>
                </div>
            </div>
            <table>
                <thead>
                    <tr>
                        <td className='delivery_no'>번호</td>
                        <td className='delivery_name'>이름</td>
                        <td className='delivery_address'>배송지</td>
                        <td className='delivery_address'>배송상태</td>
                        <td className='delivery_start'>출발일</td>
                        <td className='delivery_finish'>도착일</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        voList.map( (vo) => (
                        <tr className='list' key={vo.no} onClick={() => {
                            detailItem(vo)}
                            }>
                            <td className='delivery_no'>{vo.deliveryNo}</td>
                            <td className='delivery_name'>{vo.name}</td>
                            <td className='delivery_address'>{vo.address}</td>
                            <td className='delivery_status'>{vo.deliveryStatus}</td>
                            <td className='delivery_start'>{vo.deliveryStartDate}</td>
                            <td className='delivery_finish'>{vo.deliveryFinishDate}</td>
                        </tr>
                        ))
                    }
                </tbody>
            </table>
            <div id="pageArea">
                <Paging pageTotal={pageTotal} currentPage={pageVo.pageNo} handlePageChange={handlePageChange}/>
            </div>
        </StyledAdminDeliveryListDiv>
    );
};

export default AdminDeliveryList;