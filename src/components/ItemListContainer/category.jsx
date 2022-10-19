import React from 'react'
import { useState, useEffect } from 'react';
import { query, collection, where, getDocs } from 'firebase/firestore';
import { db } from '../../firebase/firebaseConfig';
import { Link, useParams } from 'react-router-dom';
import CardItem from './item';



const Category = () => {
    const [Items, setItems] = useState([]);
    let { category }= useParams();
    
    const getProds = async () => {
        const docs = [];
        const q = query(collection(db, "products"), where("category", "==", category));
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
            docs.push({...doc.data(), id: doc.id})
        
          });
        setItems(docs);
    }
    
   useEffect(() => {
        getProds();
   }, [category])
   

   return(
    <div className="prodContainer">
        {
            Items.map((item)=>{
                return(
                    <Link key={item.id} className="link" to={`/details/${item.id}`} >
                        <CardItem data={item} />
                    </Link>
                ) 
                
            })
        }
    </div>
)
}

export default Category