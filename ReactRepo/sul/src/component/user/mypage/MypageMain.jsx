import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Myheader from './Myheader';
import Info from './Info';

const MypageMain = () => {
    return (
        <Routes>
            <Route path='/myheader' element={<Myheader />}></Route>
            <Route path='/info' element={<Info />}></Route>
        </Routes>
    );
};

export default MypageMain;