import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Modal from 'react-bootstrap/Modal';
import { useNavigate } from 'react-router-dom';
import {useState} from 'react';

export default function FormPagamento(props){
    const navigate = useNavigate();

    function submitHandler(evento){
        evento.preventDefault();
        handleShow();
    }

    const [show, setShow] = useState(false);
    function handleShow(){
        setShow(true);
    }

    function handleClose(){
        setShow(false);
    }

    function handleCloseProcessamento(){
        handleClose();
        navigate('/processamento');
    }

    return (
        <Container>
            <Form onSubmit={submitHandler}>

                <Form.Group className="margem-acima-m">
                    <Form.Label>NÚMERO C.C </Form.Label>
                    <Form.Control 
                        type="number" 
                        placeholder='5555 9999 8888 7777'
                        min="0"
                        
                    />
                    <Form.Text> Insira apenas os números (sem espaços) </Form.Text>
                </Form.Group>
                
                <Form.Group className="margem-acima-m">
                    <Form.Label>NOME C.C </Form.Label>
                    <Form.Control 
                        type="text" 
                        placeholder='Pedro H A S Ferreira'
                        
                    />
                    <Form.Text> Insira o nome como aparece no cartão (incluindo abreviações) </Form.Text>
                </Form.Group>

                <Row>
                   <Col>
                        <Form.Group className="margem-acima-m">
                            <Form.Label>Data Validade - MÊS </Form.Label>
                            <Form.Control 
                                type="number"
                                placeholder="12" 
                                
                        />
                        </Form.Group>
                   </Col> 
                
                <Col>
                    <Form.Group className="margem-acima-m">
                        <Form.Label>Data Validade - ANO </Form.Label>
                        <Form.Control 
                            type="number"
                            placeholder="27" 
                            
                            />
                    </Form.Group>
                </Col>
                
                <Col>
                    <Form.Group className="margem-acima-m">
                        <Form.Label>Código Verificação </Form.Label>
                        <Form.Control 
                            type="number" 
                            placeholder='123'
                            
                        />
                    </Form.Group>
                </Col>
                </Row>
                
                <br/>
                <Button variant="primary" type="submit" className="">
                    Pagar
                </Button>
            </Form>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Produto Adicionado</Modal.Title>
                </Modal.Header>
                <Modal.Body>Produto adicionado ao carrinho com sucesso!</Modal.Body>
                <Modal.Footer>
                <Button variant="primary" onClick={handleCloseProcessamento}>
                    Ok
                </Button>
                </Modal.Footer>
            </Modal>

        </Container>
    );
}