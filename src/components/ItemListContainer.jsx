import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getProducts } from "../mock/asyncMock";
import ItemList from "./ItemList";
import Loader from "./Loader";

const ItemListContainer = (props) => {
    const { mensaje } = props;
    const { categoryId } = useParams();
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        setLoading(true)
        getProducts()
            .then((res) => {
                if (categoryId) {
                    const filtered = res.filter(
                        (p) =>
                            p.category &&
                            p.category.toLowerCase() === categoryId.toLowerCase()
                    );
                    setData(filtered);
                } else {
                    setData(res);
                }
            })
            .catch((error) => console.log(error, "error"))
            .finally(() => setLoading(false));
    }, [categoryId]);

    return (
        <>
        {
            loading ? <Loader text={categoryId ? 'Cargando Categoria' : 'Cargando Productos'}/> : <div>
            {mensaje && <h1>{mensaje}</h1>}
            <ItemList data={data} />
        </div>
        }
        </>
    );
};

export default ItemListContainer;
