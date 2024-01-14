import React from 'react';
import styled from 'styled-components';
import Myheader from './Myheader';

const StyledMyplusDiv = styled.div`
width: 100%;
height: 100%;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
    h1{
        padding-bottom: 3%;
    }
    form{
        width: 100%;
    }
    table{
        width: 35%;
        height: 100px;
        background-color: lightgray;
        border-radius: 50px;
        margin-left: 33%;
    }
    td{
        padding-left: 20%;
        padding-top: 15%;
        padding-bottom: 3%;
        font-weight: bold;
        font-size: 20px;
    }
    .input{
        border: none;
        border-radius: 10px;
        height: 30px;
        width: 80%;
    }
    .button{
        width: 40%;
        height: 40px;
        margin-left: 20%;
        border: none;
        border-radius: 20px;
        border: 6px solid #ffe23dfb;
        background-color: white;
    }
`;

const Myaddressplus = () => {
    return (
        <StyledMyplusDiv>
            <Myheader />
             <h1>배송지 추가</h1>
             <form>
                <table>
                    <tbody>
                        <tr>
                            <td>이름</td>
                        </tr>
                        <tr>
                            <td>010-0000-0000</td>
                        </tr>
                        <tr>
                            <td><input className='input' type='text' name='address' placeholder='주소를 입력해주세요.' /></td>
                        </tr>
                        <tr>
                            <td><input className='button' type='submit' value="추가하기" /></td>
                        </tr>
                    </tbody>
                </table>
             </form>
        </StyledMyplusDiv>
    );
};

export default Myaddressplus;