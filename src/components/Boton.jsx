import { useState, useEffect } from 'react';
import React from 'react';
import { Button } from 'react-bootstrap';

const Boton = () => {
    const costumeStyle = {
        paddingBottom: 100
    }

    const [name, setName] = useState("Eren");
    const [itemsQty, setItemsQty] = useState(0);
    const [itemsQty2, setItemsQty2] = useState(10);
    const [itemsQty3, setItemsQty3] = useState(0);

    useEffect(() => {
        console.log("Cambié el item de cantidad", "ahora tengo", itemsQty3)
        console.log("Cambió en la fecha", new Date())
        return () => {
            console.log("se desmonto el componente")
        }
    }, [itemsQty3])

    return (
        <div className="App" style={costumeStyle}>
            
            <div>
                <Button onClick={ () => setName("Mikasa") } variant="primary">Cambiar nombre</Button>
                <div>
                    <h1>{name}</h1>
                </div>
            </div>

            <div>
                <Button onClick={ () => setItemsQty(itemsQty+1) } variant="primary">Agregar item</Button>
                <div>
                    <h1>{itemsQty}</h1>
                </div>
            </div>

            <div>
                <Button onClick={ () => setItemsQty2(itemsQty2-1) } variant="primary">Eliminar item</Button>
                <div>
                    <h1>{itemsQty2}</h1>
                </div>
            </div>

            <div style={{marginBottom: 10}}>
                <Button onClick={ () => setItemsQty3(itemsQty3-1) } variant="primary">-</Button>
                <span style={{margin: 10, fontSize: "3rem"}}>{itemsQty3}</span>
                <Button onClick={ () => setItemsQty3(itemsQty3+1) } variant="primary">+</Button>
            </div>

        </div>
    )
}

export default Boton; 