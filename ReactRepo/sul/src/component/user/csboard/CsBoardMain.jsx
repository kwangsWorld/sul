import React from 'react';
import { Route, Routes } from 'react-router-dom';
import CsBoardList from './CsBoardList';
import CsBoardDetail from './CsBoardDetail';
import CsBoardQuestion from './CsBoardQuestion';

const CsBoardMain = () => {
    return (
        <Routes>
            <Route path='list' element={<CsBoardList />}></Route>
            <Route path='detail' element={<CsBoardDetail />}></Route>
            <Route path='question' element={<CsBoardQuestion />}></Route>
        </Routes>
    );
};

export default CsBoardMain;