import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import './Footer.css';

export default function Footer () {
    return (
        <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src="/logo.svg"
              width="30"
              height="30"
              className="d-inline-block align-bottom"
            />
            React Bootstrap
          </Navbar.Brand>
        </Container>
      </Navbar>
    );
}