import { IoCartOutline } from "react-icons/io5";
import '../App.css';
import { useContext } from "react";
import { CartContext } from "../context/CartContext";


const CartWidget = () => {
    const {cart, getCartQuantity} = useContext(CartContext);
    const cantidad = getCartQuantity();
    return (
        <div className="cart">
            <IoCartOutline />
            {cantidad > 0 && <span className="cart-count">{cantidad}</span>}
        </div>
    );
};

export default CartWidget;
