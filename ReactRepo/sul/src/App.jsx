import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './component/user/Layout';
import AdminLayout from './component/admin/AdminLayout';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/*' element={<Layout />}></Route>
        <Route path='/admin/*' element={<AdminLayout />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
