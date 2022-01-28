import React from 'react';
import { useState } from 'react';
import { Button} from 'react-bootstrap';

const ItemDetail = ({product}) => {
    const {productId, name, brand, unitPrice, sixPackPrice, description} = product
    const [itemsQty, setItemsQty] = useState(0);
    function ControlNegativos() { { itemsQty < 1 ? setItemsQty(itemsQty) : setItemsQty(itemsQty-1) } }
    function ControlStock() { { itemsQty >= product.stock ? setItemsQty(itemsQty) : setItemsQty(itemsQty+1) } }

    return(
        <>
            <h1 style={{marginTop:100}}>HOLAAAAAAAA</h1>
            <h2>HOLAAAAAAAAAAAA</h2>
            <p>Nombre: {name}</p>
            <p>Description: {description}</p>

            <div style={{ marginBottom: 10}}>
                <Button onClick={ControlNegativos} variant="primary">-</Button>
                <span>{itemsQty}</span>
                <Button onClick={ControlStock} variant="primary">+</Button>
            </div>
        </>
    )
}

export default ItemDetail;