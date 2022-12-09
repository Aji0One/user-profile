
import './App.css';
import Topbar from './components/Topbar/Topbar';
import Dashboard from './components/Dashboard/dashboard';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import User from './components/Users/user';
import Profile from './components/profile/profile';

function App() {
  return (
  <>
    <BrowserRouter>
      <Topbar/>
      <Routes>
        <Route path='/' element={<Dashboard/>} />
        <Route path='/user' element={<User/>} />
        <Route path='profile' element={<Profile/>} />
      </Routes>
    </BrowserRouter>
  </>
    
  );
}

export default App;
