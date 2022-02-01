import '../Item/Item.css'
import {Link} from 'react-router-dom';





function Items(props) {
    return(
        
        <div className='item'>
            <div className='listaDatos'>
                <img className="imgItem" src={props.imagen} alt="Imagen Proximamente"/>
                <div>{props.titulo}</div>
                <div className='buttonComprarItem'><Link className='linkComprarItem' to={`/detail/${props.id}`}>Comprar  <i class="fas fa-arrow-right"></i></Link></div>
            </div>
        </div>
        
        

)}
export default Items;