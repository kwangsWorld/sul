import React from 'react';
import styled from 'styled-components';

const StyledKakaoDiv = styled.div`
    width  : 100%;
    height: 100%;
`;

const KakaoLogin = () => {
    return (
        <StyledKakaoDiv>
            <h1>kakao</h1>
            <from>
                <table>
                    <tbody>
                        <tr>
                            <td><input type='text' name='id' placeholder='아이디' /></td>
                        </tr>
                        <tr>
                            <td><input type='password' name='pwd' placeholder='비밀번호'/></td>
                        </tr>
                        <tr>
                            <td><input type='submit' value="로그인"/></td>
                        </tr>
                    </tbody>
                </table>
            </from>
        </StyledKakaoDiv>
    );
};

export default KakaoLogin;