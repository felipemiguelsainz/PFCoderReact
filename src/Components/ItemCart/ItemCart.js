import  useCartContext  from "../CartContext/CartContext.js";
import './ItemCart.css'

function ItemCart (props) {
    const {removeFromCart} = useCartContext();
    return(
        <div className="containerItemCart">
            <div><img src={props.imagen} alt="Imagen Proximamente..."/></div>
            <div className="itemCartTitulo">{props.titulo}</div>
            <div className="itemCartCantidad">Cantidad: {props.cantidad}</div>
            <div className="itemCartTotal">Total: {props.precio * props.cantidad}</div>
            <div className="itemCartTrash"><i onClick={()=>{removeFromCart(props.id)}} class="fas fa-trash"></i></div>
        </div>
    )
}
export default ItemCart;