import React from 'react';
import { Route, Routes } from 'react-router-dom';
import ProductTakju from './ProductTakju';
import ProductChungju from './ProductChungju';
import ProductWine from './ProductWine';
import ProductSoju from './ProductSoju';
import ProductDetail from './ProductDetail';

const ProductMain = () => {
    return (
        <Routes>
            <Route path='takju' element={<ProductTakju/>}/>
            <Route path='chungju' element={<ProductChungju/>}/>
            <Route path='wine' element={<ProductWine/>}/>
            <Route path='soju' element={<ProductSoju/>}/>
            <Route path='detail' element={<ProductDetail/>}/>
        </Routes>
    );
};

export default ProductMain;