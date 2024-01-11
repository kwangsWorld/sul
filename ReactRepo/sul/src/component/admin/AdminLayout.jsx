import React from 'react';
import styled from 'styled-components'
import AdminHeader from './AdminHeader';
import AdminFooter from './AdminFooter';
import AdminNavi from './AdminNavi';
import AdminMain from './AdminMain';

const StyledLayoutDiv = styled.div`
    width: 90vw;
    height: 100vh;
    display: grid;
    grid-template-rows: 1fr 8fr 1fr;
    place-items: center center;
    margin: auto;

& > :nth-child(2) {
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: 2fr 8fr;
}

`;
const AdminLayout = () => {
    return (
        <StyledLayoutDiv>
                <AdminHeader />
            <div>
                <AdminNavi />
                <AdminMain />
            </div>
                <AdminFooter />
        </StyledLayoutDiv>
    );
};

export default AdminLayout;








