import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AdminReviewList from './AdminReviewList';
import AdminReviewDetail from './AdminReviewDetail';

const AdminReviewMain = () => {
    return (
        <Routes>
            <Route path='list' element={<AdminReviewList />}></Route>
            <Route path='detail' element={<AdminReviewDetail />}></Route>
        </Routes>
    );
};

export default AdminReviewMain;