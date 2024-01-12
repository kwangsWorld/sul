import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Myheader from './Myheader';
import Info from './Info';
import Mycom from './Mycom';
import Mycomdetail from './Mycomdetail';

const MypageMain = () => {
    return (
        <Routes>
            <Route path='/myheader' element={<Myheader />}></Route>
            <Route path='/info' element={<Info />}></Route>
            <Route path='/mycom' element={<Mycom />}></Route>
            <Route path='/mycomdetail' element={<Mycomdetail />}></Route>
        </Routes>
    );
};

export default MypageMain;