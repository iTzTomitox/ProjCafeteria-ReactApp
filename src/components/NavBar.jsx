<<<<<<< HEAD
import '../assets/css/NavBar.css'
import CartWidget from './CartWidget.jsx'
=======
import './CartWidget.jsx';
import CartWidget from './CartWidget.jsx';
import '../assets/css/NavBar.css';
import { Link } from 'react-router-dom';
import { GiCoffeeBeans } from "react-icons/gi";
import { GiCoffeePot } from "react-icons/gi";
import { SiBuymeacoffee } from "react-icons/si";
>>>>>>> 3007cb80d91d77181b7c9c675964b147a4c3a611

const NavBar = () => {
    return (
        <nav className="nav-container">
<<<<<<< HEAD
            <div className='nav-left'>
                <img className='logo' src="../logo.png" alt="" />
                <a className='nav-categories' href="">Cafes</a>
                <a className='nav-categories' href="">Metodos</a>
                <a className='nav-categories' href="">Accesorios</a>
                <a className='nav-categories' href="">Kits</a>
                </div>
            <div>
                <CartWidget />
=======
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
>>>>>>> 3007cb80d91d77181b7c9c675964b147a4c3a611
            </div>
        </nav>
    )
}

<<<<<<< HEAD
export default NavBar
=======
        export default NavBar
>>>>>>> 3007cb80d91d77181b7c9c675964b147a4c3a611
