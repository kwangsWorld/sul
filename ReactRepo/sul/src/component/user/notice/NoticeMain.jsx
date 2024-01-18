import React from 'react';
import { Route, Routes } from 'react-router-dom';
import NoticeList from './NoticeList';
import NoticeDetail from './NoticeDetail';
import Myheader from '../mypage/Myheader';

const NoticeMain = () => {
    return (
        <>
            <div>
                <Myheader />
            </div>
            <Routes>
                <Route path='list' element={<NoticeList />}></Route>
                <Route path='detail' element={<NoticeDetail />}></Route>
            </Routes>
        </>
    );
};

export default NoticeMain;