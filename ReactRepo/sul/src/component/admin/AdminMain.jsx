import React from 'react';
import styled from 'styled-components';
import {Route, Routes} from 'react-router-dom';
import AdminNoticeMain from './notice/AdminNoticeMain';
import AdminCsBoardMain from './csboard/AdminCsBoardMain';
import AdminProductMain from './product/AdminProductMain';
import AdminDeliveryMain from './delivery/AdminDeliveryMain';
import AdminReviewMain from './review/AdminReviewMain';
import AdminMemberMain from './member/AdminMemberMain';
import ErrorPageNotFound from '../../error/error';

const StyledMainDiv = styled.div`
    width: 100%;
    height: 100%;
    background-color: skyblue;
`;

const AdminMain = () => {
    return (
        <StyledMainDiv>
            <Routes>
                <Route path='/' element={<h1>로그인 ㄱㄱ</h1>}></Route>
                <Route path='/adminNotice/*' element={<AdminNoticeMain />}></Route>
                <Route path='/adminCsboard/*' element={<AdminCsBoardMain />}></Route>
                <Route path='/adminProduct/*' element={<AdminProductMain />}></Route>
                <Route path='/adminDelivery/*' element={<AdminDeliveryMain />}></Route>
                <Route path='/adminReview/*' element={<AdminReviewMain />}></Route>
                <Route path='/adminMember/*' element={<AdminMemberMain />}></Route>
                <Route path='/*' element={<ErrorPageNotFound />}></Route>
            </Routes>
        </StyledMainDiv>
    );
};

export default AdminMain;