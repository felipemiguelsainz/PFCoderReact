import UseCartContext from '../CartContext/CartContext';

function CarritoNavBar (props){
    const {getQtyCart} = UseCartContext();

    return(
        <>
            <div><span>{getQtyCart()}</span></div>
        </>
    )
}
export default CarritoNavBar;