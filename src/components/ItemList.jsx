import React from 'react';
import Item from './Item';
import { Col } from 'react-bootstrap';

const ItemList = ({products}) => {

    return (
        <>
            {products.map((product, index) => (
                <Col>
                    <Item key={index} product={product} />
                </Col>
            ))}
        </>
    )
}

export default ItemList; 