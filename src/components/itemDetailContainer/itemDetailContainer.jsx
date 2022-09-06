import { useEffect, useState } from "react";
import CardItemDetail from "./itemDetail";
import { useParams } from "react-router-dom";

const GetItem = () =>{
    const [Item, setItem] = useState([]);
    let { id }= useParams();
    
    useEffect(() =>{
         setTimeout(()=>{
            fetch(`./catalogo.json/${id}`)
            .then((res)=> res.json())
            .then((json)=> setItem(json))
         }, 2000)
        
    }, []);
    console.log(Item);
    // return(Item.map((itemDetail)=>{
    //     return (
    //         <div key={id}>
    //             <CardItemDetail  data={itemDetail}/>
    //         </div>
    //     ) 
    // }))
    
    }

export default GetItem;