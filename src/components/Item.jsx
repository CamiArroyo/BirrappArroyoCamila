import { useState } from 'react';
import React from 'react';
import { Button, Card, ListGroup, ListGroupItem } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Item = ({product}) => {
    const {productId, name, brand, unitPrice, sixPackPrice, description} = product
    const [itemsQty, setItemsQty] = useState(0);
    const navigate = useNavigate();

    function ControlNegativos() { { itemsQty < 1 ? setItemsQty(itemsQty) : setItemsQty(itemsQty-1) } }
    function ControlStock() { { itemsQty >= product.stock ? setItemsQty(itemsQty) : setItemsQty(itemsQty+1) } }

    const goToProduct = () => {
        navigate(`/product/${productId}`)
    }

    return (
        <>
            <Card style={{ margin:20, width: '18rem' }}>
                <Card.Img variant="top" src="" />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Subtitle>Marca: {brand}</Card.Subtitle>
                    <Card.Text>
                        <div style={{ marginBottom: 10}}>
                            <Button onClick={ControlNegativos} variant="primary">-</Button>
                            <span>{itemsQty}</span>
                            <Button onClick={ControlStock} variant="primary">+</Button>
                        </div>
                    </Card.Text>
                    <Card.Text>{description}</Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroupItem>Precio por unidad: ${unitPrice}</ListGroupItem>
                    <ListGroupItem>Precio por sixpax: ${sixPackPrice}</ListGroupItem>
                </ListGroup>
                <Card.Body>
                    <Button variant="primary" onClick={() => goToProduct()}>Ver detalle del producto</Button>
                </Card.Body>
            </Card>
        </>
    )
}

export default Item;