import './ItemPedido.css';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import CardLivro from '../Livros/CardLivro';

export default function ItemPedido(props){
    const listItens = props.pedido.itens.map((livro)=>
                <CardLivro livro={livro} key={livro.id}/>
    );
    
    return (
        <Container className="container" fluid> 
            <Row> <h1>Pedido: {props.pedido.id} </h1></Row>                
            <Row> Valor: {props.pedido.valorTotal}</Row>
            <Row> Data e Hora da Compra: {props.pedido.dateTime} </Row>
            <Row><p className='status'>Status: <b>{props.pedido.status}</b></p></Row>
            <h3><u>ITENS</u></h3>
            <br/>
            <Row>{listItens}</Row>
            <br/>
            <br/>
            <br/>
        </Container>
    );
}