import React from 'react';
import ItemList from './ItemList';

const ItemListContainer = () => {
    return (
        <div style={{marginTop:100}}>
            <h1>NUESTROS PRODUCTOS</h1>
            <h2>Presentamos a continuación una cartilla con nuestros productos.</h2>
            <ItemList/>
        </div>
    )
}

export default ItemListContainer; 