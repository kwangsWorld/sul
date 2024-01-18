import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AdminMemberJoin from './AdminMemberJoin';
import AdminMemberLogin from './AdminMemberLogin';
import AdminMemberFirst from './AdminMemberFirst';

const AdminMemberMain = () => {
    return (
        <Routes>
        <Route path='/first/*' element={<AdminMemberFirst />}></Route>
        <Route path='/Join/*' element={<AdminMemberJoin />}></Route>
        <Route path='/Login/*' element={<AdminMemberLogin />}></Route>
        </Routes>
    );
};

export default AdminMemberMain;