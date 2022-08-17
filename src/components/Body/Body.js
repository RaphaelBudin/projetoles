import "./Body.css";
import InputPesquisa from "./InputPesquisa";
import Lancamentos from "./Lancamentos/Lancamentos";
import Container from "react-bootstrap/Container";

export default function Body() {
  return (
    <Container fluid>
        <InputPesquisa/>
        <Lancamentos/>    
    </Container>
    
  );
}
