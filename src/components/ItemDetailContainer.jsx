import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { getProductById } from "../mock/asyncMock";
import ItemDetail from "./ItemDetail";
import Loader from "./Loader";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../service/firebase";

const ItemDetailContainer = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [notExist, setNotExist] = useState(null);


  useEffect(() => {
    const docRef = doc(db, "productos", id);
    getDoc(docRef)
      .then((res) => {
        if (res.exists()) {
          setProduct({ id: res.id, ...res.data() });
        } else {
          setNotExist(true);
        }
      })
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  }, [id]);

if (notExist) {
  return (
    <div>  
    <h2>El Producto no existe</h2>  
    <Link to="/">Volver a Home</Link>
    </div>
  )
}

  
  return (
    <>
      {loading ? (
        <Loader text={product?.name ? "Cargando Producto" : "Cargando..."} />
      ) : (
        <div>
          <ItemDetail product={product} />
        </div>
      )}
    </>
  );
};

export default ItemDetailContainer;
