import { createContext } from 'react';
import { useState } from 'react';

export const CartContext = createContext()
export const CartProvider = ({children}) => {

    const [cart, setCart] = useState([])

    const addToCart = (product) => {
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
        <CartContext.Provider value={{cart, addToCart, removeFromCart, clearCart}}>
            {children}
        </CartContext.Provider>
    )
}