import { useContext } from 'react';
import { BsCart4 } from "react-icons/bs";
import { CartContext } from '../../contexts/CartContext';

const CartWidget = () => {

    const { cartItemsQty } = useContext(CartContext);

    return (

        <div style={{position: "relative", marginLeft: 6}}>

            <BsCart4 size="2em"/>

            <div style={{color: "#fff", 
            marginLeft: 6, 
            fontWeight: "bold", 
            position: "absolute", 
            left: 6, 
            top: -2, 
            fontSize: "0.6rem", 
            backgroundColor: "#ba000d", 
            paddingTop: "2px", 
            paddingBottom: "2px", 
            paddingLeft: "5px", 
            paddingRight: "4px", 
            borderRadius: "20%"}}>{ cartItemsQty() }</div>

        </div>

    )
}

export default CartWidget; 