import React from 'react';
import styled from 'styled-components'
import Header from './Header';
import Navi from './Navi';
import Main from './Main';
import Footer from './Footer';
import AdminLayout from '../admin/AdminLayout';

const StyledLayoutDiv = styled.div`
    width: 100vw;
    height: 100vh;
`;

const Layout = () => {
    return (
        <StyledLayoutDiv>
            <Header />
            <Navi />
            <Main />
            <Footer />
        </StyledLayoutDiv>
    );
};

export default Layout;