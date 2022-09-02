import { useEffect, useState } from "react";
import CardItem from "./item";
import Data from "../../catalogo.json"

const Catalogo = () =>{
    const [Items, setItems] = useState([]);
    
    useEffect(() =>{
         setTimeout(()=>{
            fetch(Data)
            .then((res)=> res.json())
            .then((json)=> setItems(json))
         }, 2000)
        
    }, []);

    return(
        <div>
            {
                Items.map((item)=>{
                    return <CardItem key={item.id} data={item}/>
                })
            }
        </div>
    )
    }

export default Catalogo;

