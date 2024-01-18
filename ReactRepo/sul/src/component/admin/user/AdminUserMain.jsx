import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AdminUserList from './AdminUserList';
import AdminUserDetail from './AdminUserDetail';

const AdminUserMain = () => {
    return (
        <Routes>
            <Route path='list' element={<AdminUserList />}></Route>
            <Route path='detail' element={<AdminUserDetail />}></Route>
        </Routes>
    );
};

export default AdminUserMain;