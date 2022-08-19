import "./Body.css";
import InputPesquisa from "./InputPesquisa";
import Lancamentos from "./Lancamentos/Lancamentos";
import Container from "react-bootstrap/Container";
import MaisVendidos from "./MaisVendidos/MaisVendidos";

export default function Body() {
  return (
    <Container fluid>
        <Lancamentos/>
        <br/>
        <br/>
        <br/>
        <MaisVendidos/>
    </Container>
    
  );
}

//adicionar o <InputPesquisa>
