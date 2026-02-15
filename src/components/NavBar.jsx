import '../assets/css/NavBar.css'
import CartWidget from './CartWidget.jsx'

const NavBar = () => {
    return (
        <nav className="nav-container">
            <div className='nav-left'>
                <img className='logo' src="../logo.png" alt="" />
                <a className='nav-categories' href="">Cafes</a>
                <a className='nav-categories' href="">Metodos</a>
                <a className='nav-categories' href="">Accesorios</a>
                <a className='nav-categories' href="">Kits</a>
                </div>
            <div>
                <CartWidget />
            </div>
        </nav>
    )
}

export default NavBar