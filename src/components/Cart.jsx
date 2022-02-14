import { React, useState } from 'react';
import { Col, Container, Button, Row } from 'react-bootstrap';
import { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

const Cart = () => {

    const { cartItems, cartItemsQty, removeItem } = useContext(CartContext);
    const [ total, setTotal ] = useState(0);

    /*
    useEffect(() => {
        if (cartItemsQty() > 0) {
            const prevTotal = cartItems.reduce((itemA, itemB) => {
                return ( itemA.subtotal + itemB.subtotal )
            }, 0)
            setTotal(prevTotal)
        }
    }, [cartItems]);
    */

    return (
        <>
            { (() => {
                if ( cartItemsQty() > 0 ) {
                    return <div className="cart-section text-xs-left" style={{ marginTop: 100 }}>
                    <Container fluid>
                        <Row>
                            <Col lg={{ span:10, offset: 1}}>
                                <div className="cart-container">
                                    Cantidad de productos en el carrito: { cartItemsQty() }
                                </div>
                                <hr />
                                <div className="cart-list">
                                    <ul className="cart-items">
                                        { cartItems.map(item => {
                                            return <li style={{ listStyle: "none" }} className="cart-item clearfix">
                                                <div className="cart-itemname">
                                                    <div style={{ fontWeight: 600 }}>Nombre: {item.name}</div>
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
                                                        <Button onClick={ () => removeItem(item.productId) } variant="secondary">X</Button>
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
                                <Button variant="secondary"><Link as={Link} to="/">Seguir agregando productos al carrito</Link></Button>
                            </Col>
                        </Row>
                    </Container>
                </div>
                } else {
                    return <div> 
                        <div style={{ marginTop: 100 }}>No hay productos en el carrito</div>
                        <Button variant="secondary"><Link as={Link} to="/">Comenzar a comprar</Link></Button>
                        </div>
                }
            })()}
        </>
    );
}

export default Cart