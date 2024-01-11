import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Comlist from './Comlist';

const ComMain = () => {
    return (
        <Routes>
            <Route path='/comlist' element={<Comlist />}></Route>
        </Routes>
    );
};

export default ComMain;