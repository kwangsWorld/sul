import React from 'react';
import { Route, Routes } from 'react-router-dom';
import UserMain from './member/UserMain';
import MypageMain from './mypage/MypageMain';
import ComMain from './community/ComMain';

const Main = () => {
    return (
        <Routes>
            <Route path='/member/*' element={<UserMain />}></Route>
            <Route path='/mypage/*' element={<MypageMain />}></Route>
            <Route path='/community/*' element={<ComMain />}></Route>
        </Routes>
    );
};

export default Main;