import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledNaviDiv = styled.div`
    width: 100%;
    height: 100%;
    background-color: yellow;
`;

const AdminNavi = () => {
    return (
        <StyledNaviDiv>
            <div><Link to="/adminNotice/list">공지사항 관리</Link></div>
            <div><Link to="/adminCsboard/list">고객센터 관리</Link></div>
            <div><Link to="/adminProduct/list">상품 관리</Link></div>
            <div><Link to="/adminDelivery/list">배송 관리</Link></div>
            <div><Link to="/adminReview/list">리뷰 관리</Link></div>
            <div><Link to="/adminMember/list">회원 관리</Link></div>
        </StyledNaviDiv>
    );
};

export default AdminNavi;