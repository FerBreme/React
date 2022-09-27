import { useEffect, useState } from "react";
import CardItemDetail from "./itemDetail";
import { useParams } from "react-router-dom";
import { collection, query, where, getDocs, documentId } from "firebase/firestore";
import {db} from "../../firebase/firebaseConfig"

const GetItem = () => {
    const [Item, setItem] = useState([]);
    let { id }= useParams();
    
    const getProds = async () => {
        const docs = [];
        const q = query(collection(db, "products"), where(documentId(), "==", id));
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
            docs.push({...doc.data(), id: doc.id})
        
          });
        setItem(docs);
    }
    
   useEffect(() => {
        getProds();
   }, [])
     
         return(
             <div className="card-detail">
                {Item.map(item =>{
                    return(
                        <CardItemDetail data={item} key={item.id}/>
                    )
                    
                })}
                 
             </div>
            
           )
    
    }

export default GetItem;