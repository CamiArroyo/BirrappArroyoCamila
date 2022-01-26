import { useState } from 'react';
import React from 'react';
import { Button, Card, ListGroup, ListGroupItem } from 'react-bootstrap';

const Item = ({ItemName, ItemBrand, Description, UnitPrice, SixPackPrice, Stock}) => {
    const [itemsQty, setItemsQty] = useState(0);

    function ControlNegativos() {
        if(itemsQty < 1) {
            setItemsQty(itemsQty)
        }
        else {
            setItemsQty(itemsQty-1)
        }
    }

    function ControlStock() {
        if(itemsQty >= Stock) {
            setItemsQty(itemsQty)
        }
        else {
            setItemsQty(itemsQty+1)
        }
    }

    return (
        <>
            <Card style={{ margin:20, width: '18rem' }}>
                <Card.Img variant="top" src="" />
                <Card.Body>
                    <Card.Title>{ItemName}</Card.Title>
                    <Card.Subtitle>Marca: {ItemBrand}</Card.Subtitle>
                    <Card.Text>
                        <div style={{ marginBottom: 10}}>
                            <Button onClick={ControlNegativos} variant="primary">-</Button>
                            <span>{itemsQty}</span>
                            <Button onClick={ControlStock} variant="primary">+</Button>
                        </div>
                    </Card.Text>
                    <Card.Text>{Description}</Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroupItem>Precio por unidad: ${UnitPrice}</ListGroupItem>
                    <ListGroupItem>Precio por sixpax: ${SixPackPrice}</ListGroupItem>
                </ListGroup>
                <Card.Body>
                    <Card.Link href="#">Ver detalle del producto</Card.Link>
                </Card.Body>
            </Card>
        </>
    )
}

export default Item;