import { useState, useEffect } from 'react';
import Item from '../Item/Item.js'
import './ItemList.css'
import { useParams } from 'react-router-dom';
import { collection, getDocs, query, where } from 'firebase/firestore';
import {db} from '../../Components/Service/Firebase/Firebase.js'


function ItemList () {
    const [items, setItems] = useState([]);
    const {categoryId} = useParams();

    
    useEffect(()=> {
        if (!categoryId){
            getDocs(collection(db, 'items')).then((querySnapshot) =>{
            const items = querySnapshot.docs.map(doc => {
                return{id: doc.id, ...doc.data()}
                
            })
            setItems(items)
        })  
        
    }else{
        getDocs(query(collection(db, 'items'), where('category', '==', categoryId))).then((querySnapshot) =>{
            const items = querySnapshot.docs.map(doc => {
                return{id: doc.id, ...doc.data()}
            })
            setItems(items)
        })
    }
    }, [categoryId])
    return(
        <div className='itemList'>
        {items.map(u => <Item id={u.id} imagen={u.imagen} titulo={u.titulo} origen={u.origen} stock={u.stock}/>)}
        </div>
    )}

export default ItemList;