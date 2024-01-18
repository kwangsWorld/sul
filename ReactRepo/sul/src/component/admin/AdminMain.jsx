import React from 'react';
import styled from 'styled-components';
import {Route, Routes} from 'react-router-dom';
import AdminNoticeMain from './notice/AdminNoticeMain';
import AdminCsBoardMain from './csboard/AdminCsBoardMain';
import AdminProductMain from './product/AdminProductMain';
import AdminDeliveryMain from './delivery/AdminDeliveryMain';
import AdminReviewMain from './review/AdminReviewMain';
import AdminUserMain from './user/AdminUserMain';
import AdminMemberMain from './member/AdminMemberMain';

const StyledMainDiv = styled.div`
    width: 100%;
    height: 100%;
    background-color: fff;
`;

const AdminMain = () => {
    return (
        <StyledMainDiv>
            <Routes>
                <Route path='/member/*' element={<AdminMemberMain />}></Route>
                <Route path='/notice/*' element={<AdminNoticeMain />}></Route>
                <Route path='/csboard/*' element={<AdminCsBoardMain />}></Route>
                <Route path='/product/*' element={<AdminProductMain />}></Route>
                <Route path='/delivery/*' element={<AdminDeliveryMain />}></Route>
                <Route path='/review/*' element={<AdminReviewMain />}></Route>
                <Route path='/user/*' element={<AdminUserMain />}></Route>
            </Routes>
        </StyledMainDiv>
    );
};

export default AdminMain;