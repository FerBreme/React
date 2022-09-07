import { useEffect, useState } from "react";
import CardItemDetail from "./itemDetail";
import { useParams } from "react-router-dom";

const GetItem = () => {
    const [Item, setItem] = useState([]);
    let { id }= useParams();
    
    useEffect(() =>{
         setTimeout(()=>{
            fetch('../catalogo.json')
            .then((res)=> res.json())
            .then((json)=> setItem(json))
         }, 1000)
        
    }, []);
        const item = Item.find(itemDetail => id == itemDetail.id );
        console.log(item);
    
      
    if (item != undefined) {
        return(
            <div className="card-detail">
                <CardItemDetail data={item}/>
            </div>
            
          )
    }
    
    }

export default GetItem;