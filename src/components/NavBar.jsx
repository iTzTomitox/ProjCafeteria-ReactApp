import '../assets/css/NavBar.css'

const NavBar = () => {
    return (
        <nav className="nav-container">
            <div>
                <img className='logo' src="../logo.png" alt="" />
            </div>
            <div>
            <a className='nav-categories' href="">Cafes</a>
            <a className='nav-categories' href="">Metodos</a>
            <a className='nav-categories' href="">Accesorios</a>
            <a className='nav-categories' href="">Kits</a>
            </div>
            <div>

            </div>
        </nav>
    )
}

export default NavBar