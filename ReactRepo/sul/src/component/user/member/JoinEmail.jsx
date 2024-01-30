import React, { useEffect, useState } from 'react';
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
    .join {
        border: none;
        border-radius: 10px;
    }
    .error-message {
        color: red;
        font-size: 12px;
        margin-top: 5px;
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

    const [idErrorMessage, setIdErrorMessage] = useState("");
    const [pwdErrorMessage, setPwdErrorMessage] = useState("");
    const [helperText, setHelperText] = useState("5글자 이상 입력해주세요.");


    const handleInputChange = (event) => {
        const { name, value } = event.target;
    
        setVo({
            ...vo,
            [name]: value
        });
    
        if (name === 'id') {
            if (value.length < 5) {
                setIdErrorMessage("5글자 이상 입력해주세요.");
                setHelperText("");
            } else {
                setIdErrorMessage("");
                setHelperText("사용 가능한 아이디입니다.");
            }
        } else if (name === 'pwd') {
            if (!/[\W_]/.test(value)) {
                setPwdErrorMessage("특수문자를 최소 1개 이상 포함해주세요.");
            } else {
                setPwdErrorMessage("");
            }
        } else if (name === 'age') {
            const birthYear = parseInt(value.substring(0, 4), 10);
            if (birthYear > 2005) {
                alert("2005년 이후 출생자는 회원가입이 불가능합니다.");
            }
        }
    }
    

    const handleInputClick = () => {
        if (vo.id.length < 5) {
            setIdErrorMessage("5글자 이상 입력해주세요.");
            setHelperText("");
        } else {
            setIdErrorMessage("");
            setHelperText("사용 가능한 아이디입니다.");
        }
    }

    const handleJoinEmailSubmit = async (event) => {
        event.preventDefault();

        if (isFetching || vo.pwd !== vo.pwd2 || vo.id.length < 5 || !/[\W_]/.test(vo.pwd)) {
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

    const handleMail = () => {
        const userCode = document.getElementById("email").value;
        setVo(prevVo => ({
            ...prevVo,
            email : userCode,
        }));
    };

    useEffect(()=>{
        if(vo.email){
            fetch('http://127.0.0.1:8888/app/member/join/emailCheck', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(vo),
            })
            .then((resp) => resp.json())
            .then((data) => {
                if (data.verificationCode) {

                    alert('이메일 인증 코드를 전송했습니다. 확인해주세요.');

                    setVo(prevVo => ({
                        ...prevVo,
                        emailCode : data.verificationCode,
                    }));

                } else {
                    alert('이메일 인증 코드 전송에 실패했습니다.');
                    
                }
            })
            .catch((error) => {
                console.error('Error sending email verification code:', error);
            });
        }
    }, [vo.email], [vo.emailCode]);
    
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
                        <td><input type='text' name='age' placeholder='생년월일 8자리를 입력해 주세요' onChange={handleInputChange} /></td>
                    </tr>
                    <tr>
                        <td>아이디</td>
                        <td>
                            <input
                                type='text'
                                name='id'
                                placeholder='아이디를 입력해 주세요'
                                onChange={handleInputChange}
                                onClick={handleInputClick}
                            />
                            <div className='error-message'>{idErrorMessage}</div>
                        </td>
                    </tr>
                    <tr>
                        <td>비밀번호</td>
                        <td>
                            <input
                                type='password'
                                name='pwd'
                                placeholder='비밀번호를 입력해 주세요'
                                onChange={handleInputChange}
                                onClick={() => setPwdErrorMessage("특수문자를 최소 1개 이상 포함해주세요.")}
                            />
                            <div className='error-message'>{pwdErrorMessage}</div>
                        </td>
                    </tr>
                    <tr>
                        <td>비밀번호 확인</td>
                        <td><input type='password' name='pwd2' placeholder='비밀번호 확인 해주세요' onChange={handleInputChange} /></td>
                    </tr>
                    <tr>
                        <td>이메일</td>
                        <td><input type='email' id='email' name='email' placeholder='이메일을 입력해 주세요' onChange={handleInputChange} /><button onClick={handleMail}>인증하기</button></td>
                    </tr>
                    <tr>
                        <td>닉네임</td>
                        <td><input type='text' name='nick'  placeholder='닉네임을 입력해 주세요' onChange={handleInputChange} /></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td><input className='join' type='submit' value='회원가입' style={{ backgroundColor: '#ffe23dfb' }} /></td>
                    </tr>
                </table>
            </form>
        </StyledJoinEmailDiv>
    );
};

export default JoinEmail;
