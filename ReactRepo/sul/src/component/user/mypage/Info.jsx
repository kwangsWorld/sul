import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Myheader from './Myheader';
import { Link, useNavigate } from 'react-router-dom';

const StyledInfoDiv = styled.div`

table{
    width: 60%;
    background-color: lightgray;
    margin-top: 8%;
    margin-bottom: 20%;
    padding-bottom: 5%;
    border-radius: 60px;
    margin-left: 20%;
}
.alink{
    text-decoration: none;
    color: blue;
}
h3{
    font-size: 30px;
    color: black;
}
td{
    padding-top: 5%;
    font-weight: bold;
    font-size: 20px;
    color: #6e6e6e;
}
td:first-child{
    padding-left: 15%;
}
td:nth-child(2){
    padding-left: 5%;
}

.font{
 border-bottom: 3px solid #ffe23dfb;
}

`;

const Info = () => {

    const navigate = useNavigate();

    const [memberVoList, setMemberVoList] = useState([]);
    const loadMemberVoList = () => {
        fetch("http://127.0.0.1:8888/app/member/detail")
        .then( resp => resp.json())
        .then( (x) => {setMemberVoList(x); })
        ;
    }

    useEffect( () => {
        console.log("useEffect 호출됨");
        loadMemberVoList();
    }, []);
 
    return (
        <StyledInfoDiv>
            <Myheader />
            <table>
                <tr>
                    <td className='font'><h3>회원정보</h3></td>
                    <td  className='font'><Link className='alink'>수정</Link></td>
                </tr>
                {
                    <>
                    
                         <tr>
                            <td>회원명</td>
                            <td>{memberVoList.name}</td>
                        </tr>
                        <tr>
                            <td>닉네임</td>
                            <td>{memberVoList.nick}</td>
                        </tr>
                        <tr>
                            <td>이메일</td>
                            <td>ㅇㅇㅇ</td>
                        </tr>
                        <tr>
                            <td>비밀번호</td>
                            <td>ㅇㅇㅇ</td>
                        </tr>
                        <tr>
                            <td>휴대폰 번호</td>
                            <td>ㅇㅇㅇ</td>
                        </tr>
                    </>
                   
                }
                
            </table>
            
        </StyledInfoDiv>
    );
};

export default Info;