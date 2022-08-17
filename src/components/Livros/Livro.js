import './Livro.css';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';

export default function Livro (props) {
    return (
        <Container className="container">
            <Col>
                <img 
                    src={props.src} 
                    alt={props.alt} 
                    className="imagem"
                />
            </Col>
            <Col>
                <div className='info'>
                    <h3> {props.titulo}</h3>
                    <h4> {props.autor} </h4>
                </div>
            </Col>
        </Container>
    );
}