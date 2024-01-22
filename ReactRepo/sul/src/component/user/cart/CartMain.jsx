import React from 'react';
import { Route, Routes } from "react-router-dom";
import CartList from './CartList';
import CartBuyList from './CartBuyList';

const cartMain = () => {
    return (
        <Routes>
            <Route path='list' element={<CartList/>}></Route>
            <Route path='buyList' element={<CartBuyList/>}></Route>
        </Routes>
    );
};

export default cartMain;