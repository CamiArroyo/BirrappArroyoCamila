import { React, useState, useEffect } from 'react';
import { Col, Container, Button, Row } from 'react-bootstrap';
import { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';
import { Link } from 'react-router-dom';
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../firebase';

const Cart = () => {

    const { cartItems, cartItemsQty, removeItem, sumTotal, clearAll } = useContext(CartContext);

    const [ success, setSuccess ] = useState(false);
    const [ orderId, setOrderId ] = useState("");
    const [ total, setTotal ] = useState(0);

    const checkout = () => {

        if (cartItems.length === 0 ) {
            console.log("OJO! No hay items en el carrito")
            return
        }

        const itemsToBuy = cartItems.map(item => {
            return {
                id: item.id,
                name: item.name,
                price: item.unitPrice,
                qty: item.qty
            }
        })

        const buyer = {
            name: "Nombre del comprador",
            addres: "Dirección del comprador",
            phone: "Teléfono del comprador",
            email: "Email del comprador"
        }

        const order = { buyer: buyer, items: itemsToBuy, date: new Date(), total: total}

        addDoc(collection(db, "orders"), order).then(doc => {
            setOrderId(doc.id)
            setSuccess(true)
            console.log("ID de mi orden creada es: ", doc.id)
        })
        .catch(err => {
            console.log("Problema: ", err)
        })

    }

    useEffect(() => {
        if (cartItems.length > 0) {
            let totalGlobal = sumTotal()
            setTotal(totalGlobal)
        }

    }, [cartItems]);

    return (
        <>
            { (() => {
                if ( cartItemsQty() > 0 ) {
                    return <div className="cart-section text-xs-left" style={{ marginTop: 100 }}>
                    <Container fluid>
                        <Row>
                            <Col lg={{ span:10, offset: 1}}>
                                <div className="cart-container d-flex flex-md-row flex-column justify-content-around">
                                    Cantidad de productos en el carrito: { cartItemsQty() }
                                    <Button style={{marginLeft : 10}} onClick={ () => clearAll() } variant="secondary">Vaciar carrito</Button>
                                </div>
                                <hr />
                                <div className="cart-list">
                                    <ul className="cart-items">
                                        { cartItems.map(item => {
                                            return <li style={{ listStyle: "none" }} className="cart-item clearfix">
                                                <div className="cart-itemname">
                                                    <div style={{ fontWeight: 600 }}>{item.name}</div>
                                                </div>
                                                <div className="cart-item-info d-flex flex-md-row flex-column justify-content-between">
                                                    <img variant="top" src={require('../components/img/'+item.urlImg)} width="100" height="auto"/>
                                                    <div className="cart-item-qty">
                                                        <div>Cantidad</div>
                                                        <div>{item.qty}</div>
                                                    </div>
                                                    <div className="cart-item-price">
                                                        <div>Precio</div>
                                                        <div>${item.unitPrice}</div>
                                                    </div>
                                                    <div className="cart-item-subtotal">
                                                        <div>Subtotal</div>
                                                        <div>${item.subtotal}</div>
                                                    </div>
                                                    <div className="cart-item-eliminar">
                                                        <Button onClick={ () => removeItem(item.id) } variant="secondary">X</Button>
                                                    </div>
                                                </div>
                                            </li>
                                        }) }
                                    </ul>
                                </div>
                                <hr />
                                <div className="order-total">
                                    <div className="order-total-content text-md-right">
                                        <div className="order-total-content-title">Total: ${total}</div>
                                    </div>
                                </div>
                                <div className="cart-container d-flex flex-md-row flex-column justify-content-around">
                                    <Button style={{margin : 10}} variant="secondary"><Link style={{color:'white'}} as={Link} to="/">Agregando productos</Link></Button>
                                    <Button style={{margin : 10}} variant="secondary" onClick={checkout}>Finalizar compra</Button>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
                } else {
                    return <div> 
                        <div style={{ marginTop: 100, marginBottom: 50 }}>No hay productos en el carrito</div>
                        <Button variant="secondary"><Link style={{color:'white'}} as={Link} to="/">Comenzar a comprar</Link></Button>
                        </div>
                }
            })()}
            <div>
                {success ? 
                    <div style={{ 
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100v%",
                        background: "rgb(76 175 80 / 90%)",
                        textAlign: "center",
                        color: "white",
                        paddingTop: "20%"
                    }}>
                        <h1>¡Listo!</h1>
                        <h2>Tu compra se ha realizado con exito</h2>
                        <p>Puedes hacer seguimiento con el siguiente ID de orden: {orderId}</p>
                        <Button style={{ margin: 50 }} as={Link} to="/" onClick={ () => clearAll()} variant="secondary">Comenzar una nueva compra</Button>
                    </div>
                :
                    null
                }
            </div>
        </>
    );
}

export default Cart