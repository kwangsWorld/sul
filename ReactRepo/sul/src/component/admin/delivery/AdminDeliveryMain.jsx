import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AdminDeliveryList from './AdminDeliveryList';
import AdminDeliveryDetail from './AdminDeliveryDetail';
import AdminDeliveryStatus from './AdminDeliveryStatus';

const AdminDeliveryMain = () => {
    return (
        <Routes>
            <Route path='list' element={<AdminDeliveryList />}></Route>
            <Route path='detail' element={<AdminDeliveryDetail />}></Route>
            <Route path='status' element={<AdminDeliveryStatus />}></Route>
        </Routes>
    );
};

export default AdminDeliveryMain;