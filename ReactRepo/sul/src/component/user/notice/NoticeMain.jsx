import React from 'react';
import { Route, Routes } from 'react-router-dom';
import NoticeList from './NoticeList';
import NoticeDetail from './NoticeDetail';

const NoticeMain = () => {
    return (
        <Routes>
            <Route path='list' element={<NoticeList />}></Route>
            <Route path='list' element={<NoticeDetail />}></Route>
        </Routes>
    );
};

export default NoticeMain;