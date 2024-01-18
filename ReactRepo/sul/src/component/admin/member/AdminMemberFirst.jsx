import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const StyledAdminMemberFirst = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
        
    & > table{
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-right: 200px;
    }
    
    thead {
        width: 100%;
    }

    thead > h1 {
        margin-top: 50px;
    }

    tbody {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    tr {
        width: 50%;
        height: 20%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-bottom: 50px;
    }

    tbody > tr:nth-child(1) {
    }

    td {
        width: 100%;
    }

    & > table > tbody > tr > td  > button {
        width: 100%;
        height: 60px;
        border: none;
        border-radius: 10px;
        font-weight: bold;
        font-size: 20px;
    }

    & > table > tbody > tr > td {
            width: 100%;
            height: 60px;
            font-weight: bold;
            font-size: 20px;
    }
        
    
`;

const AdminMemberFirst = () => {

    const navigate = useNavigate();

    const handleJoin = () => {
        navigate("/admin/member/Join")
    };

    const handleLogin = () => {
        navigate("/admin/member/Login")
    };

    return (
        <>
        <StyledAdminMemberFirst>
            <table>
                <thead>
                    <h1>관리자페이지</h1>
                </thead>
                <tbody>
                    <tr>
                        <td><button onClick={handleJoin} style={{backgroundColor: '#ffeb34fa'}}>관리자 등록</button></td>
                    </tr>
                    <tr>
                        <td><button onClick={handleLogin} style={{backgroundColor: '#6eb7fbfa', color: 'white'}}>로그인</button></td>
                    </tr>
                </tbody>
            </table>
        </StyledAdminMemberFirst>
        
      </>
    );
};

export default AdminMemberFirst;