import React from 'react';
import ItemList from './ItemList';
import { Container, Row } from 'react-bootstrap';

const ItemListContainer = () => {
    return (
        <>
            <div style={{marginTop:100}}>
                <h1>NUESTROS PRODUCTOS</h1>
                <h2>Presentamos a continuación una cartilla con nuestros productos.</h2>
            </div>
            <Container>
                <Row xs={2} md={3} className="g-4 mt-1">
                    <ItemList/>
                </Row>
            </Container>
        </>
    )
}

export default ItemListContainer; 