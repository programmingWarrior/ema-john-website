import React from 'react';
import logo from '../images/logo.png';
import './header.css';

const Header = () => {
    return (
    <div className="header">

        <div className="img">
            <img src={logo} alt=""/>
        </div>

       
            <nav>
                <a href="/shop">Shop</a>
                <a href="/order">Order Review</a>
                <a href="/manage">Manage Inventory here</a>
            </nav>
            
       

     </div>  
    )
};

export default Header;