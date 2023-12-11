import React from 'react'
import './App.css';
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Contact from './components/Contact';
import Navbar from './components/Navbar';

const App = () => {
  
  return (
    <div>
      <BrowserRouter>

        {/* <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
        <Link to="/signup">Signup</Link> */}

        <Navbar />

        <Routes>
            <Route path='/' element={ <Home /> } />
            <Route path='login' element={ <Login /> } />
            <Route path='signup' element={ <Signup /> } />
            <Route path='contact' element={ <Contact /> } />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;