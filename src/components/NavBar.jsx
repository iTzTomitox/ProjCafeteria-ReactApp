import './CartWidget.jsx';
import CartWidget from './CartWidget.jsx';
import '../assets/css/NavBar.css';

const NavBar = () => {
    return (
        <nav className="nav-container">
         <img className='logo' src="../logo.png" alt="" />
                        <div className='nav-secciones'>
                        <a href="">Home</a>
                        <div className="dropdown">
                            <a href="">Cafes</a>
                            <div className="dropdown-content">
                                <a href="/cafes/origen">Granos</a>
                                <a href="/cafes/mezclas">Molido</a>
                                <a href="/cafes/especiales">Capsulas</a>
                            </div>
                        </div>
                        <a href="">Metodos</a>
                        <a href="">Accesorios</a>
                        <a href="">Kits</a>
                        </div>
            <div className='nav-cart'>
            <CartWidget />
            </div>
        </nav>
    )
}

        export default NavBar