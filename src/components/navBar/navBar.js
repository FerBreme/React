import { Link } from "react-router-dom";
import CartImage from "./CartImg.png";
import { useContext } from "react";
import { CartContext } from "../cart/cartContext";
function NavBar () {
  const [cart] = useContext(CartContext);

    return(
        <nav>
        <ul className="nav">
        <Link className="li" to="/">Inicio</Link>
        <Link className="li" to="/category/Lentes">Lentes</Link>
        <Link className="li" to="/category/Anillos">Anillos</Link>
        <Link className="li" to="/category/Cadenas">Cadenas</Link>
        <Link className="li" to="/category/Relojeria">Relojes</Link>
        <Link to="/cart">
            {cart.length != 0 && <b>{cart.length}</b>}      
            <img className="img_cart" src={CartImage} alt=" Icono del carrito de compras"/>
            
       </Link>
        </ul>
      </nav>
    )
}
export default NavBar;