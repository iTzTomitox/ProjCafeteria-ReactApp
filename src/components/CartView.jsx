import React from "react";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const CartView = () => {
    const {cart, clearCart, removeItem} = useContext(CartContext);
    return (
        <div>
            <h1>Carrito</h1>
            <div>
                {cart.map((item) => (
                    <div key={item.id}>
                        <h2>{item.name}</h2>
                        <img src={item.image} alt={item.name} />
                        <p>Cantidad: {item.quantity}</p>
                        <p>Precio: ${item.price}</p>
                        <span>total: ${item.price * item.quantity}</span>
                        <button onClick={() => removeItem(item.id)}>Eliminar</button>
                    </div>
                ))}
            </div>
            <div>
                <span>Total a Pagar: ${cart.reduce((total, item) => total + item.price * item.quantity, 0)}</span>
                <div>
                <button onClick={clearCart}>Vaciar Carrito</button>
                <button>Terminar Compra</button>
                </div>
            </div>
        </div>
    );
}

export default CartView;