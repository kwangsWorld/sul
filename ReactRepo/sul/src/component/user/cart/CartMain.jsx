import React from 'react';
import { Route, Routes } from "react-router-dom";
import CartList from './CartList';

const cartMain = () => {
    return (
        <Routes>
            <Route path='list' element={<CartList/>}></Route>
        </Routes>
    );
};

export default cartMain;