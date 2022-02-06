import React from 'react';
import { useState } from 'react';
import { Button} from 'react-bootstrap';

const ItemCount = ({itemsQty, stock, setItemsQty, setCambiarBotones}) => {

    const [cdadElegida, setCdadElegida] = useState(0);

    function ControlNegativos() { { itemsQty < 1 ? setItemsQty(itemsQty) : setItemsQty(itemsQty-1) } }
    function ControlStock() { { itemsQty >= stock ? setItemsQty(itemsQty) : setItemsQty(itemsQty+1) } }

    const onAdd = (qty) => {
        console.log("Cdad elegida: " + qty)
        if (qty > 0) {
            setCambiarBotones(true)
            setCdadElegida(qty)
        }
    }

    return (
        <>
            <div>
                <Button style={{marginRight:8}} onClick={ControlNegativos} variant="secondary">-</Button>
                <span>{itemsQty}</span>
                <Button style={{marginLeft:8}} onClick={ControlStock} variant="secondary">+</Button>
            </div>
            <div style={{ marginTop:20, marginBottom: 10}}>
                <Button onClick={ () => onAdd (itemsQty) } variant="secondary">Agregar al carrito</Button>
            </div>

        </>
    )

}

export default ItemCount