import CustomNavbar from '../../components/Header/CustomNavbar';
import './PageCarrinhoCompras.css';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import CloseButton from 'react-bootstrap/CloseButton';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import {useState} from 'react';
import { useNavigate } from 'react-router-dom';

export default function PageCarrinhoCompras(props){

    const listItensCarrinho = props.itensCarrinho.map(livro => {
       return <Col className="info-livros centralizado" key={livro.titulo}>
            <p className="titulo">    {livro.titulo} </p>
            <p className="autor"> <i> {livro.autor} </i> </p>
            <p className="preco">     {livro.preco} </p>
            <img src={livro.url} alt= {livro.titulo} height="250" width="250" />
            <br />
            <br />
            <CloseButton className="excluir-produto" value={livro.titulo} onClick={removerCarrinho} aria-label="Excluir Produto"/>
        </Col>
    });

    function removerCarrinho(evento){
        props.removerCarrinho(evento.target.value);
    }

    //
    const [show, setShow] = useState(false);
    const navigate = useNavigate();
    function finalizarCompra(evento){
        handleClose();
        navigate('/pagamento');
    }

    function handleClose(){
        setShow(false);
    }

    return (
        <>
            <CustomNavbar />
            <Container className='margem-acima-p centralizado'>
                
                <h1 className=''> 
                    Carrinho de Compras
                    ({props.numLivros}) 
                </h1>
                
                <h2 className='margem-acima-p'> 
                    Total: 
                    {props.totalCarrinho.
                    toLocaleString(undefined,{maximumFractionDigits:2, minimumFractionDigits:2})} 
                </h2>                
                
                <Row>{listItensCarrinho}</Row>
                
                <br/> <br/>
                <Row>
                    <Col>
                        <Button 
                            onClick={finalizarCompra} 
                            className='botao centralizado' 
                            disabled={(props.itensCarrinho.length==0)}
                            >
                            Confirmar Compra
                        </Button>
                    </Col> 
                </Row>
                
            </Container>
            
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Produto Adicionado</Modal.Title>
                </Modal.Header>
                <Modal.Body>Você será redirecionado a tela de pagamentos...</Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={finalizarCompra}>
                        Ir para Pagamento
                    </Button>
                </Modal.Footer>
            </Modal>        
        </>
    );
}