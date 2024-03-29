import React from 'react';
import { Route, Routes } from 'react-router-dom';
import ProductTakju from './ProductTakju';
import ProductChungju from './ProductChungju';
import ProductWine from './ProductWine';
import ProductSoju from './ProductSoju';
import ProductDetail from './ProductDetail';
import ProductList from './ProductList';
import ProductSearch from './ProductSearch';


const ProductMain = () => {
    return (
        <Routes>
            <Route path='list' element={<ProductList/>}/>
            <Route path='list/1' element={<ProductTakju/>}/>
            <Route path='list/2' element={<ProductChungju/>}/>
            <Route path='list/3' element={<ProductWine/>}/>
            <Route path='list/4' element={<ProductSoju/>}/>
            <Route path='search' element={<ProductSearch/>}/>
            <Route path='detail/:productNo' element={<ProductDetail/>}/>
            <Route path='/' element={<ProductList/>}/>
        </Routes>
    );
};

export default ProductMain;