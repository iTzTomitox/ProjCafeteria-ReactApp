import React from "react";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";
import toast from 'react-hot-toast';
import '../assets/css/CartView.css';

const CartView = () => {
    const { cart, clearCart, removeFromCart, getCartTotal, updateQuantity } = useContext(CartContext);

    const handleRemove = (item) => {
        removeFromCart(item.id);
        toast.custom((t) => (
            <div style={{ backgroundColor: '#ff6b6b', color: 'white', padding: '12px 16px', borderRadius: '8px' }}>
                {item.name} eliminado del carrito
            </div>
        ));
    };

    const handleClearCart = () => {
        clearCart();
        toast.success('Carrito vaciado');
    };

    const handleIncreaseQuantity = (item) => {
        updateQuantity(item.id, item.quantity + 1);
    };

    const handleDecreaseQuantity = (item) => {
        if (item.quantity > 1) {
            updateQuantity(item.id, item.quantity - 1);
        } else {
            handleRemove(item);
        }
    };

    const shippingCost = 24;

    if (cart.length === 0) {
        return (
            <div className="empty-cart-container">
                <h2>Tu carrito está vacío</h2>
                <Link to="/" className="btn-back">Volver a la tienda</Link>
            </div>
        );
    }

    return (
        <div className="cart-container">
            <h1>Carrito de Compras</h1>
            <div className="cart-content">
                <div className="cart-items-table">
                    <div className="table-header">
                        <div className="col-item">Items</div>
                        <div className="col-price">Precio Unidad</div>
                        <div className="col-quantity">Cantidad</div>
                        <div className="col-final">Precio Final</div>
                        <div className="col-remove">Eliminar</div>
                    </div>
                    <div className="table-body">
                        {cart.map((item) => (
                            <div key={item.id} className="table-row">
                                <div className="col-item item-info">
                                    <img src={item.img} alt={item.name} className="item-image" />
                                    <span className="item-name">{item.name}</span>
                                </div>
                                <div className="col-price">${item.price}</div>
                                <div className="col-quantity">
                                    <button className="qty-btn" onClick={() => handleDecreaseQuantity(item)}>−</button>
                                    <span className="qty-value">{item.quantity}</span>
                                    <button className="qty-btn" onClick={() => handleIncreaseQuantity(item)}>+</button>
                                </div>
                                <div className="col-final">${item.price * item.quantity}</div>
                                <div className="col-remove">
                                    <button onClick={() => handleRemove(item)} className="remove-btn">✕</button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="cart-summary">
                    <h2>Resumen de Compra</h2>
                    <div className="summary-row">
                        <span>Subtotal</span>
                        <span className="price">${getCartTotal()}</span>
                    </div>
                    <div className="summary-row">
                        <span>Servicio de envío.</span>
                        <span className="price">${shippingCost}</span>
                    </div>
                    <div className="summary-divider"></div>
                    <div className="summary-total">
                        <span>Precio Total</span>
                        <span className="total-price">${getCartTotal() + shippingCost}</span>
                    </div>
                    <Link to="/checkout" className="btn-checkout">Proceder con Pago</Link>
                    <button onClick={handleClearCart} className="btn-clear-cart">Vaciar Carrito</button>
                </div>
            </div>
        </div>
    );
}

export default CartView;