import "./Servidor.css"

const Servidor = ({nome, imagem, cargo}) => {
   return (
      <div className="servidor">
         <div className="cabecalho">
            <img src={ imagem} alt={ nome }/>
         </div>

         <div className="rodape">
            <h4>{ nome }</h4>
            <h5>{ cargo }</h5>
         </div>
      </div>
   )
}

export default Servidor;