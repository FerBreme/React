import Counter from "./itemCount";
const ItemListContainer = (props) =>{
    return(
    <div>
        <h2 className="ItemContainer"> Bienvenido, soy {props.nombre}</h2>
        <Counter />
    </div>
    )
    
}
export default ItemListContainer;