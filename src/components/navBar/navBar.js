import { Link } from "react-router-dom";
import CartWidget from "./cartWidget";
function NavBar () {
    return(
        <nav>
        <ul className="nav">
        <Link className="li" to="/">Inicio</Link>
        <Link className="li" to="/">Productos</Link>
        <Link className="li" to="/">Contacto</Link>
        <Link className="li" to="/">Sobre Nosotros</Link>
        <CartWidget />
        </ul>
      </nav>
    )
}
export default NavBar;