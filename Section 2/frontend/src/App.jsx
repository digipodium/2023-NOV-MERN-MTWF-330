import React from 'react'
import './App.css';
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import Notfound from './components/Notfound';
import EventHandling from './components/EventHandling';
import StateManagement from './components/StateManagement';
import Todo from './components/Todo';
import BrowseProduct from './components/BrowseProduct';
import { SnackbarProvider } from 'notistack';
import Manageuser from './components/Manageuser';
import UpdateUser from './components/UpdateUser';
import { AppProvider } from './AppContext';

const App = () => {

  return (
    <div>
      <SnackbarProvider maxSnack={3} anchorOrigin={{ vertical: 'top', horizontal: 'right' }} >
        <BrowserRouter>
          <AppProvider>
            {/* <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
        <Link to="/signup">Signup</Link> */}

            <Navbar />

            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='login' element={<Login />} />
              <Route path='signup' element={<Signup />} />
              <Route path='contact' element={<Contact />} />
              <Route path='event' element={<EventHandling />} />
              <Route path='state' element={<StateManagement />} />
              <Route path='todo' element={<Todo />} />
              <Route path='browse' element={<BrowseProduct />} />
              <Route path='manageuser' element={<Manageuser />} />
              <Route path='updateuser/:id' element={<UpdateUser />} />
              <Route path='*' element={<Notfound />} />
            </Routes>
          </AppProvider>
        </BrowserRouter>
      </SnackbarProvider>
    </div>
  )
}

export default App;