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
import toast from 'react-hot-toast';
import '../assets/css/CheckOut.css';


const CheckOut = () => {
    const [loading, setLoading] = useState(false);
    const { cart, getCartTotal, clearCart } = useContext(CartContext);
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [orderId, setOrderId] = useState('');

    const onSubmit = (data) => {
        setLoading(true);
        let orden = {
            buyer: data,
            carrito: cart,
            total: getCartTotal(),
            fecha: serverTimestamp()
        }

        const orderColl = collection(db, 'orders')
        addDoc(orderColl, orden)
            .then((res) => {
                setOrderId(res.id);
                toast.success(`¡Compra realizada! Orden: ${res.id}`);
                clearCart();
            })
            .catch((err) => {
                console.log(err);
                toast.error(`Error: ${err.message}`);
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
                    <div className="order-success">
                        <h1>¡Gracias por tu compra!</h1>
                        <p className="order-id">Tu número de orden: <strong>{orderId}</strong></p>
                        <Link to="/" className="btn-back-home">Volver a la tienda</Link>
                    </div>
                    :
                    <div className="checkout-container">
                        <h1>Información de Envío</h1>
                        <div className="checkout-content">
                            <div className="shipping-section">
                                <h2>Dirección de Envío</h2>
                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <div className="form-group">
                                        <label>Nombre</label>
                                        <input 
                                            name='nombre' 
                                            type="text" 
                                            placeholder='Nombre y Apellido'
                                            {...register('nombre', { required: true, minLength: 3 })} 
                                        />
                                        {errors?.nombre && <div className="form-error">Se requiere un nombre válido</div>}
                                    </div>

                                    <div className="form-group">
                                        <label>Dirección 1</label>
                                        <input 
                                            name='direccion' 
                                            type="text" 
                                            placeholder='Calle y número'
                                            {...register('direccion', { required: true, minLength: 5 })} 
                                        />
                                        {errors?.direccion && <div className="form-error">Dirección requerida</div>}
                                    </div>

                                    <div className="form-group">
                                        <label>Dirección 2</label>
                                        <input 
                                            name='direccion2' 
                                            type="text" 
                                            placeholder='Apartamento, suite, etc.'
                                            {...register('direccion2')} 
                                        />
                                    </div>

                                    <div className="form-row three-cols">
                                        <div className="form-group">
                                            <label>Ciudad</label>
                                            <input 
                                                name='ciudad' 
                                                type="text" 
                                                placeholder='Ciudad'
                                                {...register('ciudad', { required: true })} 
                                            />
                                            {errors?.ciudad && <div className="form-error">Requerido</div>}
                                        </div>

                                        <div className="form-group">
                                            <label>Provincia</label>
                                            <input 
                                                name='provincia' 
                                                type="text" 
                                                placeholder='Provincia'
                                                {...register('provincia', { required: true })} 
                                            />
                                            {errors?.provincia && <div className="form-error">Requerido</div>}
                                        </div>

                                        <div className="form-group">
                                            <label>Código Postal</label>
                                            <input 
                                                name='codigopostal' 
                                                type="text" 
                                                placeholder='Código postal'
                                                {...register('codigopostal', { required: true })} 
                                            />
                                            {errors?.codigopostal && <div className="form-error">Requerido</div>}
                                        </div>
                                    </div>

                                    <div className="form-row">
                                        <div className="form-group">
                                            <label>Email</label>
                                            <input 
                                                name='email' 
                                                type="email" 
                                                placeholder='tu@email.com'
                                                {...register('email', { required: true })} 
                                            />
                                            {errors?.email && <div className="form-error">Email válido requerido</div>}
                                        </div>

                                        <div className="form-group">
                                            <label>Teléfono</label>
                                            <input 
                                                name='telefono' 
                                                type="tel" 
                                                placeholder='Tu teléfono'
                                                {...register('telefono', { required: true })} 
                                            />
                                            {errors?.telefono && <div className="form-error">Teléfono requerido</div>}
                                        </div>
                                    </div>
                                </form>
                            </div>

                            <div className="order-summary">
                                <h2>Resumen de Pedido</h2>
                                <div className="order-items">
                                    {cart.map((item) => (
                                        <div key={item.id} className="order-item">
                                            <img src={item.img} alt={item.name} className="order-item-image" />
                                            <div className="order-item-details">
                                                <div className="order-item-name">{item.name}</div>
                                                <div className="order-item-description">Premium quality, ethically sourced.</div>
                                                <div className="order-item-qty">Cantidad: {item.quantity}</div>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                <div className="summary-line">
                                    <span>Subtotal</span>
                                    <span>${getCartTotal()}</span>
                                </div>
                                <div className="summary-line">
                                    <span>Envío</span>
                                    <span>$5.00</span>
                                </div>
                                <div className="summary-line">
                                    <span>Impuestos</span>
                                    <span>${(getCartTotal() * 0.08).toFixed(2)}</span>
                                </div>
                                <div className="summary-divider"></div>
                                <div className="summary-total">
                                    <span>Total</span>
                                    <span>${(getCartTotal() + 5 + (getCartTotal() * 0.08)).toFixed(2)}</span>
                                </div>
                                <button 
                                    type="submit" 
                                    className="btn-place-order" 
                                    disabled={loading}
                                    onClick={handleSubmit(onSubmit)}
                                >
                                    {loading ? 'Procesando Pago...' : 'Proceder al Pago'}
                                </button>
                            </div>
                        </div>
                    </div>
            }
        </>
    )
}

export default CheckOut;