import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './Login';
import JoinFirst from './JoinFirst';
import JoinEmail from './JoinEmail';

const userMain = () => {
    return (
        <Routes>
            <Route path='/login' element={<Login />}/>
            <Route path='/join' element={<JoinFirst />} />  
            <Route path='/joinEmail' element={<JoinEmail />}/>
        </Routes>
    );
};

export default userMain;