import { useState } from 'react';
import { Button } from 'react-bootstrap';

const Item = ({name, brand}) => {
    const [itemsQty, setItemsQty] = useState[0];

    return (
        <>
            <div style={{ marginTop: 30, marginBottom: 5, color: '#clclcl', fontSize: '3rem', lineHeight: '22px'}}>
                {name} <br/> <span style={{ fontSize: '1.5rem'}}>Brand: {brand}</span>
            </div>

            <div style={{ marginBottom: 10}}>
                <Button onClick={ () => setItemsQty (itemsQty - 1)} variant="primary">-</Button>
                <span>{itemsQty}</span>
                <Button onClick={ () => setItemsQty (itemsQty + 1)} variant="primary">+</Button>
            </div> 
        </>
    )
}

export default Item;