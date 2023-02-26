
import './App.css';
import Encabezamiento from './componentes/Encabezamiento';
import Principal from './componentes/Principal';
import Pie from './componentes/Pie';

function App() {
  return (
    <div className='App'>
      <Encabezamiento></Encabezamiento>
      <Principal></Principal>
      <Pie></Pie>
    </div>
  );
}

export default App;
