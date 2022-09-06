import { Link } from "react-router-dom";
import CartWidget from "./cartWidget";

function NavBar () {
    return(
        <nav>
        <ul className="nav">
        <Link to="/">Inicio</Link>
        <li>Productos</li>
        <li>Contacto</li>
        <li>Sobre Nosotros</li>
        <CartWidget />
        </ul>
      </nav>
    )
}
export default NavBar;