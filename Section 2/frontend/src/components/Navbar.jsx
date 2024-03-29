import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import useAppContext from '../AppContext'

const Navbar = () => {

    const { loggedIn, logout } = useAppContext();

    const showLoginOptions = () => {
        if (loggedIn) {
            return (
                <li className='nav-item'>
                    <button onClick={logout} className='btn btn-danger'>Logout</button>
                </li>
            )
        } else {
            return <>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/signup">
                        Signup
                    </NavLink>
                </li>

                <li className="nav-item">
                    <NavLink className="nav-link" to="/login">
                        Login
                    </NavLink>
                </li>
            </>
        }
    }

    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">
                    Navbar
                </a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/">
                                Home
                            </NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink className="nav-link" to="/event">
                                Event Handling
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/state">
                                State Management
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/todo">
                                Todo
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/browse">
                                Browse Product
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/manageuser">
                                Manage User
                            </NavLink>
                        </li>
                    </ul>
                    <ul className='navbar-nav ms-auto mb-2 mb-lg-0'>
                        {showLoginOptions()}
                    </ul>

                </div>
            </div>
        </nav>

    )
}

export default Navbar