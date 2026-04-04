import React from "react";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

const CartView = () => {
    const {cart, clearCart, removeFromCart, getCartTotal} = useContext(CartContext);
    return (
        <div>
            <h1>Carrito</h1>
            <div>
                {cart.map((item) => (
                    <div key={item.id}>
                        <h2>{item.name}</h2>
                        <img src={item.img} alt={item.name} />
                        <p>Cantidad: {item.quantity}</p>
                        <p>Precio: ${item.price}</p>
                        <span>total: ${item.price * item.quantity}</span>
                        <button onClick={() => removeFromCart(item.id)}>Eliminar</button>
                    </div>
                ))}
            </div>
            <div>
                <span>Total a Pagar: ${getCartTotal()},00</span>
                <div>
                <button onClick={clearCart}>Vaciar Carrito</button>
                <Link to="/checkout">Terminar Compra</Link>
                </div>
            </div>
        </div>
    );
}

export default CartView;