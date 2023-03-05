
import './App.css';
import Encabezamiento from './componentes/Encabezado';
import Principal from './componentes/Principal';
import Pie from './componentes/Pie';
import Lista from './componentes/lista/Lista';

function App() {
  return (
    <div className='App'>
      <Encabezamiento></Encabezamiento>
      <Principal>
        <Lista></Lista>
      </Principal>
      <Pie></Pie>
    </div>
  );
}

export default App;
