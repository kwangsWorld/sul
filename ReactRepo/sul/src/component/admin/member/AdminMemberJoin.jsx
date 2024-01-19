import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const StyledAdminMemberJoin = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    font-size: 20px;

    table{
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding-right: 200px;
    }
    
    thead {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    tbody {
        width: 100%;
        height: 50%;
        margin-top: 50px;
    }

    tr:nth-child(5) {
        display: flex;
        justify-content: center;
        margin-top: 30px;
    }

    tr:nth-child(5) > td {
        display: flex;
        justify-content: center;
    }

    td {
        width: 150px;
        height: 50px;
    }

    .btn {
        width: 100px;
        height: 40px;
        font-size: 14px;
        font-weight: bold;
        border: none;
        border-radius: 10px;
    }

`;

const AdminMemberJoin = () => {
    
    const navigate = useNavigate();

    const [vo, setVo] = useState({
        adminId: "",
        adminName: "",
        adminPwd: "",
        adminPwd2: "",
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;

        setVo({
            ...vo,
            [name]: value
        });
    }

    let isFetching = false;

    const handleJoinSubmit = (event) => {
        event.preventDefault();
        if(isFetching) {
            return;
        }
        console.log(vo);
        isFetching = true;

        fetch("http://127.0.0.1:8888/app/adminMember/join" , {
            method : "post" ,
            headers : {
                "Content-Type" : "application/json",
            },
            body: JSON.stringify(vo)
        })
        .then( (resp) => {return resp.json();} )
        .then( (data) => {
            if( data.msg === "good" ){
                alert("등록 성공")
                navigate("/admin/member/first");
            }else{
                alert("등록 실패")
                navigate("/");
            }
        } )
        .catch( (error) => {
            alert("에러발생")
        } )
        .finally( () => {
            isFetching = false;
        } )
        ;

    }

    return (
        <StyledAdminMemberJoin>
            <form onSubmit={handleJoinSubmit}>
                <table>
                    <thead>
                        <tr>
                            <th><h1>관리자 등록</h1></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>아이디</td>
                            <td><input type='text' name='adminId' placeholder='아이디' onChange={handleInputChange} /></td>
                        </tr>
                        <tr>
                            <td>이름</td>
                            <td><input type='text' name='adminName' placeholder='이름' onChange={handleInputChange} /></td>
                        </tr>
                        <tr>
                            <td>비밀번호</td>
                            <td><input type='password' name='adminPwd' placeholder='비밀번호' onChange={handleInputChange} /></td>
                        </tr>
                        <tr>
                            <td>비밀번호 확인</td>
                            <td><input type='password' name='adminPwd' placeholder='비밀번호 확인' onChange={handleInputChange} /></td>
                        </tr>
                        <tr>
                            <td><input className='btn' type='submit' value='등록하기' style={{backgroundColor: '#ffe23dfb'}}/></td>
                        </tr>
                    </tbody>
                </table>
            </form>
        </StyledAdminMemberJoin>
    );
};

export default AdminMemberJoin;