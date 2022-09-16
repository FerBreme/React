 import { createContext } from "react";
 import { useState } from "react";
 export const CartContext = createContext();

 const ItemsProvider = ({children}) =>{
     const [items, setItems] = useState([]);
     return(
         <CartContext.Provider value={[items, setItems]}>

             {children}
         </CartContext.Provider>
     )
 }

 export default ItemsProvider;