import React from 'react';
import { Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
import MypageMain from './mypage/MypageMain';
import ComMain from './community/ComMain';
import MemberMain from './member/MemberMain';
import ProductMain from './product/ProductMain';
import CartMain from './cart/CartMain';
import BuyMain from './buy/BuyMain';
import NoticeMain from './notice/NoticeMain';
import CsBoardMain from './csboard/CsBoardMain';

const StyledMainDiv = styled.div`
    min-width: 1500px;
    width: 100vw;
    height: 100vh;

`;


const Main = () => {
    return (
        <StyledMainDiv>
            <Routes>
                <Route path='/member/*' element={<MemberMain />}></Route>
                <Route path='/mypage/*' element={<MypageMain />}></Route>
                <Route path='/community/*' element={<ComMain />}></Route>
                <Route path='/product/*' element={<ProductMain />}></Route>
                <Route path='/cart/*' element={<CartMain />}></Route>
                <Route path='/buy/*' element={<BuyMain />}></Route>
                <Route path='/notice/*' element={<NoticeMain />}></Route>
                <Route path='/csboard/*' element={<CsBoardMain />}></Route>
            </Routes>
        </StyledMainDiv>
    );
};

export default Main;