import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getProducts } from "../mock/asyncMock";
import ItemList from "./ItemList";
import Loader from "./Loader";
import { addDoc, collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../service/firebase";

const ItemListContainer = (props) => {
    const { mensaje } = props;
    const { categoryId } = useParams();
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        setLoading(true)
        const prodColl = categoryId ? query(collection(db, 'productos'), where('category', '==', categoryId)) : collection(db, 'productos');
        getDocs(prodColl)
            .then((res) => {
                const list = res.docs.map((doc) => {
                    return { id: doc.id, ...doc.data() };
                });
                setData(list);
            })
            .catch ((error) => console.log(error, "error"))
            .finally(() => setLoading(false));
    }, [categoryId]);

return (
    <>
        {
            loading ? <Loader text={categoryId ? 'Cargando Categoria' : 'Cargando Productos'} /> : <div>
                {mensaje && <h1>{mensaje}</h1>}
                <ItemList data={data} />
            </div>
        }
    </>
);
};

export default ItemListContainer;
