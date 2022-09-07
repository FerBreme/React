import { useEffect, useState } from "react";
import CardItem from "./item";
import { Link } from "react-router-dom";

const Catalogo = () => {
    const [Items, setItems] = useState([]);
    
    useEffect(() =>{
         setTimeout(()=>{
            fetch('./catalogo.json')
            .then((res)=> res.json())
            .then((json)=> setItems(json))
         }, 2000)
        
    }, []);

    return(
        <div className="prodContainer">
            {
                Items.map((item)=>{
                    return(
                        <Link className="link" to={`/details/${item.id}`} >
                            <CardItem key={item.id} data={item}/>
                        </Link>
                    ) 
                    
                })
            }
        </div>
    )
    }

export default Catalogo;

