import React from "react";
import { Link } from "react-router-dom";
import { IoCartOutline } from "react-icons/io5";
import '../assets/css/EmptyCart.css';

const EmptyCart = () => {
    return (
        <div className="empty-cart-container">
            <div className="empty-cart-icon">
                <IoCartOutline />
            </div>
            <h1 className="empty-cart-title">Tu carrito está vacío</h1>
            <p className="empty-cart-subtitle">
                Agrega algunos productos al carrito para continuar con tu compra
            </p>
            <div className="empty-cart-actions">
                <Link to="/" className="btn-return-home">Volver a Comprar</Link>
            </div>
        </div>
    );
}

export default EmptyCart; 