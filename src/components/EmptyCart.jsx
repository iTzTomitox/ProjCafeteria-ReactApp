import React from "react";
import { Link } from "react-router-dom";

const EmptyCart = () => {
    return (
        <div>
            <h1>Tu carrito esta vacio</h1>
            <h2>Agrega algunos productos al carrito</h2>
            <Link to="/"> Volver a Home</Link>
        </div>
    );
}

export default EmptyCart; 