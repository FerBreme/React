import { useEffect, useState } from "react";
import CardItem from "./item";
import { Link } from "react-router-dom";
import { collection, query, where, getDocs } from "firebase/firestore";
import {db} from "../../firebase/firebaseConfig"
import Spinner from "../Spinner/Spinner";

const Catalogo = () => {
    const [Items, setItems] = useState([]);
    const [isLoad, setIsLoad] = useState(true);
    const getProds = async () => {
        const docs = [];
        const q = query(collection(db, "products"));
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
            docs.push({...doc.data(), id: doc.id})
        
          });
        setItems(docs);
    }
    
   useEffect(() => {
        getProds();
   }, [])
   setTimeout( () => setIsLoad(false), 1500)

    return(
        <div className="prodContainer">
            {
                isLoad ? <Spinner /> :
                (Items.map((item)=>{
                    return(
                        <Link key={item.id} className="link" to={`/details/${item.id}`} >
                            <CardItem data={item} />
                        </Link>
                    ) 
                    
                }))
            }
        </div>
    )
    }

export default Catalogo;

