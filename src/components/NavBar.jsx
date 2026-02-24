import './CartWidget.jsx';
import CartWidget from './CartWidget.jsx';
import '../assets/css/NavBar.css';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav className="nav-container">
         <img className='logo' src="../logo.png" alt="" />
                        <div className='nav-secciones'>
                        <Link to="/">Home</Link>
                        <div className="dropdown">
                            <Link to="/category/Capsula">Cafes</Link>
                            <div className="dropdown-content">
                                <Link to="/category/Granos">Granos</Link>
                                <Link to="/category/Molido">Molido</Link>
                                <Link to="/category/Capsula">Capsulas</Link>
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
    )
}

        export default NavBar