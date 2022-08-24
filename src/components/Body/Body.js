import "./Body.css";
//import InputPesquisa from "./InputPesquisa";
import Lancamentos from "./Lancamentos/Lancamentos";
import Container from "react-bootstrap/Container";
import MaisVendidos from "./MaisVendidos/MaisVendidos";

export default function Body(props) {
  return (
    <Container fluid>
        <Lancamentos/>
        <br/>
        <br/>
        <br/>
        <MaisVendidos adicionarCarrinho={props.adicionarCarrinho}/>
    </Container>
    
  );
}

//adicionar o <InputPesquisa>
