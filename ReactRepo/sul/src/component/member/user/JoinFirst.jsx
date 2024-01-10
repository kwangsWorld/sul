import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';


const StyledLoginFont = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 13%;
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
            height: 100%;
            margin-left: 25%;
        }
        & > table > tbody > tr > td{
            padding-top: 2%;
        }
        & > table > tbody > tr > td > a > button {
            width: 50%;
            height: 60px;
            border: none;
            border-radius: 10px;
            font-weight: bold;
            font-size: 20px;
            padding-right: 20%;
    }
`;

const JoinFirst = () => {

    const navigate = useNavigate();

    return (
        <StyledLoginFont>
            <div>
                <h1>반가워요!🎉</h1>
                <h3>찾아오는 인생술, 술담아입니다.</h3>
            </div>
            
            <table>
                <tbody>
                    <tr>
                        <td><Link to="/member/"><button style={{backgroundColor: '#ffeb34fa'}}>💬 카카오로 시작하기</button></Link></td>
                    </tr>
                    <tr>
                    <td><Link to="/member/joinEmail"><button style={{backgroundColor: '#6eb7fbfa', color: 'white'}}>✉️ 이메일로 시작하기</button></Link></td>
                    </tr>
                </tbody>
            </table>
        </StyledLoginFont>
    );
};

export default JoinFirst;