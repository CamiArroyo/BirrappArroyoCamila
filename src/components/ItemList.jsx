import { useState } from 'react';
import React from 'react';
import Item from './Item';

const ItemList = () => {

    const [items, setItems] = useState([
        {name:"Cerveza Andes IPA lata 473", brand:"Andes", description:"Aquí habrá una descripción", unitPrice:148, sixPackPrice:880, stock:10},
        {name:"Cerveza Andes Negra lata 473", brand:"Andes", description:"Aquí habrá una descripción", unitPrice:170, sixPackPrice:1005, stock:15}, 
        {name:"Cerveza Andes Roja lata 473", brand:"Andes", description:"Aquí habrá una descripción", unitPrice:170, sixPackPrice:1005, stock:0}
    ])

    return (
        <div>
            {items.map(item => {
                return <Item ItemName={item.name} ItemBrand={item.brand} Imagen={item.imagen} Description={item.description} UnitPrice={item.unitPrice} SixPackPrice={item.sixPackPrice} Stock={item.stock}/> 
            })}
        </div>
    )
}

export default ItemList; 