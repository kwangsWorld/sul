import React from 'react';
import BuyList from './BuyList'
import { Route, Routes } from 'react-router-dom';

const BuyMain = () => {
    return (
        <Routes>
            <Route path='list' element={<BuyList/>}></Route>
        </Routes>
    );
};

export default BuyMain;