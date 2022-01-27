import React from 'react';
import Item from './Item';
import { Col } from 'react-bootstrap';

const ItemList = ({products}) => {

    return (
        <>
            {products.map((product) => (
                <Col>
                    <Item product={product} />
                </Col>
            ))}
        </>
    )
}

export default ItemList; 