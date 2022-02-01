import './NavBar.css'
import CarritoNavBar from '../CarritoNavBar/CarritoNavBar.js';
import {Link} from 'react-router-dom';


function NavBar (){

return(
    <>
    <div className='containerNavBar '>
        <Link to="/" className='logoNavBar hoverLink'>LD</Link>
        
        <div class="dropdown ">
            <button class="btn btn-secondary dropdown-toggle transparent" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                Categorias
            </button>
            <ul class="dropdown-menu " aria-labelledby="dropdownMenuButton1">
                <li><Link to='/category/Espana' className='dropdown-item hoverLink'>Quesos Espana</Link></li>
                <li><Link to='/category/Argentina' className='dropdown-item hoverLink'>Quesos Argentina</Link></li>
                <li><Link to='/category/Chile' className='dropdown-item hoverLink'>Quesos Chile</Link></li>
            </ul>
        </div>
        <Link to='/Cart' className='itemNavBar hoverLink'><CarritoNavBar /></Link>
    </div>
    </>
)
}
export default NavBar;