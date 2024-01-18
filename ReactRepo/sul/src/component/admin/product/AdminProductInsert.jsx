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

    const [fileObj , setFileObj] = useState();
    const [typeNo , setTypeNo] = useState();
    const [pName , setPName] = useState();
    const [price , setPrice] = useState();
    const [degree , setDegree] = useState();
    const [capacity , setCapacity] = useState();
    const [storage , setStorage] = useState();
    const [expiryDate , setExpiryDate] = useState();
    const [taste , setTaste] = useState();
    const [appetizer , setAppetizer] = useState();

    const handleChangeImage = (event) => {
        setFileObj(event.target.files[0]);
      };
    const handleChangeTypeNo = (event) => {
        setTypeNo(event.target.value);
      };
    const handleChangePName = (event) => {
        setPName(event.target.value);
      };
    const handleChangePrice = (event) => {
        setPrice(event.target.value);
      };
    const handleChangeDegree = (event) => {
        setDegree(event.target.value);
      };
    const handleChangeCapacity = (event) => {
        setCapacity(event.target.value);
      };
    const handleChangeStorage = (event) => {
        setStorage(event.target.value);
      };
    const handleChangeExpiryDate = (event) => {
        setExpiryDate(event.target.value);
      };
    const handleChangeTaste = (event) => {
        setTaste(event.target.value);
      };
    const handleChangeAppetizer = (event) => {
        setAppetizer(event.target.value);
      };

    const handleInsert = (event) => {
        event.preventDefault();

        const formData = new FormData();
        formData.append("file" , fileObj);

        formData.append("typeNo", typeNo);
        formData.append("pName", pName);
        formData.append("price", price);
        formData.append("degree", degree);
        formData.append("capacity", capacity);
        formData.append("storage", storage);
        formData.append("expiryDate", expiryDate);
        formData.append("taste", taste);
        formData.append("appetizer", appetizer);

        // formData.append("writerNo" , 1); // sessionStorage.getItem("loginMember") 파싱

        fetch("http://127.0.0.1:8888/app/adminProduct/insert" , {
            method : 'post',
            body : formData ,
        })
        .then( resp => {return resp.json()} )
        .then( (data) => {
            if( data.msg === "good"){
                alert("상품등록 성공")
                navigate("/admin/product/list")
            }else{
                alert("상품등록 실패")
            }
        } )
        .catch( () => {
            alert("상품등록 에러발생");
        } )
    };

    // 뒤로가기 버튼 클릭 시 동작 함수
    const handleBack = () => {
        navigate("/admin/product/list")
};

    return (
        <StyledAdminProductInsertDiv>
            <form onSubmit={handleInsert}>
                <table>
                    <tbody>
                        <tr>
                            <td><h3>종류</h3></td>
                            <td>
                                <select className='select' name='typeNo' onChange={handleChangeTypeNo}>
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
                            <td><input className='insert' type="text" name='pName' placeholder='상품명' onChange={handleChangePName} /></td>
                            <td><h3>가격</h3></td>
                            <td><input className='insert' type="text" name='price' placeholder='가격' onChange={handleChangePrice} /></td>
                        </tr>
                        <tr>
                            <td><h3>도수</h3></td>
                            <td><input className='insert' type="text" name='degree' placeholder='도수' onChange={handleChangeDegree} /></td>
                            <td><h3>용량</h3></td>
                            <td><input className='insert' type="text" name='capacity' placeholder='용량' onChange={handleChangeCapacity} /></td>
                        </tr>
                        <tr>
                            <td><h3>보관방법</h3></td>
                            <td><input className='insert' type="text" name='storage' placeholder='보관방법' onChange={handleChangeStorage} /></td>
                            <td><h3>유통기한</h3></td>
                            <td><input className='insert' type="text" name='expiryDate' placeholder='유통기한' onChange={handleChangeExpiryDate} /></td>
                        </tr>
                        <tr>
                            <td><h3>맛</h3></td>
                            <td><input className='insert' type="text" name='taste' placeholder='맛' onChange={handleChangeTaste} /></td>
                            <td><h3>어울리는 안주</h3></td>
                            <td><input className='insert' type="text" name='appetizer' placeholder='어울리는 안주' onChange={handleChangeAppetizer} /></td>
                        </tr>
                        <tr>
                            <td><h3>이미지</h3></td>
                            <td><input className='insert' type="file" name='file' placeholder='이미지' onChange={handleChangeImage} /></td>
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