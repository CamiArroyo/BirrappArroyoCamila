import { useState } from 'react';
import React from 'react';
import { Button } from 'react-bootstrap';

function ItemCount({ stock, initial}) {
    const [itemsQty, setItemsQty] = useState(initial);

    function ControlNegativos() {
        if(itemsQty < 1) {
            setItemsQty(itemsQty)
        }
        else {
            setItemsQty(itemsQty-1)
        }
    }

    function ControlStock() {
        if(itemsQty >= stock) {
            setItemsQty(itemsQty)
        }
        else {
            setItemsQty(itemsQty+1)
        }
    }

    return (
        <div className="App" >
            <div style={{marginBottom: 10}}>
                <Button onClick={ControlNegativos} variant="primary">-</Button>
                <span style={{margin: 10, fontSize: "2rem"}}>{itemsQty}</span>
                <Button onClick={ControlStock} variant="primary">+</Button>
            </div>
        </div>
    )
}

export default ItemCount; 