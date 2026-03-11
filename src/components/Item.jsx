import React from "react";
import { Link } from "react-router-dom";
import { SiCoffeescript } from "react-icons/si";


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
                  <div className="item-meta">
                      <span className="item-price">${price},00</span>
                      
                      <button className="item-button"><SiCoffeescript />Ver mas</button>
                      
                  </div>
              </div>
            </Link>
        </div>
    )
}

export default Item