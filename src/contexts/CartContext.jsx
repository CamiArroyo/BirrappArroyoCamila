import { useState, createContext } from "react";

//importante: siempre debemos exportar el CartContext
export const CartContext = createContext();

//con el custom provider puedo dar un proveedor de ese contexto y agregar métodos personalizados
export const CartProvider = ( {children} ) => { //children es el prop que me permite agarrar todos los componentes dentro de mi componente

    const [cartItems, setCartItems] = useState([]);

    const cartItemsQty = () => {
        return cartItems.length
    }

    const isInCart = (producto) => {
        let flag = false
        cartItems.map((p) => {
            if (p.productId === producto.productId) {
                flag = true
            }
        })
        return flag
    }

    const addItem = (producto, qty, unitPrice) => {
        if (isInCart(producto)) {
            console.log("Este producto ya existe en el carrito")
        } else {
            if ( qty>0 ) {
                console.log(producto, qty)
                producto.qty = qty
                producto.subtotal = (qty*unitPrice)
                console.log("subtotal:", producto.subtotal)
                setCartItems([...cartItems, producto]) // spread operator: con los "..." agarramos una copia del array, instanciamos esa copia y agregamos un nuevo valor
                console.log(cartItems)
            } else {
                console.log("Está intentando agregar un producto con cantidad 0")
            }
        }
    }

    const clearAll = () => {
        setCartItems([])
    }

    const removeItem = (itemId) => {
        setCartItems(cartItems.filter(item => item.productId !== itemId))
    }

    return (
        <CartContext.Provider value={ {cartItems, cartItemsQty, addItem, removeItem} }>
            {children}
        </CartContext.Provider>
    )

}