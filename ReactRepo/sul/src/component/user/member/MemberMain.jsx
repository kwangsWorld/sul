import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './Login';
import JoinFirst from './JoinFirst';
import JoinEmail from './JoinEmail';
import SocialKakao from './SocialKakao';

const MemberMain = () => {
    return (
        <Routes>
            <Route path='login' element={<Login />} />
            <Route path='joinfirst' element={<JoinFirst />} />  
            <Route path='joinEmail' element={<JoinEmail />}/>
            <Route path='kakao' element={<SocialKakao />}></Route>
        </Routes>
    );
};

export default MemberMain;