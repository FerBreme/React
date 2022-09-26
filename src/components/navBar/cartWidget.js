import { Link } from "react-router-dom";
import CartImage from "./CartImg.png";

const CartWidget = () =>{
    return(
        <Link to="/cart"> 
        <img className="img_cart" src={CartImage} alt=" Icono del carrito de compras"/>
        </Link>
        

        
      
    )
}
export default CartWidget;