import "./CustomNavbar.css";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

export default function CustomNavbar() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      
      <Container fluid>
        
        <Navbar.Brand href="#home">Projeto LES</Navbar.Brand>
        
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          
          <Nav className="me-auto">
            <Nav.Link href="/todos-livros">Todos os Livros</Nav.Link>
            <Nav.Link href="/lancamentos">Lançamentos</Nav.Link>

            <NavDropdown title="Categorias" id="collasible-nav-dropdown">
              <NavDropdown.Item href="/todos-livros/java">Java</NavDropdown.Item>
              <NavDropdown.Item href="/todos-livros/ruby">Ruby</NavDropdown.Item>
              <NavDropdown.Item href="/todos-livros/geral">Geral</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Cadastros" id="collasible-nav-dropdown">
              <NavDropdown.Item href="/cadastro-livro">Cadastro Livro</NavDropdown.Item>
              <NavDropdown.Item href="/cadastro-cliente">Cadastro Cliente</NavDropdown.Item>
            </NavDropdown>
          </Nav>

          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Pesquisa"
              className="me-2"
              aria-label="Procurar"
            />
            <Button variant="outline-success">Procurar</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
