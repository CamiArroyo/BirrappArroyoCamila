import React, { useState, useContext } from 'react';
import { Accordion, Nav, Col, Container, Row, Card, Button} from 'react-bootstrap';
import { useNavigate, Link } from "react-router-dom";
import { CartContext } from '../../contexts/CartContext';
import ItemCount from './ItemCount';
import { auth } from '../../firebase';

const ItemDetail = ( {product} ) => {

    const { InfoModal } = useContext(CartContext);
    const { email } = auth.currentUser;

    const {id, name, brand, unitPrice, urlImg, description, stock} = product
    const [itemsQty, setItemsQty] = useState(1);

    const [switchButtons, setSwitchButtons] = useState(false);
    const [updateQuantity, setUpdateQuantity] = useState(false);
    const [checkStock, setCheckStock] = useState(false);

    const navigate = useNavigate();
    const goToEditItem = () => {
        navigate(`/edititem/${id}`)
    }

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
                                <Button style={{marginLeft: 8, marginBottom: 8}} variant="secondary"><Link style={{color:'white'}} as={Link} to="/">Volver al inicio</Link></Button>
                                { (email == "camiarroyo98.1@gmail.com") ? 
                                (
                                    <Button style={{marginLeft: 8, marginBottom: 8}} variant="secondary" onClick={() => goToEditItem()}>Editar item</Button>
                                ) : null }
                            </Nav.Item>
                        </Nav>
                    </Card.Header>
                    <Card.Body>
                        <Row>
                            <Col>
                                <Card.Img variant="top" src={require('../img/'+urlImg)} width="400" height="auto" class="img-fluid d-block mx-auto"/>
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

                                { switchButtons || updateQuantity || checkStock ? (
                                    <>
                                        <div>
                                            <Link to={"/"}><Button style={{ marginTop:10, marginRight: 5}} variant="secondary">Volver al inicio</Button></Link>
                                            <Link to={"/cart"}><Button style={{ marginTop:10, marginLeft: 5}} variant="secondary">Finalizar compra</Button></Link>
                                        </div>
                                    </>
                                    ) : <ItemCount product={product} itemsQty={itemsQty} unitPrice={unitPrice} stock={stock} setItemsQty={setItemsQty} setSwitchButtons={setSwitchButtons} setUpdateQuantity={setUpdateQuantity} setCheckStock={setCheckStock} /> }

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