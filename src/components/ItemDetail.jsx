import React from 'react';

const ItemDetail = ({product}) => {
    const {productId, name, brand, unitPrice, sixPackPrice, description} = product

    return(
        <div style={{marginTop:100}}>
            <h1>HOLAAAAAAAA</h1>
            <h2>HOLAAAAAAAAAAAA</h2>
            <p>{name}</p>
            <p>{description}</p>
        </div>
    )
}

export default ItemDetail;