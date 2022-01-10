import React from 'react';

const Footer = (props) => { //usamos arrow function
    const costumeStyle = {
        background : "grey",
        padding : 10,
        fontFamily : "Arial",
        color : "White",
    }

    return <div style={costumeStyle}>{props.mensaje}</div>
}

export default Footer; 