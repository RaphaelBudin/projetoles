import "./InputPesquisa.css";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export default function InputPesquisa() {
  return (
    <Container className="container" fluid>
      <br/>
      <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Pesquise por ISBN, Autor, Tìtulo, Subtítulo ou Categoria"
              className="me-2"
              aria-label="Procurar"
            />
            <Button variant="outline-success">Procurar</Button>
          </Form>
    </Container>
  );
}
