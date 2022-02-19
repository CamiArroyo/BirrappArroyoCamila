import { useState, createContext } from "react";
import { Modal, Button} from 'react-bootstrap';

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
            if (p.id === producto.id) {
                flag = true
            }
        })
        return flag
    }

    const setNewQty = (producto, qty) => {
        cartItems.map((p) => {
            if (p.id === producto.id) {
                p.qty += qty
            }
        })
    }

    function InfoModal({name, info}) {
        const [show, setShow] = useState(true);
    
        const handleClose = () => setShow(false);
        const handleShow = () => setShow(true);
    
        return (
        <>
            <Modal show={show} onHide={handleShow}>
            <Modal.Header>
                <Modal.Title>{info}</Modal.Title>
                <Button variant="secondary" onClick={handleClose}>X</Button>
            </Modal.Header>
            <Modal.Body>Producto: {name}</Modal.Body>
            <Modal.Footer></Modal.Footer>
            </Modal>
        </>
        );
    }

    const addItem = (producto, qty, unitPrice, setCambiarBotones, setCambiarCantidad) => {
        if (isInCart(producto)) {
            console.log("Este producto ya existe en el carrito, se actualiza la cantidad")
            setNewQty(producto, qty)
            setCambiarCantidad(true)
        } else {
            if ( qty>0 ) {
                producto.qty = qty
                producto.subtotal = (qty*unitPrice)
                console.log("Producto a agregar: ", producto)
                setCartItems([...cartItems, producto]) // spread operator: con los "..." agarramos una copia del array, instanciamos esa copia y agregamos un nuevo valor
                setCambiarBotones(true)
            } else {
                console.log("Está intentando agregar un producto con cantidad 0")
            }
        }
    }

    const clearAll = () => {
        setCartItems([])
    }

    const removeItem = (itemId) => {
        setCartItems(cartItems.filter(item => item.id !== itemId))
    }

    const sumTotal = () => {
        let sum = 0
        cartItems.map((p) => {
            sum += p.subtotal
        })
        return sum
    }

    return (
        <CartContext.Provider value={ {cartItems, cartItemsQty, addItem, removeItem, clearAll, sumTotal, InfoModal} }>
            {children}
        </CartContext.Provider>
    )

}