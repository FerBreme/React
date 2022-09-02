// import Counter from "./item";
import Catalogo from "./itemList";
const ItemListContainer = (props) =>{
    return(
    <div>
        <h2 className="ItemContainer"> Bienvenido, soy {props.nombre}</h2>
        <Catalogo />
    </div>
    )
    
}
export default ItemListContainer;