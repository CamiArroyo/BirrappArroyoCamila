import React from 'react';
import { Button, Card, ListGroup, ListGroupItem } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Item = ({product}) => {

    const {id, name, brand, unitPrice, urlImg} = product
    const navigate = useNavigate();

    const goToProduct = () => {
        navigate(`/product/${id}`)
    }

    return (
        <>
            <Card border="secondary" style={{ margin:20, width: '16rem' }}>
                <img variant="top" src={require('../img/'+urlImg)} width="200" height="auto" class="img-fluid d-block mx-auto"/>
                <Card.Body>
                    <Card.Title style={{ fontSize:18, height: '3rem' }}>{name}</Card.Title>
                    <Card.Subtitle>Marca: {brand}</Card.Subtitle>
                </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroupItem>Precio por unidad: ${unitPrice}</ListGroupItem>
                </ListGroup>
                <Card.Footer>
                    <Button variant="secondary" onClick={() => goToProduct()}>Ver detalle del producto</Button>
                </Card.Footer>
            </Card>
        </>
    )
}

export default Item;