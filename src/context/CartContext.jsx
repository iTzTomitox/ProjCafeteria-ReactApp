import { createContext, useEffect } from 'react';
import { useState } from 'react';

export const CartContext = createContext()
export const CartProvider = ({children}) => {

    const carritoLS = JSON.parse(localStorage.getItem('cart')) || [];

    const [cart, setCart] = useState([])

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart));
    }, [cart]);

    const addToCart = (product, qty) => {
        if(IsInCart(product.id)){
            const updatedCart = cart.map(item => {
                if(item.id === product.id){
                    return {...item, quantity: item.quantity + qty}
                }
                return item
            })
            setCart(updatedCart)
            return
        }
        setCart([...cart, {...product, quantity:qty}])
    }   

    const removeFromCart = (productId) => {
        setCart(cart.filter(item => item.id !== productId))
    }

    const updateQuantity = (productId, newQuantity) => {
        if (newQuantity <= 0) {
            removeFromCart(productId);
            return;
        }
        const updatedCart = cart.map(item => {
            if (item.id === productId) {
                return {...item, quantity: newQuantity}
            }
            return item
        });
        setCart(updatedCart);
    }

    const clearCart = () => {
        setCart([])
    }

    const IsInCart = (productId) => {
        return cart.some(item => item.id === productId)
    }

    const getCartQuantity = () => {
        return cart.reduce((total, item) => total + item.quantity, 0)
    }

    const getCartTotal = () => {
        return cart.reduce((total, item) => total + item.price * item.quantity, 0)
    }

    return (
        <CartContext.Provider value={{cart, addToCart, removeFromCart, clearCart, getCartQuantity, getCartTotal, updateQuantity}}>
            {children}
        </CartContext.Provider>
    )
}