import { useState } from 'react';
import React from 'react';
import Item from './Item';

const ItemList = () => {
    const costumeStyle = {
        marginTop:100,
        marginBottom:50
    }

    const [items, setItems] = useState([
        {name:"Cerveza Andes IPA lata 473", brand:"Andes", description:"Aquí habrá una descripción", stock:10},
        {name:"Cerveza Andes Negra lata 473", brand:"Andes", description:"Aquí habrá una descripción", stock:15}, 
        {name:"Cerveza Andes Roja lata 473", brand:"Andes", description:"Aquí habrá una descripción", stock:0}
    ])

    return (
        <div>
            {items.map(item => {
                return <Item name={item.name} brand={item.brand} description={item.description} stock={item.stock}/> 
            })}
        </div>
    )
}

export default ItemList; 