import { useState } from "react";
const Counter = ({data}) =>{
     const [contador, setContador] = useState(0);
      const sumarContador = () =>{
         if (contador < 3) {
             setContador(contador + 1 );
         } else{
             alert('Excediste el limite actual de stock.');
         }
     }
      const restarContador = () => {
         if (contador > 0) {
             setContador(contador - 1);
         } else{
             alert('La cantidad seleccionada es invalida.');
         }
     }
     return(
         <div className="counterContainer">
             <div className="btnContainer">
                 <button onClick={sumarContador}>+</button>
                 <p className="counter">{contador}</p>
                 <button onClick={restarContador}>-</button>
             </div>
            {contador !=0 && <button className="cartLink" onClick={data}>Añadir al carrito</button>}
         </div>
     )
 }
 export default Counter;