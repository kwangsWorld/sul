import React from 'react';
import styled from 'styled-components';

const StyledKakaoDiv = styled.div`
    width  : 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-top: 10%;
    & > form{
        width: 100%;
        height: 100%;
        margin-left: 75%;
        margin-top: 3%;
    }
    & > form > table{
        width: 50%;
        height: 50%;
    }
    & > form > table > tbody > tr > td > input{
        border: none;
        border-bottom: 1px solid lightgray;
        width: 50%;
        height: 50px;
        font-weight: bold;
        margin: 10px 0;
    }
    & > form > table > tbody > tr > td > input[type='submit']{
        border: none;
    }
`;

const KakaoLogin = () => {
    return (
        <StyledKakaoDiv>
            <h1>kakao</h1>
            <form>
                <table>
                    <tbody>
                        <tr>
                            <td><input type='text' name='id' placeholder='아이디' /></td>
                        </tr>
                        <tr>
                            <td><input type='password' name='pwd' placeholder='비밀번호'/></td>
                        </tr>
                        <tr>
                            <td><input type='submit' value="로그인" style={{backgroundColor: '#ffe23dfb'}}/></td>
                        </tr>
                    </tbody>
                </table>
            </form>
        </StyledKakaoDiv>
    );
};

export default KakaoLogin;