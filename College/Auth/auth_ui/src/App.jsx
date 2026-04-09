
import './App.css'
import { Routes, Route, NavLink } from 'react-router';
import Home from './pages/Home.jsx';
import Login from './pages/Login.jsx';
import Profile from './pages/Profile.jsx';


function App() {

  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <NavLink to='/' className="nav-link">Home</NavLink>
          <NavLink to='/login' className="nav-link">Login</NavLink>
          <NavLink to='/profile' className="nav-link">Profile</NavLink>
        </div>
      </nav>
      
      <main className="main-content">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/profile' element={<Profile />} />
        </Routes>
      </main>
    </>
  )
}

export default App
