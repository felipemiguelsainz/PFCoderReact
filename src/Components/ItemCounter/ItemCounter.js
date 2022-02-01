import React,{useState} from 'react';
import {Link} from 'react-router-dom';
import  useCartContext  from "../CartContext/CartContext.js";
import './ItemCounter.css';

function ItemCounter (props) {
    const { isInCart } = useCartContext();
let [counterItem, setCounterItem] = useState(parseInt(1));
    const clickLess = () => {
        if (counterItem > 0){
        setCounterItem(counterItem - 1)
    }}
    const clickPlus = () => {
    if(counterItem === parseInt(props.stock)){
        alert(`Solo tenemos ${props.stock} unidades en stock`)
    }else if(counterItem < parseInt(props.stock)){
            setCounterItem(counterItem + 1)
    }}
    return(
        <>
            <div className="cantidadProductos">
                    <div className="pointer" onClick={clickLess}>-</div>
                    <div>{counterItem}</div>
                    <div className="pointer" onClick={clickPlus}>+</div>
            </div>
            {isInCart(props.id)?
            <div className='buttonCart'><Link className='linkCart hoverLink' to='/Cart'>Ir al Carrito</Link></div>
            :
            <button type="button" class="btn btn-dark buttonFinish" onClick={()=>{ props.onAdd(counterItem)}}><span>Enviar al Cart</span></button>
            }

        </>
    )}
export default ItemCounter;