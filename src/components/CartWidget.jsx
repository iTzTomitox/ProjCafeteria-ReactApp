import { IoCartOutline } from "react-icons/io5";
import '../App.css';

const CartWidget = () => {
    const mensaje = "8";
    return (
        <div className="cart">
            <IoCartOutline />
            <span className="cart-count">{mensaje}</span>
        </div>
    );
};

export default CartWidget;
