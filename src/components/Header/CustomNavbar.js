import "./CustomNavbar.css";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";

export default function CustomNavbar() {
  function clickHandler(event){
    event.preventDefault();
  }

  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      
      <Container fluid>

        <Link to="/" className="link brand"> PROJETO LES </Link>    

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          
          <Nav className="me-auto">
            <Link to="/mais-vendidos" className="link main-link">Mais Vendidos</Link>
            <Link to="/lancamentos" className="link main-link">Lançamentos</Link>

            <NavDropdown title="Categorias" id="collasible-nav-dropdown">
              <Link to="/categorias/java" className="dropdown-link"> Java </Link> <br/>
              <Link to="/categorias/java" className="dropdown-link"> Ruby </Link> <br/>
              <Link to="/categorias/java" className="dropdown-link"> Geral</Link> <br/>
            </NavDropdown>

            <NavDropdown title="Cadastros" id="collasible-nav-dropdown">
            <Link to="/cadastro/livro" className="dropdown-link"> Cadastro Livro </Link> <br/>
            <Link to="/cadastro/cliente" className="dropdown-link"> Cadastro Cliente </Link> <br/>
              
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

/*
        <Navbar.Brand href="/" >Projeto LES</Navbar.Brand>


<NavDropdown.Item href="/todos-livros/java">Java</NavDropdown.Item>
<NavDropdown.Item href="/todos-livros/ruby">Ruby</NavDropdown.Item>
<NavDropdown.Item href="/todos-livros/geral">Geral</NavDropdown.Item>

<NavDropdown.Item href="/cadastro-livro">Cadastro Livro</NavDropdown.Item>
<NavDropdown.Item href="/cadastro-cliente">Cadastro Cliente</NavDropdown.Item>

*/