import './App.css';
import ItemCatalogo from '../src/Components/ItemCatalogo/ItemCatalogo.js';
import ItemCartContainer from './Components/ItemCartContainer/ItemCartContainer.js'
import LandingHeader from './Components/LandingHeader/LandingHeader.js';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer.js';
import {CartContextProvider} from './Components/CartContext/CartContext.js'
import Footer from './Components/Footer/Footer.js';
import {db} from '../src/Service/Firebase/Firebase'

function App() {
  console.log(db)
  
  return (
    <CartContextProvider>
      <BrowserRouter>
        <LandingHeader />
          <Switch>
            <Route path='/'>
                <ItemCatalogo />
            </Route>
            <Route path='/category/:categoryId'>
                <ItemCatalogo />
            </Route>
            <Route path='/detail/:paramId'>
                <ItemDetailContainer />
            </Route>
            <Route path='/Cart'>
                <ItemCartContainer />
            </Route>
          </Switch>
      </BrowserRouter>
      <Footer />
    </CartContextProvider>
    
  );
}

export default App;
