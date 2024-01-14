import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AdminProductList from './AdminProductList';
import AdminProductDetail from './AdminProductDetail';
import AdminProductInsert from './AdminProductInsert';

const AdminProductMain = () => {
    return (
        <Routes>
            <Route path='list' element={<AdminProductList />}></Route>
            <Route path='detail' element={<AdminProductDetail />}></Route>
            <Route path='insert' element={<AdminProductInsert />}></Route>
        </Routes>
    );
};

export default AdminProductMain;