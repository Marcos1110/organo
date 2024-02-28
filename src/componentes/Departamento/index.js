import Servidor from "../Servidor";
import "./Departamento.css";

const Departamento = (props) => {
    const css = { backgroundColor: props.corSecundaria }
    
    return (
        <section className="dept" style={ css }>
            <h3 style={ { borderColor: props.corPrimaria } }>{props.nome}</h3>

            <div className="servidores">
                {props.servidores.map( servidor => <Servidor nome = { servidor.nome } cargo = { servidor.cargo } imagem = { servidor.imagem }
                /> )}
            </div>
        </section>
    )
}

export default Departamento;