import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';


const StyledLoginFont = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 5%;
        & > div{
            margin-right: 5.5%;
        }
        & > div> h1{
            font-weight: bold;
            font-size: 45px;
        }
        & > div > h3{
            color: gray;
            font-size: 25px;
        }
        & > table{
            width: 50%;
            height: 45%;
            margin-left: 25%;
        }
        & > table > tbody > tr > td:nth-child(2){
            padding-bottom: 15%;
        }
        & > table > tbody > tr > td  > button {
            width: 50%;
            height: 60px;
            border: none;
            border-radius: 10px;
            font-weight: bold;
            font-size: 20px;
            padding-right: 20%;
    }
    
    .btn{
        margin-bottom: 20%;
    }
    .email{
        padding-bottom: 20%;
    }
`;

const JoinFirst = () => {

    const navigate = useNavigate();

    const handlejoin = () => {
        navigate("/member/joinEmail")
    };

    return (
        <StyledLoginFont>
            <div>
                <h1>반가워요!🎉</h1>
                <h3>찾아오는 인생술, 술담아입니다.</h3>
            </div>
            
            <table>
                <tbody>
                    <tr>
                        <td><button className='btn1' style={{backgroundColor: '#ffeb34fa'}}>💬 카카오로 시작하기</button></td>
                    </tr>
                    <tr className='email'>
                        <td><button className='btn' onClick={handlejoin} style={{backgroundColor: '#6eb7fbfa', color: 'white'}}>✉️ 이메일로 시작하기</button></td>
                    </tr>
                </tbody>
            </table>
        </StyledLoginFont>
    );
};

export default JoinFirst;