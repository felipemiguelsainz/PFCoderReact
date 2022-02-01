import './ItemDetail.css'
import ItemCounter from '../ItemCounter/ItemCounter.js';
import  useCartContext  from "../CartContext/CartContext.js";

function ItemDetail (props){

    const { addItem } = useCartContext();

    function onAdd(qty) {
        addItem(props, qty);
    }
    return(
        <>
            <div className='modalContent'>  
                    <img className="imgItemModal" src={props.imagen} alt="Imagen Proximamente"/>
                    <h2>{props.titulo}</h2>
                    <p className='itemDescripcion'>{props.origen}</p>
                    <p className='itemDescripcion'>{props.precio}</p>
                    <ItemCounter precio={props.precio} stock={props.stock} onAdd={onAdd} id={props.id} initial="0" />
                    
            </div>
        </>
            )}

export default ItemDetail;