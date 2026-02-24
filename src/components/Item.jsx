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
                <div className="item-meta">
                    <span className="item-price">${price},00</span>
                    <button>Ver mas</button>
                </div>
            </div>
        </div>
    )
}

export default Item