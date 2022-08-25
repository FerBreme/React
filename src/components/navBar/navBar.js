import CartWidget from "./cartWidget";

function NavBar () {
    return(
        <nav>
        <ul className="nav">
        <li>Inicio</li>
        <li>Productos</li>
        <li>Contacto</li>
        <li>Sobre Nosotros</li>
        <CartWidget />
        </ul>
      </nav>
    )
}
export default NavBar;