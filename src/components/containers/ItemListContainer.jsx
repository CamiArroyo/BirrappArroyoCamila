import React from 'react';
import ItemList from '../elements/ItemList';
import { Container, Row } from 'react-bootstrap';

const ItemListContainer = ({ products }) => {
    return (
        <>
            <Container style={{marginTop:100}}>
                <Row xs={2} md={3} className="g-4 mt-1">
                    <ItemList products={products}/>
                </Row>
            </Container>
        </>
    )
}

export default ItemListContainer; 