import React from 'react';
import '../assets/css/NavBar.css';
import { NavLink } from 'react-router-dom';
import CartWidget from './CartWidget.jsx';
import { GiCoffeeBeans, GiCoffeePot } from "react-icons/gi";
import { SiBuymeacoffee } from "react-icons/si";

const NavBar = () => {
    return (
        <nav className="nav-container">
            <img className='logo' src="../logo.png" alt="" />
            <div className='nav-secciones'>
                <NavLink to="/">Home</NavLink>
                <div className="dropdown">
                    <NavLink to="/category/Capsula">Cafes</NavLink>
                    <div className="dropdown-content">
                        <NavLink to="/category/Granos"><GiCoffeeBeans />Granos</NavLink>
                        <NavLink to="/category/Molido"><GiCoffeePot />Molido</NavLink>
                        <NavLink to="/category/Capsula"><SiBuymeacoffee />Capsulas</NavLink>
                    </div>
                </div>
                <NavLink to="/metodos">Metodos</NavLink>
                <NavLink to="/accesorios">Accesorios</NavLink>
                <NavLink to="/kits">Kits</NavLink>
            </div>
            <div className='nav-cart'>
                <CartWidget />
            </div>
        </nav>
    );
};

export default NavBar;
