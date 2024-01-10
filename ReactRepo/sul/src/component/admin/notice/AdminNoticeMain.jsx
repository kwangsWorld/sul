import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AdminNoticeList from './AdminNoticeList';
import AdminNoticeDetail from './AdminNoticeDetail';
import AdminNoticeWrite from './AdminNoticeWrite';
import AdminNoticeEdit from './AdminNoticeEdit';
import AdminNoticeDelete from './AdminNoticeDelete';

const AdminNoticeMain = () => {
    return (
        <Routes>
            <Route path='list' element={<AdminNoticeList />}></Route>
            <Route path='detail' element={<AdminNoticeDetail />}></Route>
            <Route path='write' element={<AdminNoticeWrite />}></Route>
            <Route path='edit' element={<AdminNoticeEdit />}></Route>
            <Route path='delete' element={<AdminNoticeDelete />}></Route>
        </Routes>
    );
};

export default AdminNoticeMain;