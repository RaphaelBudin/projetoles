import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import "./Footer.css";
import LogoFatec from "../../public/logo-fatec-transparente.png";

export default function Footer() {
  return (
    <Navbar bg="dark" variant="dark" className="footer-navbar" sticky="bottom">
      <Container className="container">
        <Navbar.Brand href="#home">
          <img
            alt=""
            src={LogoFatec}
            width="75"
            height="75"
            className="d-inline-block align-bottom"
          />
        </Navbar.Brand>
        <Navbar.Text>
        Projeto desenvolvido para atender a disciplina de LES na Fatec Mogi das Cruzes.
        </Navbar.Text>
      </Container>
    </Navbar>
  );
}
