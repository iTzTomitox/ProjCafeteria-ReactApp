import React from "react";
import '../assets/css/Item.css';
import ItemCount from "./ItemCount";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";
import { useState } from "react";
import toast from 'react-hot-toast';

const ItemDetail = ({ product }) => {
  const [purchaseQty, setPurchaseQty] = useState(false);
  const { cart, addToCart } = useContext(CartContext);
  const { name, descripcion, price, stock, img, category } = product;

  const handleAddToCart = (qty) => {
    addToCart(product, qty);
    toast.success(`${qty} ${name} agregado al carrito`);
    setPurchaseQty(true);
  };

  return (
    <div className="item-detail" style={{padding:16}}>
      <div style={{display:'flex',gap:24,alignItems:'flex-start'}}>
        <div style={{width:320}}>
          {img ? <img src={img} alt={name} style={{width:'100%',borderRadius:8}} /> : <div className="placeholder">No Image</div>}
        </div>
        <div style={{flex:1}}>
          <h2>{name}</h2>
          <p>{descripcion}</p>
          <p><strong>Categoria:</strong> {category}</p>
          <p><strong>Precio:</strong> ${price}</p>
          <p><strong>Stock:</strong> {stock}</p>

          { purchaseQty ? <Link to="/cart">Ver Carrito</Link> : <ItemCount stock={stock} initial={1} onAdd={handleAddToCart} /> }
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
