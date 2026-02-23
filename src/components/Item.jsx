import React from "react";

const Item = ({prod}) => {
    const { name, descripcion, price, stock, img } = prod;
    return(
        <div className="item-card">
            <div className="item-img">
                {img ? <img src={img} alt={name} /> : <div className="placeholder">No Image</div>}
            </div>
            <div className="item-body">
                <h3 className="item-title">{name}</h3>
                <p className="item-desc">{descripcion}</p>
                <div className="item-meta">
                    <span className="item-price">${price}</span>
                    <span className="item-stock">{stock} en stock</span>
                </div>
            </div>
        </div>
    )
}

export default Item