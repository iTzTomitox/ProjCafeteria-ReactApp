import { useState,useEffect } from "react"
import { getProducts } from "../mock/asyncmock"
import ItemList from "./ItemList"

const ItemListContainer = (props) => {
    const {mensaje}=props
    const [data, setData]= useState([])

    useEffect(()=>{
        getProducts()
        .then((res)=> setData(res))
        .catch((error)=> console.log(error, 'error'))
    },[])
    return (
        <div>
            <h1>{mensaje}</h1>
            <ItemList data={data} />
        </div>
    )
}

export default ItemListContainer