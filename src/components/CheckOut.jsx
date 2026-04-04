import React from 'react'
import { useState } from 'react';
import { CartContext } from '../context/CartContext';
import { useContext } from 'react';
import { serverTimestamp } from 'firebase/firestore';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../service/firebase';
import { Link } from 'react-router-dom';
import EmptyCart from './EmptyCart';
import { useForm } from 'react-hook-form';


const CheckOut = () => {
    const [loading, setLoading] = useState(false);
    const { cart, getCartTotal, clearCart } = useContext(CartContext);
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [orderId, setOrderId] = useState('');

    const onSubmit = (data) => {

        const {nombre, apellido, email, telefono, direccion} = data;
        setLoading(true);
        let orden = {
            buyer: {
                nombre: nombre,
                apellido: apellido,
                email: email,
                telefono: telefono,
                direccion: direccion
            },
            carrito: cart,
            total: getCartTotal(),
            date: serverTimestamp()
        }

        const orderColl = collection(db, 'orders')
        addDoc(orderColl, orden)
            .then((res) => {
                setOrderId(res.id);
                alert('Compra realizada con éxito, tu número de orden es: ' + res.id);
                clearCart();
            })
            .catch((err) => {
                console.log(err);
                alert('Error al procesar la compra: ' + err.message);
            })
            .finally(() => {
                setLoading(false);
            });
    }


    if (!cart.length && !orderId) {
        return <EmptyCart />
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
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div>
                                <input 
                                    name='nombre' 
                                    placeholder='Ingrese su nombre' 
                                    type="text" 
                                    {...register('nombre', { required: true, minLength: 3 })} 
                                    className="form-control"
                                />
                                {errors?.nombre?.type === 'required' && <small style={{ color: 'red' }}>Por favor complete el campo</small>}
                                {errors?.nombre?.type === 'minLength' && <small style={{ color: 'red' }}>El campo debe contener mínimo 3 caracteres</small>}
                            </div>

                            <div>
                                <input 
                                    name='apellido' 
                                    placeholder='Ingrese su apellido' 
                                    type="text" 
                                    {...register('apellido', { required: true, minLength: 2 })} 
                                    className="form-control"
                                />
                                {errors?.apellido?.type === 'required' && <small style={{ color: 'red' }}>Por favor complete el campo</small>}
                                {errors?.apellido?.type === 'minLength' && <small style={{ color: 'red' }}>El campo debe contener mínimo 2 caracteres</small>}
                            </div>

                            <div>
                                <input 
                                    name='email' 
                                    placeholder='Ingrese su correo' 
                                    type="email" 
                                    {...register('email', { required: true })} 
                                    className="form-control"
                                />
                                {errors?.email?.type === 'required' && <small style={{ color: 'red' }}>Por favor complete el campo</small>}
                            </div>

                            <div>
                                <input 
                                    name='telefono' 
                                    placeholder='Ingrese su teléfono' 
                                    type="number" 
                                    {...register('telefono', { required: true, minLength: 10})} 
                                    className="form-control"
                                />
                            </div>

                            <div>
                                <input 
                                    name='direccion' 
                                    placeholder='Ingrese su dirección' 
                                    type="text" 
                                    {...register('direccion', { required: true, minLength: 10, maxLength: 35 })} 
                                    className="form-control"
                                />
                                {errors?.direccion?.type === 'required' && <small style={{ color: 'red' }}>Por favor complete el campo</small>}
                                {errors?.direccion?.type === 'minLength' && <small style={{ color: 'red' }}>La dirección debe contener mínimo 10 caracteres</small>}
                                {errors?.direccion?.type === 'maxLength' && <small style={{ color: 'red' }}>La dirección no debe superar 35 caracteres</small>}
                            </div>

                            <button type="submit" className="btn btn-success" disabled={loading}>{loading ? 'Procesando la orden' : 'Generar Orden'}</button>
                        </form>
                    </div>
            }
        </>
    )
}

export default CheckOut;