import { useState } from "react";
const Counter = ({event, stock}) =>{
     const [contador, setContador] = useState(0);

     return(
         <div className="counterContainer">
             <div className="btnContainer">
                 { contador < stock ? <button onClick={() => setContador(contador +1)}>+</button> : null}
                 <p className="counter">{contador}</p>
                 { contador > 0 ? <button onClick={() => setContador(contador -1)}>-</button> : null}
             </div>
            {contador !=0 && <button className="cartLink" onClick={event}>Añadir al carrito</button>}
         </div>
     )
 }
 export default Counter;