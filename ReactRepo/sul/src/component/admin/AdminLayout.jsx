import React from 'react';
import styled from 'styled-components'
import AdminHeader from './AdminHeader';
import AdminFooter from './AdminFooter';
import AdminNavi from './AdminNavi';
import AdminMain from './AdminMain';

const StyledLayoutDiv = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
`;

const AdminLayout = () => {
    return (
        <StyledLayoutDiv>
            <AdminHeader />
            <AdminNavi />
            <AdminMain />
            <AdminFooter />
        </StyledLayoutDiv>
    );
};

export default AdminLayout;








