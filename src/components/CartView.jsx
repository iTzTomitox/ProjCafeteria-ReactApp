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
                        <p>Cantidad: {item.quantity}</p>
                        <p>Precio: ${item.price}</p>
                        <button onClick={() => removeItem(item.id)}>Eliminar</button>
                    </div>
                ))}
            </div>
            <div>
                <button onClick={clearCart}>Vaciar Carrito</button>
            </div>
        </div>
    );
}

export default CartView;