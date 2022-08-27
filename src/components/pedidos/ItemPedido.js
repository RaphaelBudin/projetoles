import './ItemPedido.css';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

export default function ItemPedido(props){
    //const itensPedido = props.itensPedido.map((livro) => livro);
    
    return (
        <Container>
            <h1> Resumo do Pedido </h1>
            <p> 
                ID do Pedido: 
                {props.idPedido}
            </p>
            <br/>
            <br/>
            <br/>
            <h3> Itens Pedido: </h3>
            <Row> 
                <Col>
                </Col>
            </Row>
        </Container>
    );
}