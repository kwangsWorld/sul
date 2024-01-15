import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AdminMemberList from './AdminMemberList';
import AdminMemberDetail from './AdminMemberDetail';

const AdminMemberMain = () => {
    return (
        <Routes>
            <Route path='list' element={<AdminMemberList />}></Route>
            <Route path='detail' element={<AdminMemberDetail />}></Route>
        </Routes>
    );
};

export default AdminMemberMain;