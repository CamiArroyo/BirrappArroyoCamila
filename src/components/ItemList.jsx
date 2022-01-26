import { useState } from 'react';
import React from 'react';
import Item from './Item';
import { Col } from 'react-bootstrap';

const ItemList = () => {

    const arregloProductos = [        
    {name:"Andes IPA lata 473", brand:"Andes", description:"Aquí habrá una descripción", unitPrice:148, sixPackPrice:880, stock:10},
    {name:"Andes Negra lata 473", brand:"Andes", description:"Aquí habrá una descripción", unitPrice:170, sixPackPrice:1005, stock:15}, 
    {name:"Andes Roja lata 473", brand:"Andes", description:"Aquí habrá una descripción", unitPrice:170, sixPackPrice:1005, stock:0},
    {name:"Andes IPA lata 473", brand:"Andes", description:"Aquí habrá una descripción", unitPrice:148, sixPackPrice:880, stock:10},
    {name:"Andes Negra lata 473", brand:"Andes", description:"Aquí habrá una descripción", unitPrice:170, sixPackPrice:1005, stock:15}, 
    {name:"Andes Roja lata 473", brand:"Andes", description:"Aquí habrá una descripción", unitPrice:170, sixPackPrice:1005, stock:0},
    {name:"Andes IPA lata 473", brand:"Andes", description:"Aquí habrá una descripción", unitPrice:148, sixPackPrice:880, stock:10},
    {name:"Andes Negra lata 473", brand:"Andes", description:"Aquí habrá una descripción", unitPrice:170, sixPackPrice:1005, stock:15}, 
    {name:"Andes Roja lata 473", brand:"Andes", description:"Aquí habrá una descripción", unitPrice:170, sixPackPrice:1005, stock:0},
    {name:"Andes IPA lata 473", brand:"Andes", description:"Aquí habrá una descripción", unitPrice:148, sixPackPrice:880, stock:10},
    {name:"Andes Negra lata 473", brand:"Andes", description:"Aquí habrá una descripción", unitPrice:170, sixPackPrice:1005, stock:15}, 
    {name:"Andes Roja lata 473", brand:"Andes", description:"Aquí habrá una descripción", unitPrice:170, sixPackPrice:1005, stock:0}
    ];

    const [items, setItems] = useState([])

    const promise  = new Promise ((resolve, reject) => {
        setTimeout(() => {
            resolve(setItems(arregloProductos))
        },2000)
    })

    return (
        <>
            {items.map(item => {
                return <Col><Item ItemName={item.name} ItemBrand={item.brand} Imagen={item.imagen} Description={item.description} UnitPrice={item.unitPrice} SixPackPrice={item.sixPackPrice} Stock={item.stock}/></Col>
            })}
        </>
    )
}

export default ItemList; 