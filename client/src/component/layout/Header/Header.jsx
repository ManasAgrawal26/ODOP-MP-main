// src/Navbar.js
import React, { useContext } from 'react';
import './Header.css';
import cart_icon from '../Assets/cart_icon.png'
import { Link } from 'react-router-dom';
import { ShopContext } from '../../../Context/ShopContext';
import odoplogo from '../Assets/Odoplogo.jpg'
const Navbar = () => {
    const { getTotalCartItems } = useContext(ShopContext);
    return (
        <body>
            <nav className="navbar1">
                <div className="logo">
                    <Link to='/'> <img src={odoplogo} alt="Odop Logo"></img></Link>
                </div>
 


                <div className="nav-links">
                    {localStorage.getItem('auth-token')
                        ? <button className='logout-button' onClick={() => { localStorage.removeItem('auth-token'); window.location.replace('/') }}>Logout</button>
                        : <Link to='/login'><button className='logout-button'>Login</button></Link>}


                    <Link to='/cart'><img src={cart_icon} alt="" /></Link>
                    <div class="nav-cart-count">{getTotalCartItems()}</div> 
                </div>
            </nav>


        </body>

    );
}

export default Navbar;
