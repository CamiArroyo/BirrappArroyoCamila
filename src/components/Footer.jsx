import React from 'react';

//-----------> PASO 1: CREAMOS UN COMPONENTE QUE CONTIENE AL FOOTER

//Opción 1: trabajando con clases

/* 
class Footer extends React.Component {
    render() {
        const costumeStyle = {
            background : "red",
            padding : 10,
            fontFamily : "Arial",
            color : "White",
            fontSize : 22
        }

        return (
            <div style={costumeStyle}>Hola soy el footer</div>
        )
    }
}
*/

//Opción 2: trabajando con funciones

const Footer = (props) => { //usamos arrow function
    const costumeStyle = {
        background : "grey",
        padding : 10,
        fontFamily : "Arial",
        color : "White",
        fontSize : 22
    }

    //ventaja del "props": no hace falta entrar en el componente para cambiar el mensaje
    return <div style={costumeStyle}>{props.mensaje}</div>
}

//-----------> PASO 2: Exportamos el componente para poder importarlo en otro lado

export default Footer; 