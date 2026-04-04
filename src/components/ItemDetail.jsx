import React from "react";
import '../assets/css/ItemDetail.css';
import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";
import toast from 'react-hot-toast';

const ItemDetail = ({ product }) => {
  const [qty, setQty] = useState(1);
  const [purchaseQty, setPurchaseQty] = useState(false);
  const { addToCart } = useContext(CartContext);
  const { id, name, descripcion, price, stock, img, category } = product;

  const handleAddToCart = () => {
    if (qty > 0 && qty <= stock) {
      addToCart(product, qty);
      toast.success(`${qty} ${name} agregado al carrito`);
      setPurchaseQty(true);
    }
  };

  const handleIncrement = () => {
    if (qty < stock) {
      setQty(qty + 1);
    }
  };

  const handleDecrement = () => {
    if (qty > 1) {
      setQty(qty - 1);
    }
  };

  const getStockStatus = () => {
    if (stock === 0) return { label: 'Agotado', class: 'stock-out' };
    if (stock < 10) return { label: `Solo ${stock} disponibles`, class: 'stock-low' };
    return { label: 'En stock', class: 'stock-available' };
  };

  const stockStatus = getStockStatus();

  return (
    <div className="item-detail-container">
      <div className="item-detail">
        {/* Imagen del Producto */}
        <div className="item-image-section">
          <div className="item-image-wrapper">
            {img ? (
              <img src={img} alt={name} />
            ) : (
              <div className="item-placeholder">Sin imagen disponible</div>
            )}
          </div>
        </div>

        {/* Detalles del Producto */}
        <div className="item-details-section">
          <div className="item-category">{category}</div>
          
          <h1 className="item-title-card">{name}</h1>
          
          <p className="item-description">{descripcion}</p>

          <div className="item-info-group">
            <div className="info-row price-section">
              <span className="info-label">Precio</span>
              <span className="info-value">${price}</span>
            </div>

            <div className="info-row">
              <span className="info-label">Disponibilidad</span>
              <div className="stock-status">
                <div className={`stock-indicator ${stock === 0 ? 'out' : stock < 10 ? 'low' : 'in-stock'}`}></div>
                <span className={stockStatus.class}>{stockStatus.label}</span>
              </div>
            </div>
          </div>

          {!purchaseQty ? (
            <>
              <div className="quantity-section">
                <h3>Cantidad</h3>
                <div className="quantity-selector">
                  <button 
                    className="qty-button" 
                    onClick={handleDecrement}
                    disabled={qty <= 1}
                  >
                    −
                  </button>
                  <div className="qty-display">{qty}</div>
                  <button 
                    className="qty-button" 
                    onClick={handleIncrement}
                    disabled={qty >= stock}
                  >
                    +
                  </button>
                </div>
              </div>

              <div className="item-actions">
                <button 
                  className="btn-add-to-cart"
                  onClick={handleAddToCart}
                  disabled={stock === 0}
                >
                  {stock === 0 ? 'Agotado' : 'Agregar al Carrito'}
                </button>
              </div>
            </>
          ) : (
            <div className="item-actions">
              <Link to="/cart" className="btn-view-cart">Ver Carrito</Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
