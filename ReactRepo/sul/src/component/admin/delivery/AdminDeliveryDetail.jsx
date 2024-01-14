import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const StyledAdminDeliveryDetailDiv = styled.div`
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

const AdminDeliveryDetail = () => {

    const navigate = useNavigate();

    const location = useLocation();
    const deliveryVo = location.state.vo;
    console.log(deliveryVo);

    const [vo , setVo] = useState(deliveryVo);
    const [editedDeliveryFinishDate , setEditedDeliveryFinishDate] = useState(deliveryVo.deliveryFinishDate);
    const [editedDeliveryStatusNo , setEditedDeliveryStatusNo] = useState(deliveryVo.deliveryStatusNo);

    // 뒤로가기 버튼 클릭 시 동작 함수
    const handleBack = () => {
        navigate("/adminDelivery/list")
    };

    // 수정하기 버튼 클릭 시 동작 함수
    const handleEdit = () => {
        const editedVo = {
            ...vo,
            deliveryFinishDate: editedDeliveryFinishDate,
            deliveryStatusNo: editedDeliveryStatusNo,
    };

    fetch("http://127.0.0.1:8888/app/adminDelivery/status", {
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
            alert("배송관리 수정 완료");
          navigate("/adminDelivery/list");
        } else {
          alert("배송관리 수정 실패");
        }
      })
      .catch((e) => {
        alert("배송관리 수정 중 에러 발생");
      });
    };

    // select 값이 변경될 때 동작 함수
    const handleSelectChange = (event) => {

        const selectedValue = event.target.value;
  
        // // 선택한 값에 따라 status 값 변경
        // const newDeliveryStatus = selectedValue === "1" ? "1" : "2";
  
        setEditedDeliveryStatusNo(selectedValue);
    };

    // FinishDate 값이 변경될 때 동작 함수
    const handleFinishDateChange = (event) => {
        setEditedDeliveryFinishDate(event.target.value);
    };

    return (
        <StyledAdminDeliveryDetailDiv>
            <table>
                <thead>
                    <tr>
                        <td className=''>주문번호</td>
                        <td className=''>배송번호</td>
                        <td className=''>배송상태</td>
                        <td className=''>배송출발일</td>
                        <td className=''>배송도착일</td>
                    </tr>
                    <tr className='detail_content'>
                        <td className=''>{deliveryVo.orderNo}</td>
                        <td className=''>{deliveryVo.deliveryNo}</td>
                        <td>
                            <select className='' value={editedDeliveryStatusNo} onChange={handleSelectChange}>
                                <option value="">{vo.deliveryStatus}</option>
                                <option value="1">배송전</option>
                                <option value="2">배송중</option>
                                <option value="3">배송완료</option>
                            </select>
                        </td>
                        <td className=''>{deliveryVo.deliveryStartDate}</td>
                        <td className='detail_wrap'>
                            <textarea className='detail_deliveryFinishDate' name='deliveryFinishDate' placeholder='YYYY-MM-DD' value={editedDeliveryFinishDate} onChange={handleFinishDateChange}>
                                {deliveryVo.deliveryFinishDate}
                            </textarea>
                        </td>
                    </tr>
                    <tr>
                        <td className=''>아이디</td>
                        <td className=''>닉네임</td>
                        <td className=''>이름</td>
                        <td className=''>전화번호</td>
                        <td className=''>주소</td>
                    </tr>
                    <tr className='detail_content'>
                        <td className=''>{deliveryVo.id}</td>
                        <td className=''>{deliveryVo.nick}</td>
                        <td className=''>{deliveryVo.name}</td>
                        <td className=''>{deliveryVo.tel}</td>
                        <td className=''>{deliveryVo.address}</td>
                    </tr>
                </thead>
            </table>
                
                <div className='btn'>
                    <input style={{backgroundColor: '#ffe23dfb'}} className='back_button' type="submit" value="뒤로가기" onClick={handleBack} />
                    <input style={{backgroundColor: '#ffe23dfb'}} className='edit_button' type="submit" value="수정하기" onClick={handleEdit} />
                </div>
        </StyledAdminDeliveryDetailDiv>
    );
};

export default AdminDeliveryDetail;