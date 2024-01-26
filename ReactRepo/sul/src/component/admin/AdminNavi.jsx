import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { MemberContext } from '../../context/MemberContext';

const StyledNaviDiv = styled.div`
    min-width: 200px;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    font-weight: bold;

    StyledNaviDiv > div {
    }
`;

const AdminNavi = () => {

   const {adminLoginMember} = useContext(MemberContext);

    return (
        adminLoginMember === null
            ? 
            <StyledNaviDiv>

            </StyledNaviDiv>
            :
                <StyledNaviDiv>
            <>
                <div><Link to="/admin/notice/list">❗공지사항 관리</Link></div>
                <div><Link to="/admin/csboard/list">📞고객센터 관리</Link></div>
                <div><Link to="/admin/product/list">💧상품 관리</Link></div>
                <div><Link to="/admin/delivery/list">🛻배송 관리</Link></div>
                <div><Link to="/admin/review/list">⭐리뷰 관리</Link></div>
                <div><Link to="/admin/user/list">👤회원 관리</Link></div>
            </>
                </StyledNaviDiv>
    );
};

export default AdminNavi;