import React from 'react';
import logo from '../../assets/logo.png'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import "./Header.css"

const Header = () => {
    return (
        <header>
        <img src={logo} alt="logo"/>
        <h1>SportApp</h1>
        <nav>
            <a href=''>INICIO </a>
            <a href=''>PRODUCTOS </a>
        </nav>
        <ShoppingCartIcon fontSize="large"  />
        </header>
    )
}

export default Header