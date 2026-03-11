import React from 'react';
import '../assets/css/NavBar.css';
import { Link } from 'react-router-dom';
import CartWidget from './CartWidget.jsx';
import { GiCoffeeBeans, GiCoffeePot } from "react-icons/gi";
import { SiBuymeacoffee } from "react-icons/si";

const NavBar = () => {
    return (
        <nav className="nav-container">
            <img className='logo' src="../logo.png" alt="" />
            <div className='nav-secciones'>
                <Link to="/">Home</Link>
                <div className="dropdown">
                    <Link to="/category/Capsula">Cafes</Link>
                    <div className="dropdown-content">
                        <Link to="/category/Granos"><GiCoffeeBeans />Granos</Link>
                        <Link to="/category/Molido"><GiCoffeePot />Molido</Link>
                        <Link to="/category/Capsula"><SiBuymeacoffee />Capsulas</Link>
                    </div>
                </div>
                <Link to="/metodos">Metodos</Link>
                <Link to="/accesorios">Accesorios</Link>
                <Link to="/kits">Kits</Link>
            </div>
            <div className='nav-cart'>
                <CartWidget />
            </div>
        </nav>
    );
};

export default NavBar;
