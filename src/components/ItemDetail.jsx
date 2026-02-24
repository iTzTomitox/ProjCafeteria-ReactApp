import React from "react";
import ItemCount from "./ItemCount";

const ItemDetail = ({detalle}) => {
    return(
        <div>
            <h1>Detalle de {detalle.name}</h1>
            <img src={detalle.img} alt={detalle.name} />
            <p>{detalle.descripcion}</p>
            <p>Precio: ${detalle.price},00</p>
            <p>Stock disponible: {detalle.stock} unidades</p>
            <ItemCount/>
        </div>
    )}

    export default ItemDetail