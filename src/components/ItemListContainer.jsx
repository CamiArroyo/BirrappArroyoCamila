import React from 'react';
import ItemCount from './ItemCount';
import brahmaLata from './img/brahmaLata.jpg';
import quilmesLataClasica from './img/quilmesLataClasica.jpg';
import andesLataRubia from './img/andesLataRubia.jpg';

const ItemListContainer = (props) => {
    const costumeStyle = {
        marginTop:100,
        marginBottom:50
    }

    return (
        <div>
            <h3 style={costumeStyle}>
                {props.titulo}
            </h3>
            <div style={costumeStyle}>
                <h5>Cerveza Brahma lata - Stock: 10</h5>
                <img src={brahmaLata} height={200}></img>
                <ItemCount stock={10} initial={1} />
            </div>
            <div style={costumeStyle}>
                <h5>Cerveza Quilmes Clásica lata - Stock: 8</h5>
                <img src={quilmesLataClasica} height={200}></img>
                <ItemCount stock={8} initial={1} />
            </div>
            <div style={costumeStyle}>
                <h5>Cerveza Andes Rubia lata - Stock: 5</h5>
                <img src={andesLataRubia} height={200}></img>
                <ItemCount stock={5} initial={1} />
            </div>
        </div>
    )
}

export default ItemListContainer; 