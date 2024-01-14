import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AdminNoticeList from './AdminNoticeList';
import AdminNoticeDetail from './AdminNoticeDetail';
import AdminNoticeWrite from './AdminNoticeWrite';

const AdminNoticeMain = () => {
    return (
        <Routes>
            <Route path='list' element={<AdminNoticeList />}></Route>
            <Route path='detail' element={<AdminNoticeDetail />}></Route>
            <Route path='write' element={<AdminNoticeWrite />}></Route>
        </Routes>
    );
};

export default AdminNoticeMain;