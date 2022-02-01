import { useEffect, useState } from "react"
import ItemDetail from "../ItemDetail/ItemDetail.js"
import { useParams } from "react-router-dom"
import {db} from '../../Components/Service/Firebase/Firebase.js'
import {getDoc, doc} from 'firebase/firestore';

function ItemDetailContainer(){
    const [item, setItems] = useState(null)
    const {paramId} = useParams()
    useEffect(()=> {
        (getDoc(doc(db, 'items', paramId)).then((querySnapshot) => {
            const item = {id: querySnapshot.id, ...querySnapshot.data()}
            setItems(item)
        }))
        setItems(item)
    }, [paramId])
    return(
    <>
        {item? 
        <div>
            <ItemDetail precio={item.precio} imagen={item.imagen} stock={item.stock} titulo={item.titulo} origen={item.origen} conservado={item.conservado} id={item.id}/>
        </div>
        : <div>Cargando...</div>    
    }
    </>
    )}

export default ItemDetailContainer;