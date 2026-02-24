import React, { useState } from "react";
import '../assets/css/Item.css';

const ItemDetail = ({ product }) => {
  const { name, descripcion, price, stock, img, category } = product;
  const [qty, setQty] = useState(1);

  const increase = () => setQty((q) => Math.min(q + 1, stock));
  const decrease = () => setQty((q) => Math.max(1, q - 1));

  const addToCart = () => {
    console.log(`Agregar ${qty} unidades de ${name} al carrito`);
    alert(`Agregar ${qty} unidades de ${name} (simulado)`);
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

          <div style={{display:'flex',alignItems:'center',gap:8,marginTop:12}}>
            <button onClick={decrease}>-</button>
            <span>{qty}</span>
            <button onClick={increase}>+</button>
            <button onClick={addToCart} style={{marginLeft:12}}>Agregar al carrito</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
