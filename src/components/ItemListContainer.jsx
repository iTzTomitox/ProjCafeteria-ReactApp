import { useState,useEffect } from "react"
import { useParams } from "react-router-dom"
import { getProducts } from "../mock/asyncmock"
import ItemList from "./ItemList"

const ItemListContainer = (props) => {
    const { mensaje } = props
    const { categoryId } = useParams()
    const [data, setData]= useState([])

    useEffect(()=>{
        getProducts()
        .then((res)=>{
            if(categoryId){
                const filtered = res.filter(p=> p.category && p.category.toLowerCase() === categoryId.toLowerCase())
                setData(filtered)
            } else {
                setData(res)
            }
        })
        .catch((error)=> console.log(error, 'error'))
    },[categoryId])

    return (
        <div>
            {mensaje && <h1>{mensaje}</h1>}
            <ItemList data={data} />
        </div>
    )
}

export default ItemListContainer