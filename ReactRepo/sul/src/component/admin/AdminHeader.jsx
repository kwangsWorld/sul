import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { MemberContext } from '../../context/MemberContext';

const StyledAdminHeaderDiv = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-sizing: border-box;
    border-bottom: 1px solid;

    .icon{
        font-size: 25px;
        font-family: Verdana, Geneva, Tahoma, sans-serif;
        font-weight: bolder;
    }

    .header_left{
        margin-left: 6%;
    }

    .header_right{
        display: flex;
        flex-direction: row;
    }

    .join_login{
        display: flex;
        flex-direction: row;
        margin-right: 20px;
    }

    .join_login>div{
        display: flex;
        flex-direction: row;
        margin-right: 20px;
    }

    .header_search{
        width:500px;
        height: 30px;
        border-radius: 10px;
        border: 1px solid gray;
        font-weight: bold;
    }

    .btn {
        height: 30px;
        font-weight: bold;
        border-radius: 10px;
        border: 1px solid gray;
        font-weight: bold;
        margin-top: 17px;
        background-color: #ffe23dfb;
    }
`;

const AdminHeader = () => {

    const {adminLoginMember ,setAdminLoginMember} = useContext(MemberContext);
    const navigate = useNavigate();
    
    // 페이지 로드 시 세션 스토리지에서 로그인 정보 가져오기
    const [adminLoginInfo, setAdminLoginInfo] = useState( () => {
        const adminLoginInfoStr = sessionStorage.getItem('loginAdminVo');
        return JSON.parse(adminLoginInfoStr) || null;
    });

    const handleLogout = () => {
        sessionStorage.removeItem("loginAdminVo");
        setAdminLoginInfo(null);
        setAdminLoginMember(null);
        navigate("/admin/member/first")
    }

    const handleHome = () => {
        sessionStorage.removeItem("loginAdminVo");
        setAdminLoginInfo(null);
        setAdminLoginMember(null);
        navigate("/product/list")
    };

    return (
        <StyledAdminHeaderDiv>
            <div className='header_left'>
                <div className='icon'>SULDAMA</div>
            </div>
            <div className='header_right'>
                <div className='join_login'>
                    {adminLoginMember === null
                        ?
                        <>
                            <div onClick={handleHome}>
                                홈으로
                            </div>
                        </>
                         :
                        <>
                            <div className='join'>
                                <Link to="/admin/notice/list">
                                    <h4>{adminLoginMember.adminName}</h4>
                                </Link>
                            </div>
                            <div className='out'>
                                <button className='btn' onClick={handleLogout}>로그아웃</button>
                            </div>
                        </>
                    }
                </div>
            </div>
        </StyledAdminHeaderDiv>
    );
};

export default AdminHeader;