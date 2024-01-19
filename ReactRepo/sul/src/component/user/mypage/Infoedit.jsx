import React, { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import Myheader from './Myheader';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { MemberContext } from '../../../context/MemberContext';

const StyledInfoEditDiv = styled.div`
width: 100%;
height: 100%;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
margin-top: 5%;
    table{
        border: 3px solid gray;
        border-radius: 30px;
        width: 40%;
        padding-bottom: 4%;
        margin-bottom: 3%;
    }
    td{
        padding-top: 5%;
        font-weight: bold;
        font-size: 17px;
        border-collapse: collapse;
    }
    
    td:first-child{
        padding-left: 15%;
    }
    td:nth-child(2){
        padding-left: 20%;
        text-align: left;
    }

    .font{
        border-bottom: 3px solid gray;
    }
    .alink{
        text-decoration: none;
        color: blue;
    }
    button{
    background-color: white;
    border-radius: 20px;
    font-size: 16px;
    font-weight: bold;
    border: 6px solid #ffe23dfb;
    margin-bottom: 15%;
  }


`;

const Infoedit = () => {

    const {loginMember ,setLoginMember} = useContext(MemberContext);
    
    const navigate = useNavigate();
    const [loginInfo, setLoginInfo] = useState(() => {
        const loginInfoStr = sessionStorage.getItem('loginMemberVo');
        return JSON.parse(loginInfoStr) || null;
    });
    const [editedNo , setEditedNo] = useState(loginInfo.memberNo);
    const [editedName , setEditedName] = useState(loginInfo.name);
    const [editedAge, setEditedAge] = useState(loginInfo.age);
    const [editedNick, setEditedNick] = useState(loginInfo.nick);
    const [editedEmail, setEditedEmail] = useState(loginInfo.email);
    const [editedId, setEditedId] = useState(loginInfo.id);
    const [editedPwd, setEditedPwd] = useState(loginInfo.pwd);
    const [editedTel, setEditedTel] = useState(loginInfo.tel);
    


    const handleEdit = () => {
        const editVo = {
            memberNo : editedNo,
            name: editedName,
            age: editedAge,
            nick: editedNick,
            email: editedEmail,
            id: editedId,
            pwd: editedPwd,
            tel: editedTel,
        };
        fetch("http://127.0.0.1:8888/app/member/edit",{
            method: 'post',
            headers: {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify(editVo)
        })
        .then((resp) => resp.json())
        .then((data) => {
            if(data.msg === "good"){
                alert("회원정보 수정이 완료되었습니다.");
                sessionStorage.removeItem("loginMemberVo");
                setLoginInfo(null);
                setLoginMember(null);
                navigate("/product/list")
            }else{
                alert("회원정보 수정 실패")
            }
        })
        .catch((e) => {
            alert("회원정보 수정 중 에러 발생")
        });
    };

    const handelNameChange = (event) => {
        setEditedName(event.target.value);
    }

    const handelAgeChange = (event) => {
        setEditedAge(event.target.value);
    }

    const handelNickChange = (event) => {
        setEditedNick(event.target.value);
    }

    const handelEmailChange = (event) => {
        setEditedEmail(event.target.value);
    }

    const handelIdChange = (event) => {
        setEditedId(event.target.value);
    }

    const handelPwdChange = (event)=> {
        setEditedPwd(event.target.value);
    }

    const handelTelChange = (event) => {
        setEditedTel(event.target.value);
    }
    return (
        <StyledInfoEditDiv>
             <Myheader />
            <table>
                <tr>
                    <td className='font'><h3>회원정보</h3></td>
                    <td  className='font'></td>
                </tr>
                {
                    <>
                    
                         <tr>
                            <td>회원명</td>
                            <td><textarea name='name' value={editedName} onChange={handelNameChange}>{loginInfo.name}</textarea></td>
                        </tr>
                        <tr>
                            <td>생년월일</td>
                            <td><textarea name='age' value={editedAge} onChange={handelAgeChange}>{loginInfo.age}</textarea></td>
                        </tr>
                        <tr>
                            <td>닉네임</td>
                            <td><textarea name='nick' value={editedNick} onChange={handelNickChange}>{loginInfo.nick}</textarea></td>
                        </tr>
                        <tr>
                            <td>이메일</td>
                            <td><textarea name='email' value={editedEmail} onChange={handelEmailChange}>{loginInfo.email}</textarea></td>
                        </tr>
                        <tr>
                            <td>아이디</td>
                            <td><textarea name='id' value={editedId} onChange={handelIdChange}>{loginInfo.id}</textarea></td>
                        </tr>
                        <tr>
                            <td>비밀번호</td>
                            <td><textarea name='pwd' value={editedPwd} onChange={handelPwdChange}>{loginInfo.pwd}</textarea></td>
                        </tr>
                        <tr>
                            <td>휴대폰 번호</td>
                            <td><textarea name='tel' value={editedTel} onChange={handelTelChange}>{loginInfo.tel}</textarea></td>
                        </tr>
                      
                    </>
                   
                }
            </table>
            <button onClick={handleEdit}>수정하기</button>
        </StyledInfoEditDiv>
    );
};

export default Infoedit;