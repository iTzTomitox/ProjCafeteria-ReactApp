import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getProductById } from "../mock/asyncMock";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    getProductById(id)
      .then((res) => setProduct(res))
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) return <div>Cargando...</div>;
  if (error) return <div>Error: {String(error)}</div>;

  return <ItemDetail product={product} />;
};

export default ItemDetailContainer;
