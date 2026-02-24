import {useState, useEffect} from "react";
import { getItem } from "../mock/asyncmock";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => { 
    const [detalle, setDetalle] = useState({})
    useEffect(()=>{
        getItem()
        .then((res)=> setDetalle(res))
        .catch((error)=> console.log(error, 'error'))
    },[])
    return(
        <div>
            <ItemDetail detalle={detalle}/>
        </div>
    )
}

export default ItemDetailContainer