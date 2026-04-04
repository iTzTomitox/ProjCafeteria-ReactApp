import React from "react";
import { Link } from "react-router-dom";
import '../assets/css/Item.css';

const Item = ({prod}) => {
    const { name, price, img, id } = prod;
    return(
        <div className="item-card">
            <Link to={`/item/${id}`}>
                <div className="item-img">
                    {img ? <img src={img} alt={name} /> : <div className="placeholder">Sin imagen</div>}
                </div>
                <div className="item-body">
                    <h3 className="item-title">{name}</h3>
                    <div className="item-meta">
                        <span className="item-price">${price}</span>
                        <button className="item-button">VER MÁS</button>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default Item