import { IoIosCart } from "react-icons/io";
import '../assets/css/CartWidget.css'

const CartWidget = () => {
    return (
        <div>
            <span className="icon-cart"><IoIosCart /></span>
            <span>0</span>
        </div>
    )
}

export default CartWidget;