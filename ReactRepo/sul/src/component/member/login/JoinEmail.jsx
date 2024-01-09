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
        border: 1px solid yellow;
    }
    & > form > table > tr > td {
        padding-top: 4%;
    }
    & > form > table > tr > td:first-child {
        padding-left: 15%;
        font-weight: bold;
    }
    & > form > table > tr > td > input {
        border: 1px solid lightgray;
        width: 100%;
        height: 40px;
    }
`;

const JoinEmail = () => {
    const navigate = useNavigate();

    const [isFetching, setIsFetching] = useState(false);

    const [vo, setVo] = useState({
        name: "",
        tel: "",
        id: "",
        pwd: "",
        pwd2: "", // 비밀번호 확인 추가
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

    const handleJoinEmailSubmit = (event) => {
        event.preventDefault();

        if (isFetching) {
            return;
        }

        if (vo.pwd !== vo.pwd2) {
            alert("비밀번호와 비밀번호 확인이 일치하지 않습니다.");
            return;
        }

        setIsFetching(true);

        fetch("http://127.0.0.1:8888/app/member/join", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(vo)
        })
        .then(resp => {
            if (!resp.ok) {
                throw new Error("회원가입 fetch 실패");
            }
            return resp.json();
        })
        .then(data => {
            if (data.msg === "good") {
                alert("회원가입 성공");
                navigate("/");
            } else {
                alert("회원가입 실패!");
                navigate("/fail");
            }
        })
        .catch((e) => {
            console.log(e);
            alert("회원가입 실패!");
        })
        .finally(() => {
            setIsFetching(false);
        });
    }

    return (
        <StyledJoinEmailDiv>
            <form onSubmit={handleJoinEmailSubmit}>
                <table>
                    <tr>
                        <td>이름</td>
                        <td><input type='text' name='name' onChange={handleInputChange} /></td>
                    </tr>
                    <tr>
                        <td>휴대폰 번호</td>
                        <td><input type='tel' name='tel' onChange={handleInputChange} /></td>
                    </tr>
                    <tr>
                        <td>아이디</td>
                        <td><input type='text' name='id' onChange={handleInputChange} /></td>
                    </tr>
                    <tr>
                        <td>비밀번호</td>
                        <td><input type='password' name='pwd' onChange={handleInputChange} /></td>
                    </tr>
                    <tr>
                        <td>비밀번호 확인</td>
                        <td><input type='password' name='pwd2' onChange={handleInputChange} /></td>
                    </tr>
                    <tr>
                        <td>이메일</td>
                        <td><input type='email' name='email' onChange={handleInputChange} /></td>
                    </tr>
                    <tr>
                        <td>닉네임</td>
                        <td><input type='text' name='nick' onChange={handleInputChange} /></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td><input type='submit' value='회원가입' /></td>
                    </tr>
                </table>
            </form>
        </StyledJoinEmailDiv>
    );
};

export default JoinEmail;
