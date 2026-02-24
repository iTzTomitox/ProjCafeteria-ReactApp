import React from "react";
import { Link } from "react-router-dom";

const Item = ({prod}) => {
    const { name, descripcion, price, stock, img } = prod;
    return(
        <div className="item-card">
            <Link to={`/item/${prod.id}`} style={{textDecoration:'none',color:'inherit'}}>
              <div className="item-img">
                  {img ? <img src={img} alt={name} /> : <div className="placeholder">No Image</div>}
              </div>
              <div className="item-body">
                  <h3 className="item-title">{name}</h3>
                  <p className="item-desc">{descripcion}</p>
                  <div className="item-meta">
                      <span className="item-price">${price},00</span>
                      <button>Ver mas</button>
                  </div>
              </div>
            </Link>
        </div>
    )
}

export default Item