import './Formulario.css';
import CampoTexto from '../CampoTexto';
import ListaSuspensa from '../ListaSuspensa';
import Botao from '../Botao';
import { useState } from 'react';

const Formulario = (props) => {

   const [nome, setNome] = useState('')
   const [cargo, setCargo] = useState('')
   const [imagem, setImagem] = useState('')
   const [departamento, setDepartamento] = useState('')


   const aoSalvar = (evento) => {
      evento.preventDefault()
      props.aoServidorCadastrado ({
         nome,
         cargo,
         imagem,
         departamento
      })
  }

   return (
      <section className='formulario'>
         <form onSubmit={ aoSalvar }>
         <h2>Preencha os dados para criar o card do servidor:</h2>
            <CampoTexto 
            label = "Nome"
            obrigatorio={ true } 
            placeholder = "Digite o nome aqui..."
            valor = { nome }
            aoAlterado = { valor => setNome(valor) }
            />
            <CampoTexto 
            label = "Cargo" 
            obrigatorio={ true } 
            placeholder = "Digite o cargo aqui..."
            valor = { cargo }
            aoAlterado = { valor => setCargo(valor) }
            />
            <CampoTexto
            label = "Imagem" 
            placeholder = "Insira o endereço da imagem aqui..."
            valor = { imagem }
            aoAlterado = { valor => setImagem(valor) }
            />
            <ListaSuspensa label="Departamento"
            obrigatorio = { true } 
            itens = { props.departamentos }
            valor = { departamento }
            aoAlterado = { valor => setDepartamento(valor)}
            />
            <Botao> Cadastrar Servidor </Botao>
         </form>
      </section>
  )
}

export default Formulario;