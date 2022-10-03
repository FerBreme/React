import { Link } from "react-router-dom";
import CartImage from "./CartImg.png";
import { useContext, useState } from "react";
import { CartContext } from "../cart/cartContext";
const CartWidget = () =>{
    const [cartLength] = useContext(CartContext)
    let length = cartLength.length
    console.log(length)
    return(
        <Link to="/cart"> 
            
             {cartLength.length != 0 ? <b> {length}</b> : null}
             <img className="img_cart" src={CartImage} alt=" Icono del carrito de compras"/>
        
        </Link>
        

        
      
    )
}
export default CartWidget;