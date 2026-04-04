import React from 'react'
import { useState } from 'react';
import { CartContext } from '../context/CartContext';
import { useContext } from 'react';
import { serverTimestamp } from 'firebase/firestore';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../service/firebase';
import { Link } from 'react-router-dom';
import EmptyCart from './EmptyCart';

const CheckOut = () => {
    const [buyer, setBuyer] = useState({});
    const [orderId, setOrderId] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const {cart, getCartTotal, clearCart} = useContext(CartContext);

    const buyerData = (e) => {
        setBuyer({
            ...buyer,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!buyer.nombre || !buyer.apellido || !buyer.email || !buyer.telefono || !buyer.direccion) {
            setError("Por favor complete todos los campos");
        } else {
            setError(null);
            setLoading(true);
            let order = {
            buyer: buyer,
            items: cart,
            total: getCartTotal(),
            fecha: serverTimestamp()
        }

        const orderColl = collection(db, 'orders');
            addDoc(orderColl, order)
            .then((res) => {
                setOrderId(res.id);
                clearCart();
                alert('Compra realizada con éxito, tu número de orden es: ' + res.id);
            })
            .catch((error) => console.log(error))
            .finally(() => setLoading(false));
        }
    }

    if (!cart.length && !orderId) {
        return <EmptyCart/>
    }

  return (
    <>
    {
        orderId ?
        <div>
            <h1>Gracias por tu compra</h1>
            <p>Tu número de orden es: {orderId}</p>
            <Link to="/">Volver a Home</Link>
        </div>
        :
            <div>
        <h1>Completa con tus datos</h1>
        {error && <span>{error}</span>}
    <form onSubmit={handleSubmit}>
        <input name='nombre' placeholder='Ingrese su nombre' type="text" onChange={buyerData} />
        <input name='apellido' placeholder='Ingrese su apellido'  type="text"onChange={buyerData}  />
        <input name='email' placeholder='Ingrese su email' type="email"onChange={buyerData} />
        <input name='telefono' placeholder='Ingrese su teléfono' type="number" onChange={buyerData} />
        <input name='direccion' placeholder='Ingrese su dirección' type="text" onChange={buyerData} />
        <button disabled={loading}>{loading ? 'Enviando...' : 'Enviar'}</button>
    </form>
    </div>
    }
    </>
  )
}

export default CheckOut;