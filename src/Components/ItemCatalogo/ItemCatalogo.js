import ItemList from "../ItemList/ItemList.js";
import '../ItemCatalogo/ItemCatalogo.css'
import {db} from '../../Service/Firebase/Firebase'


function ItemCatalogo(){
    console.log(db)
    return(
        <div className='catalogo'>
            <ItemList/>
        </div>
    )
}
export default ItemCatalogo;