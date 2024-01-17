import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const StyledJoinEmailDiv = styled.div`
    width: 100%;
    height: 100%;
    & > form {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
    }
    & > form > table {
        width: 50%;
        margin-top: 8%;
        padding-right: 5%;
        padding-bottom: 3%;

    }
    & > form > table > tr > td {
        padding-top: 4%;
    }
    & > form > table > tr > td:first-child {
        padding-left: 15%;
        font-weight: bold;
    }
    & > form > table > tr > td > input {
        border: 2px solid lightgray;
        width: 100%;
        height: 40px;
    }
    .join{
        border: none;
        border-radius: 10px;
    }
`;

const JoinEmail = () => {

    const navigate = useNavigate();
    let isFetching = false;

    const [vo, setVo] = useState({
        name: "",
        tel: "",
        id: "",
        pwd: "",
        pwd2: "",
        email: "",
        nick: ""
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;

        setVo({
            ...vo,
            [name]: value
        });
    }

    const handleJoinEmailSubmit = async (event) => {
        event.preventDefault();

        if (isFetching) {
            return;
        }

        isFetching = true;

        try {
            const response = await fetch("http://127.0.0.1:8888/app/member/join", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(vo),
            });

            if (!response.ok) {
                throw new Error("회원가입 실패: " + response.statusText);
            }

            const data = await response.json();

            if (data.msg === "good") {
                alert("회원가입 성공");
                navigate("/member/login");
            } else {
                throw new Error("회원가입 실패: " + data.msg);
            }
        } catch (error) {
            console.error(error);
            alert("회원가입 실패: " + error.message);
        } finally {
            isFetching = false;
        }
    }

    return (
        <StyledJoinEmailDiv>
            <form onSubmit={handleJoinEmailSubmit}>
                <table>
                    <tr>
                        <td>이름</td>
                        <td><input type='text' name='name' placeholder='이름을 입력해 주세요' onChange={handleInputChange} /></td>
                    </tr>
                    <tr>
                        <td>휴대폰 번호</td>
                        <td><input type='tel' name='tel' placeholder='휴대폰 번호를 입력해 주세요' onChange={handleInputChange} /></td>
                    </tr>
                    <tr>
                        <td>생년월일</td>
                        <td><input type='text' name='age' placeholder=' 생년월일 8자리를 입력해 주세요' onChange={handleInputChange} /></td>
                    </tr>
                    <tr>
                        <td>아이디</td>
                        <td><input type='text' name='id' placeholder='아이디를 입력해 주세요' onChange={handleInputChange} /></td>
                    </tr>
                    <tr>
                        <td>비밀번호</td>
                        <td><input type='password' name='pwd' placeholder='비밀번호를 입력해 주세요' onChange={handleInputChange} /></td>
                    </tr>
                    <tr>
                        <td>비밀번호 확인</td>
                        <td><input type='password' name='pwd2' placeholder='비밀번호 확인 해주세요' onChange={handleInputChange} /></td>
                    </tr>
                    <tr>
                        <td>이메일</td>
                        <td><input type='email' name='email' placeholder='이메일 입력해 주세요' onChange={handleInputChange} /></td>
                    </tr>
                    <tr>
                        <td>닉네임</td>
                        <td><input type='text' name='nick' placeholder='닉네임을 입력해 주세요' onChange={handleInputChange} /></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td><input className='join' type='submit' value='회원가입' style={{backgroundColor: '#ffe23dfb'}}/></td>
                    </tr>
                </table>
            </form>
        </StyledJoinEmailDiv>
    );
};

export default JoinEmail;
