import React from 'react';
import { useState, useContext } from 'react';
import { Accordion, Nav, Col, Container, Row, Card, Button} from 'react-bootstrap';
import { Link } from "react-router-dom";
import { CartContext } from '../contexts/CartContext';
import ItemCount from './ItemCount';

const ItemDetail = ( {product} ) => {

    const { addItem, InfoModal } = useContext(CartContext);

    const {name, brand, unitPrice, urlImg, description, stock} = product
    const [itemsQty, setItemsQty] = useState(1);

    const [switchButtons, setSwitchButtons] = useState(false);
    const [updateQuantity, setUpdateQuantity] = useState(false);
    const [checkStock, setCheckStock] = useState(false);

    return(
        <div style={{ marginTop:100, marginBottom: 100}}>
            <Container>
                <Card border="secondary">
                    <Card.Header>
                        <Nav variant="tabs" defaultActiveKey="#first">
                            <Nav.Item>
                                <Nav.Link href="#first"><span style={{fontWeight:600}}>{name}</span></Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Link to="/" className="btn btn-link">Volver al inicio</Link>
                            </Nav.Item>
                        </Nav>
                    </Card.Header>
                    <Card.Body>
                        <Row>
                            <Col>
                                <Card.Img variant="top" src={require('../components/img/'+urlImg)} width="400" height="auto" class="img-fluid d-block mx-auto"/>
                            </Col>
                            <Col>
                                <Card.Title style={{fontSize:30}}>{name}</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">Marca: {brand}</Card.Subtitle>
                                <Card.Text style={{fontSize:20}}>Precio por unidad: ${unitPrice}</Card.Text>
                                <Accordion className="d-block mx-auto" style={{ width:'16rem', marginBottom:30}}>
                                    <Accordion.Item eventKey="0">
                                        <Accordion.Header>Ver disponibilidad</Accordion.Header>
                                        <Accordion.Body>Stock actual: {stock} unidades.</Accordion.Body>
                                    </Accordion.Item>
                                </Accordion>
                                <Card.Text>{description}</Card.Text>
                                <hr/>

                                { (stock>0) ? (
                                    <div style={{ marginTop:20, marginBottom: 10}}>
                                        <Button onClick={ () => addItem(product, itemsQty, unitPrice, stock, setSwitchButtons, setUpdateQuantity, setCheckStock) } variant="secondary">Agregar al carrito</Button>
                                    </div>
                                    ) : 
                                    <div style={{ marginTop:20, marginBottom: 10}}>
                                        <Button disabled variant="secondary">No hay stock disponible</Button>
                                    </div> }

                                { switchButtons || updateQuantity ? (
                                    <>
                                        <div>
                                            <ItemCount itemsQty={itemsQty} stock={stock} setItemsQty={setItemsQty} />
                                            <br/>
                                            <Link to={"/"}><Button style={{ marginTop:10, marginRight: 5}} variant="secondary">Volver al inicio</Button></Link>
                                            <Link to={"/cart"}><Button style={{ marginTop:10, marginLeft: 5}} variant="secondary">Finalizar compra</Button></Link>
                                        </div>
                                    </>
                                    ) : <ItemCount itemsQty={itemsQty} stock={stock} setItemsQty={setItemsQty} /> }

                                { checkStock ? (
                                    <div>
                                        <InfoModal name={name} info="Está excediendo la cantidad en stock, por favor verifique disponibilidad."></InfoModal>
                                    </div>
                                ) : null }

                                { switchButtons ? (
                                    <div>
                                        <InfoModal name={name} info="¡Producto agregado al carrito con éxito!"></InfoModal>
                                    </div>
                                ) : null }

                                { updateQuantity ? (
                                    <div>
                                        <InfoModal name={name} info="¡Cantidad en el carrito actualizada!"></InfoModal>
                                    </div>
                                ) : null }

                            </Col>
                        </Row>
                    </Card.Body>
                    <Card.Footer>
                        <p>Aquí encontrarás delivery de cervezas clásicas, premium y artesanales a precio de mercado. Te ofrecemos <span style={{fontWeight:600}}>{name}</span> y muchas más.</p>
                        <p>Te invitamos a que recorras nuestra página web, hagas el pedido y disfrutes de cervezas frías que llegan a la puerta de tu casa al instante.</p>
                    </Card.Footer>
                </Card>
            </Container>
        </div>
    )
}

export default ItemDetail;