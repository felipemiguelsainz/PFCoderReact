import UseCartContext from "../CartContext/CartContext";

function CarritoNavBar (props){
    const {getQtyCart} = UseCartContext();

    return(
        <>
            <div><i class="fas fa-shopping-cart"></i><span>{getQtyCart()}</span></div>
        </>
    )
}
export default CarritoNavBar;