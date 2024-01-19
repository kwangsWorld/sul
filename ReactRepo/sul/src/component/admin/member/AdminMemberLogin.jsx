import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { MemberContext } from '../../../context/MemberContext';

const StyledAdminMemberLogin = styled.div`
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

    tr:nth-child(3) {
        display: flex;
        justify-content: center;
        margin-top: 30px;
    }

    tr:nth-child(3) > td {
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

const AdminMemberLogin = () => {

    const navigate = useNavigate();

    const { adminLoginMember, setAdminLoginMember } = useContext(MemberContext);

    const jsonStr = sessionStorage.getItem("loginAdminVo");
    const sessionAdminLoginMemberVo = JSON.parse(jsonStr);

    const [vo, setVo] = useState({
        adminId: "",
        adminPwd: "",
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;

        setVo({
            ...vo,
            [name]: value
        });
    }

    const handleLoginSubmit = (event) => {
        event.preventDefault();

        fetch("http://127.0.0.1:8888/app/adminMember/login", {
            method: "post",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(vo),
        })
            .then((resp) => { return resp.json() })
            .then((data) => {
                if (data.msg === "good") {
                    alert("로그인 성공")
                    setAdminLoginMember(data.loginAdminVo);

                    sessionStorage.setItem("loginAdminVo", JSON.stringify(data.loginAdminVo));

                    navigate("/admin/notice/list");
                } else {
                    alert("로그인 실패");
                }
            })
            .catch((error) => {
                console.error("에러 발생:", error);
                alert("에러 발생. 콘솔을 확인하세요.");
            })
            .finally((error) => {
                console.log("로그인 fetch 끝");
            });
    };

    return (
        <StyledAdminMemberLogin>
            <form onSubmit={handleLoginSubmit}>
                <table>
                    <thead>
                        <tr>
                            <th><h1>관리자 로그인</h1></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>아이디</td>
                            <td><input type='text' name='adminId' placeholder='아이디' onChange={handleInputChange} /></td>
                        </tr>
                        <tr>
                            <td>비밀번호</td>
                            <td><input type='password' name='adminPwd' placeholder='비밀번호' onChange={handleInputChange} /></td>
                        </tr>
                        <tr>
                            <td><input className='btn' type='submit' value='로그인' style={{ backgroundColor: '#ffe23dfb' }} /></td>
                        </tr>
                    </tbody>
                </table>
            </form>
        </StyledAdminMemberLogin>
    );
};

export default AdminMemberLogin;