import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Header from './component/member/common/Header';
import Login from './component/member/login/Login';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Login />
    </BrowserRouter>
  );
}

export default App;
