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
        font-style: italic;
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
`;

const AdminHeader = () => {

    const [adminLoginMember] = useContext(MemberContext);
    const navigate = useNavigate();
    const [loginInfo , setLoginInfo] = useState(JSON.parse(sessionStorage.getItem('adminLoginMemberVo')));


    const handleLogout = () => {
        sessionStorage.removeItem("adminLoginMemberVo");
        setLoginInfo(null);
        navigate("/admin/member/first")
    }

    return (
        <StyledAdminHeaderDiv>
            <div className='header_left'>
                <div className='icon'>SULDAMA</div>
            </div>
            <div className='header_center'>
                <input className='header_search' type="text" placeholder='지우야, 또 술먹게? 어떤술 찾아줘?' />
            </div>
            <div className='header_right'>
                <div className='join_login'>
                    {adminLoginMember === null
                        ?
                        <>
                            <div></div>
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