import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './component/user/Layout';
import AdminLayout from './component/admin/AdminLayout';
import { MemberContextProvider } from './context/MemberContext';

function App() {
  return (
    <MemberContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/*' element={<Layout />}></Route>
          <Route path='/admin/*' element={<AdminLayout />}></Route>
        </Routes>
      </BrowserRouter>
    </MemberContextProvider>
  );
}

export default App;
