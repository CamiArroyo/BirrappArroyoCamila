import React, { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';
import { Button} from 'react-bootstrap';

const ItemCount = ({product, itemsQty, unitPrice, stock, setItemsQty, setSwitchButtons, setUpdateQuantity, setCheckStock}) => {

    const { addItem } = useContext(CartContext);

    function ControlNegativos() { { itemsQty < 2 ? setItemsQty(itemsQty) : setItemsQty(itemsQty-1) } }
    function ControlStock() { { itemsQty >= stock ? setItemsQty(itemsQty) : setItemsQty(itemsQty+1) } }

    return (
        <>
            { (stock>0) ? (
            <>
                <div style={{ marginTop:20, marginBottom: 10}}>
                    <Button onClick={ () => addItem(product, itemsQty, unitPrice, stock, setSwitchButtons, setUpdateQuantity, setCheckStock) } variant="secondary">Agregar al carrito</Button>
                </div>
                <div>
                    <Button style={{marginRight:8}} onClick={ControlNegativos} variant="secondary">-</Button>
                    <span>{itemsQty}</span>
                    <Button style={{marginLeft:8}} onClick={ControlStock} variant="secondary">+</Button>
                </div>
            </>
            ) : <Button disabled variant="secondary">No hay stock disponible</Button> }
        </>
    )

}

export default ItemCount