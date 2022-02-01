import React, {useContext, useState, createContext } from 'react';


const CartContext = createContext();
const useCartContext = () => useContext(CartContext);

export const CartContextProvider = ({children}) => {

    const [itemsCart, setItemsCart] = useState([]);

    const getQtyCart = () => {
        return itemsCart.reduce((total, item) => {
            return (total + item.qty);
        }, 0)
    }
    
    const addItem = (item, qty) => {
        const newItem = {
          ...item,
          qty: qty,
        }

        if(!isInCart(item.id)) {
          setItemsCart([...itemsCart, newItem])
        } else {
          const newProducts = itemsCart.map(prod => {
            if(prod.id === item.id) {
              const newProduct = {
                ...prod,
                qty: qty
              }
              return newProduct
            } else {
              return prod
            }
          })
          setItemsCart(newProducts)
        }
      }
    const isInCart = (id) => {
        return itemsCart.some((item) => {
            return item.id === id;
        })
    }
    const cleanCart = () => {
        setItemsCart([])
    }
    const removeFromCart = (id) => {
        let cartFiltered = itemsCart.filter((item) => {
            return item.id !== id;
        })
        setItemsCart(cartFiltered);
        return(cartFiltered);
        
    }
return(
    <CartContext.Provider value={{itemsCart, setItemsCart, getQtyCart, addItem, isInCart, cleanCart, removeFromCart}}>
        {children}
    </CartContext.Provider>

)}

export default useCartContext;