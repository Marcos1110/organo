import './Formulario.css';
import CampoTexto from '../CampoTexto';
import ListaSuspensa from '../ListaSuspensa';
import Botao from '../Botao';

const Formulario = () => {

   const grupos = [
      'Vingadores',
      'Quarteto Fantástico',
      'X-Men',
      'Guardiões da Galáxia',
      'Thunderbolts',
      'Eternos',
      'Agentes do Atlas'
   ]

   const AoSalvar = (evento) => {
      evento.preventDefault()
      console.log("Formulário cadastrado!!")
   }

   return (
      <section className='formulario'>
         <form onSubmit={ AoSalvar }>
         <h2>Preencha os dados para criar o card do herói:</h2>
            <CampoTexto obrigatorio={ true } label = "Nome" placeholder = "Ex:Tony Stark"/>
            <CampoTexto obrigatorio={ true } label = "Alter Ego" placeholder = "Ex: Homem de Ferro"/>
            <CampoTexto label = "Imagem" placeholder = "Insira o endereço da imagem aqui..."/>
            <ListaSuspensa obrigatorio={ true } label="Equipe" itens = { grupos }/>
            <Botao>
               Cadastrar Herói
            </Botao>
         </form>
      </section>
  )
}

export default Formulario;