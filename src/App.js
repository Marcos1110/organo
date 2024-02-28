import { useState } from 'react';
import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario';
import Departamento from './componentes/Departamento';

function App() {

  const departamentos = [
    {
      nome: "Licitação",
      corPrimaria: "#82CFFA",
      corSecundaria: "#E8F8FF",
    },
    {
      nome: "Compras",
      corPrimaria: "#E06B69",
      corSecundaria: '#FDE7E8',
    },
    {
      nome: "Financeiro",
      corPrimaria: "#57C278",
      corSecundaria: "#D9F7E9",
    },
    {
      nome: "Recursos Humanos",
      corPrimaria: "#FF8A29",
      corSecundaria: "#FFEEDF",
    },
    {
      nome: "Controle Interno",
      corPrimaria: "#DB6EBF",
      corSecundaria: "#FAE9F5",
    },
    {
      nome: "Informática",
      corPrimaria: "#A6D157",
      corSecundaria: "#F0F8E2",
    },
    {
      nome: "Arquivo",
      corPrimaria: "#FEBA05",
      corSecundaria: "#FFF5D9",
    }
  ]

  const [servidores, setServidores] = useState([]);

  const aoNovoServidorAdicionado = (servidor) => {
    console.log(servidor)
    setServidores([...servidores, servidor])
  }
  
  return (
    <div className="App">
      <Banner/>
      <Formulario
        departamentos = { departamentos.map( departamento => departamento.nome ) }
        aoServidorCadastrado = { 
          servidor => aoNovoServidorAdicionado(servidor) 
        }
      />
      {
        departamentos.map (
          departamento => <Departamento key = { departamento.nome } 
                                nome = { departamento.nome }
                                corPrimaria = { departamento.corPrimaria }
                                corSecundaria = { departamento.corSecundaria }
                                servidores = { servidores.filter(servidor => servidor.departamento === departamento.nome) }
                          />
        )
      }
    </div>
  );
}

export default App;
