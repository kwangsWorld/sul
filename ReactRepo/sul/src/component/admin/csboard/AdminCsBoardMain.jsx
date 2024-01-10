import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AdminCsBoardList from './AdminCsBoardList';
import AdminCsBoardDetail from './AdminCsBoardDetail';
import AdminCsBoardAnswer from './AdminCsBoardAnswer';

const AdminCsBoardMain = () => {
    return (
        <Routes>
            <Route path='list' element={<AdminCsBoardList />}></Route>
            <Route path='detail' element={<AdminCsBoardDetail />}></Route>
            <Route path='answer' element={<AdminCsBoardAnswer />}></Route>
        </Routes>
    );
};

export default AdminCsBoardMain;