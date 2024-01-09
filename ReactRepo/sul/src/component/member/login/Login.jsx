import React from 'react';
import { Route, Routes} from 'react-router-dom';
import JoinEmail from './component/member/login/JoinEmail';

const Login = () => {
    return (
        <Routes>
            <Route path='/joinEmail' element={<JoinEmail />} />
        </Routes>
    );
};

export default Login;