import "./CustomNavbar.css";
import {useNavigate} from 'react-router-dom';
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import ImgCarrinhoCompras from '../../public/CarrinhoCompras.png';

export default function CustomNavbar(props) {
  const navigate = useNavigate();
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
              <Link to="/categorias/ruby" className="dropdown-link"> Ruby </Link> <br/>
              <Link to="/categorias/geral" className="dropdown-link"> Geral</Link> <br/>
            </NavDropdown>

            <NavDropdown title="Cadastros" id="collasible-nav-dropdown">
              <Link to="/cadastro/livro" className="dropdown-link"> Cadastro Livro </Link> <br/>
              <Link to="/cadastro/cliente" className="dropdown-link"> Cadastro Cliente </Link> <br/>
            </NavDropdown>
            
          </Nav>

          <div className="carrinho-compras" onClick={()=>{navigate('/carrinho-compras')}}>
            <img 
              src={ImgCarrinhoCompras}
              height="40"
              width="40"
            />
            <span className="contagem-produtos">{props.numProdutos}</span>
          </div>

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