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
   return (
      <section className='formulario'>
         <form>
         <h2>Preencha os dados para criar o card do colaborador:</h2>
            <CampoTexto label = "Nome" placeholder = "Digite seu nome..."/>
            <CampoTexto label = "Cargo" placeholder = "Digite seu cargo..."/>
            <CampoTexto label = "Imagem" placeholder = "Digite o endereço da imagem..."/>
            <ListaSuspensa label="Equipe" itens = { grupos }/>
            <Botao>
               Criar Texto
            </Botao>
         </form>
      </section>
  )
}

export default Formulario;