import React from 'react';
import { Button} from 'react-bootstrap';

const ItemCount = ({itemsQty, stock, setItemsQty}) => {

    function ControlNegativos() { { itemsQty < 1 ? setItemsQty(itemsQty) : setItemsQty(itemsQty-1) } }
    function ControlStock() { { itemsQty >= stock ? setItemsQty(itemsQty) : setItemsQty(itemsQty+1) } }

    return (
        <>
            <Button style={{marginRight:8}} onClick={ControlNegativos} variant="secondary">-</Button>
            <span>{itemsQty}</span>
            <Button style={{marginLeft:8}} onClick={ControlStock} variant="secondary">+</Button>
        </>
    )

}

export default ItemCount