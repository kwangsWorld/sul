import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const StyledAdminProductInsertDiv = styled.div`
    width: 100%;
    height: 80%;
    margin-top: 5%;

    table {
        width: 100%;
        height: 80%;
    }

    .insert {
        width: 80%;
        height: 40px;
    }

    select{
        width: 100px;
        height: 30px;
    }

    .btn {
        width: 80%;
        display: flex;
        justify-content: space-between;
    }

    .wrtie_button {
        width: 100px;
        height: 50px;
        border: none;
        border-radius: 10px;
    }

    .back_button {
        width: 100px;
        height: 50px;
        border: none;
        border-radius: 10px;
    }

    h3 {
        margin-left: 10%;
    }

`;


const AdminProductInsert = () => {

    const navigate = useNavigate();

    // const adminMemberVo = sessionStorage.getItem("adminMemberVo");
    // const vo = JSON.parse(adminMemberVo);
    // const adminNo = vo.no;

    const [inputProductVo , setInputProductVo] = useState({
        // "adminNo" : adminNo
    });

    const handleInsert = (event) => {
        event.preventDefault();

        fetch("http://127.0.0.1:8888/app/adminProduct/insert" , {
            method : 'post',
            headers : {
                "Content-Type" : "application/json"
            },
            body : JSON.stringify(inputProductVo)
        })
        .then( resp => {return resp.json();} )
        .then( (data) => {
            if( data.msg === "good"){
                alert("상품등록 성공")
                navigate("/adminProduct/list")
            }else{
                alert("상품등록 실패")
                navigate("/")
            }
        } )
        .catch( () => {
            alert("상품등록 에러발생");
        } )
    };

    const handleChangeInput = (event) => {

        const {name , value} = event.target;

        setInputProductVo({
            ...inputProductVo ,
            [name] : value,
        })
    }

    // 뒤로가기 버튼 클릭 시 동작 함수
    const handleBack = () => {
        navigate("/adminProduct/list")
};

    return (
        <StyledAdminProductInsertDiv>
            <form onSubmit={handleInsert}>
                <table>
                    <tbody>
                        <tr>
                            <td><h3>종류</h3></td>
                            <td>
                                <select className='select' name='typeNo' onChange={handleChangeInput}>
                                    <option name='' value=""></option>
                                    <option name='typeNo' value="1">탁주</option>
                                    <option name='typeNo' value="2">청주</option>
                                    <option name='typeNo' value="3">과실주</option>
                                    <option name='typeNo' value="4">증류주</option>
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <td><h3>상품명</h3></td>
                            <td><input className='insert' type="text" name='pName' placeholder='상품명' onChange={handleChangeInput} /></td>
                            <td><h3>가격</h3></td>
                            <td><input className='insert' type="text" name='price' placeholder='가격' onChange={handleChangeInput} /></td>
                        </tr>
                        <tr>
                            <td><h3>도수</h3></td>
                            <td><input className='insert' type="text" name='degree' placeholder='도수' onChange={handleChangeInput} /></td>
                            <td><h3>용량</h3></td>
                            <td><input className='insert' type="text" name='capacity' placeholder='용량' onChange={handleChangeInput} /></td>
                        </tr>
                        <tr>
                            <td><h3>보관방법</h3></td>
                            <td><input className='insert' type="text" name='storage' placeholder='보관방법' onChange={handleChangeInput} /></td>
                            <td><h3>유통기한</h3></td>
                            <td><input className='insert' type="text" name='expiryDate' placeholder='유통기한' onChange={handleChangeInput} /></td>
                        </tr>
                        <tr>
                            <td><h3>맛</h3></td>
                            <td><input className='insert' type="text" name='taste' placeholder='맛' onChange={handleChangeInput} /></td>
                            <td><h3>어울리는 안주</h3></td>
                            <td><input className='insert' type="text" name='appetizer' placeholder='어울리는 안주' onChange={handleChangeInput} /></td>
                        </tr>
                        <tr>
                            <td><h3>이미지</h3></td>
                            <td><input className='insert' type="text" name='image' placeholder='이미지' onChange={handleChangeInput} /></td>
                        </tr>
                            <td></td>
                                <td className='btn'>
                                    <input style={{backgroundColor: '#ffe23dfb'}} className='back_button' type="submit" value="뒤로가기" onClick={handleBack} />
                                    <input style={{backgroundColor: '#ffe23dfb'}} className='wrtie_button' type="submit" value="작성완료" />
                                </td>
                    </tbody>
                </table>
            </form>
        </StyledAdminProductInsertDiv>
    );
};

export default AdminProductInsert;