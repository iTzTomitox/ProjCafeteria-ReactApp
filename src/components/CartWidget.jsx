<<<<<<< HEAD
import { IoIosCart } from "react-icons/io";
import '../assets/css/CartWidget.css'

const CartWidget = () => {
    return (
        <div>
            <span className="icon-cart"><IoIosCart /></span>
            <span>0</span>
=======
import { IoCartOutline } from "react-icons/io5";
import '../App.css';

const CartWidget = () => {
    const mensaje = "8";
    return (
        <div className="cart">
            <IoCartOutline />
            <span className="cart-count">{mensaje}</span>
>>>>>>> 3007cb80d91d77181b7c9c675964b147a4c3a611
        </div>
    )
}

<<<<<<< HEAD
export default CartWidget;
=======
export default CartWidget
>>>>>>> 3007cb80d91d77181b7c9c675964b147a4c3a611
