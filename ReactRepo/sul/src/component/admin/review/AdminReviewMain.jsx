import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AdminReviewList from './AdminReviewList';
import AdminReviewDetail from './AdminReviewDetail';
import AdminReviewDelete from './AdminReviewDelete';

const AdminReviewMain = () => {
    return (
        <Routes>
            <Route path='list' element={<AdminReviewList />}></Route>
            <Route path='detail' element={<AdminReviewDetail />}></Route>
            <Route path='delete' element={<AdminReviewDelete />}></Route>
        </Routes>
    );
};

export default AdminReviewMain;