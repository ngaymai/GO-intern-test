import './App.css';
import {ProductionList} from './components/ProductionList'
import {Cart} from './components/Cart'

function App() {
  return (
    <div className="flex md:flex-row  py-5 md:py-12 md:py7 main-content justify-between gap-4 md:gap-10">
     <ProductionList/>
     <Cart/>
    </div>
  );
}

export default App;
