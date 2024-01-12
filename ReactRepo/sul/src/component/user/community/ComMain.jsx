import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Comlist from './Comlist';
import Comwrite from './Comwrite';
import Comdetail from './Comdetail';

const ComMain = () => {
    return (
        <Routes>
            <Route path='/comlist' element={<Comlist />}></Route>
            <Route path='/comwrite' element={<Comwrite />}></Route>
            <Route path='/comdetail' element={<Comdetail />}></Route>
        </Routes>
    );
};

export default ComMain;