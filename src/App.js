import { useState } from 'react';
import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario';

function App() {

  const [servidores, setServidores] = useState([]);

  const aoNovoServidorAdicionado = (servidor) => {
    console.log(servidor)
    setServidores([...servidores, servidor])
  }
  
  return (
    <div className="App">
      <Banner/>
      <Formulario 
      aoServidorCadastrado = { 
        servidor => aoNovoServidorAdicionado(servidor) 
      }
      />
    </div>
  );
}

export default App;
