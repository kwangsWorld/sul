import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const StyledAdminProductDetailDiv = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;

    table {
        width: 100%;
        height: 20%;
        margin-top: 80px;
        border-top: solid 1px;
        border-collapse: collapse;
    }
    
    td {
        height: 40px;
        border-bottom: solid 1px;
        text-align: center;
    }

    select {
        height: 25px;
    }

    .detail_content {
        height: 100px;
    }

    .btn {
        width: 80%;
        display: flex;
        justify-content: space-between;
        margin-top: 50px;
    }

    .edit_button {
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


`;

const AdminProductDetail = () => {

    const navigate = useNavigate();

    const location = useLocation();
    const productVo = location.state.vo;
    console.log(productVo);

    const [vo , setVo] = useState(productVo);
    const [editedDelYn , setEditedDelYn] = useState(productVo.delYn);

    // 뒤로가기 버튼 클릭 시 동작 함수
    const handleBack = () => {
        navigate("/adminProduct/list")
    };

    // 수정하기 버튼 클릭 시 동작 함수
    const handleDelete = () => {
        const editedVo = {
            ...vo,
            delYn: editedDelYn,
    };

    fetch("http://127.0.0.1:8888/app/adminProduct/delete", {
      method: 'post',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(editedVo)
    })
      .then((resp) => resp.json())
      .then((data) => {
        if (data.msg === "good") {
            setVo(editedVo);
            alert("상품 수정 완료");
          navigate("/adminProduct/list");
        } else {
          alert("상품 수정 실패");
        }
      })
      .catch((e) => {
        alert("상품 수정 중 에러 발생");
      });
    };

    // select 값이 변경될 때 동작 함수
    const handleSelectChange = (event) => {

        const selectedValue = event.target.value;
  
    // 선택한 값에 따라 delYn 값 변경
        const newDelYn = selectedValue === "Y" ? "Y" : "N";
  
        setEditedDelYn(newDelYn);
    };

    return (
        <StyledAdminProductDetailDiv>
            <table>
                <thead>
                    <tr>
                        <td className=''>상품번호</td>
                        <td className=''>상품종류</td>
                        <td className=''>상품이름</td>
                        <td className=''>등록일자</td>
                        <td className=''>등록여부</td>

                    </tr>
                    <tr className='detail_content'>
                        <td className=''>{productVo.productNo}</td>
                        <td className=''>{productVo.tName}</td>
                        <td className=''>{productVo.pName}</td>
                        <td className=''>{productVo.enrollDate}</td>
                        <td>
                            <select className='' value={editedDelYn} onChange={handleSelectChange}>
                                <option value="N">N</option>
                                <option value="Y">Y</option>
                            </select>
                        </td>
                        
                    </tr>
                    <tr>
                        <td className=''>보관방법</td>
                        <td className=''>유통기한</td>
                        <td className=''>도수</td>
                        <td className=''>용량</td>
                        <td className=''>가격</td>
                    </tr>
                    <tr className='detail_content'>
                        <td className=''>{productVo.storage}</td>
                        <td className=''>{productVo.expiryDate}</td>
                        <td className=''>{productVo.degree}</td>
                        <td className=''>{productVo.capacity}</td>
                        <td className=''>{productVo.price}</td>
                    </tr>
                    <tr>
                        <td className=''>별점</td>
                        <td className=''>이미지</td>
                        <td className=''>맛</td>
                        <td className=''>안주</td>
                        <td></td>
                    </tr>
                    <tr className='detail_content'>
                        <td className=''>{productVo.rating}</td>
                        <td className=''>{productVo.image}</td>
                        <td className=''>{productVo.taste}</td>
                        <td className=''>{productVo.appetizer}</td>
                        <td></td>
                    </tr>
                    
                </thead>
            </table>
                <div className='btn'>
                    <input style={{backgroundColor: '#ffe23dfb'}} className='back_button' type="submit" value="뒤로가기" onClick={handleBack} />
                    <input style={{backgroundColor: '#ffe23dfb'}} className='edit_button' type="submit" value="수정하기" onClick={handleDelete} />
                </div>
        </StyledAdminProductDetailDiv>
    );
};

export default AdminProductDetail;