import React from 'react';
import "./Header.css";

import logo from "../../images/logo.png";
import {  NavLink } from 'react-router-dom';
import UseAuth from '../../Hooks/UseAuth';
// import userEvent from '@testing-library/user-event';

const Header = () => {
const {user,logOut}=UseAuth();
    return (
        <div className="header">
            <img className="logo" src={logo} alt="" />

            <nav>
                <NavLink to="/shop">Shop</NavLink>
                <NavLink to="/review">Order Review</NavLink>
                <NavLink to="/inventory">Manage Inventory</NavLink>
                <NavLink to="/shipping">Shipping</NavLink>
                {user.email?
                <button onClick={logOut} className="btn btn-secondary">Log Out</button>
                
                            :
                <NavLink to="/login">Login</NavLink>


                }
                {
                    user.email && <span className="text-white ms-3">{user.displayName}</span>
                }
            </nav>

        </div>
    );
};

export default Header;