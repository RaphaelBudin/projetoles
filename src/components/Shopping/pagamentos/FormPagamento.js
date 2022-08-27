import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Modal from 'react-bootstrap/Modal';
import { useNavigate } from 'react-router-dom';
import {useState} from 'react';
import { IMaskInput } from 'react-imask';


//Para o futuro quando implementar validação de cartão de crédito
var acceptedCreditCards = {
    visa: /^4[0-9]{12}(?:[0-9]{3})?$/,
    mastercard: /^5[1-5][0-9]{14}$|^2(?:2(?:2[1-9]|[3-9][0-9])|[3-6][0-9][0-9]|7(?:[01][0-9]|20))[0-9]{12}$/,
    amex: /^3[47][0-9]{13}$/,
    discover: /^65[4-9][0-9]{13}|64[4-9][0-9]{13}|6011[0-9]{12}|(622(?:12[6-9]|1[3-9][0-9]|[2-8][0-9][0-9]|9[01][0-9]|92[0-5])[0-9]{10})$/,
    diners_club: /^3(?:0[0-5]|[68][0-9])[0-9]{11}$/,
    jcb: /^(?:2131|1800|35[0-9]{3})[0-9]{11}$/
  };


export default function FormPagamento(props){
    const navigate = useNavigate();
    const [show, setShow] = useState(false);

    function submitHandler(evento){
        evento.preventDefault();
        props.geraPedido();
        setShow(true);
    }

    function handleCloseProcessamento(evento){
        evento.preventDefault();
        setShow(false);
        navigate('/processamento');
    }

    return (
        <Container>
            <Form>

                <Form.Group className="margem-acima-m" id="formNumCC">
                    <Form.Label>NÚMERO C.C </Form.Label>
                    <Form.Control 
                        placeholder='5555 9999 8888 7777'
                        as={IMaskInput}
                        mask="0000 0000 0000 0000"
                        required
                    />
                    <Form.Text> Insira apenas os números (sem espaços) </Form.Text>
                </Form.Group>
                
                <Form.Group className="margem-acima-m" id="formNomeCC">
                    <Form.Label>NOME C.C </Form.Label>
                    <Form.Control 
                        type="text" 
                        placeholder='Pedro H A S Ferreira'
                        required
                    />
                    <Form.Text> Insira o nome como aparece no cartão (incluindo abreviações) </Form.Text>
                </Form.Group>

                <Row>
                   <Col>
                        <Form.Group className="margem-acima-m" id="formDataValidade-Mes">
                            <Form.Label>Data Validade - MÊS </Form.Label>
                            <Form.Control 
                                type="number"
                                placeholder="12" 
                        />
                        </Form.Group>
                   </Col> 
                
                <Col>
                    <Form.Group className="margem-acima-m" id="formDataValidade-Ano">
                        <Form.Label>Data Validade - ANO </Form.Label>
                        <Form.Control 
                            type="number"
                            placeholder="27" 
                            
                            />
                    </Form.Group>
                </Col>
                
                <Col>
                    <Form.Group className="margem-acima-m" id="formCCV">
                        <Form.Label>Código Verificação </Form.Label>
                        <Form.Control 
                            type="number" 
                            placeholder='123'
                            
                        />
                    </Form.Group>
                </Col>
                </Row>
                
                <br/>
                <Button variant="primary" className="" id="formSubmit" onClick={submitHandler}>
                    Pagar
                </Button>
            </Form>

            <Modal show={show} onHide={()=>{setShow(false)}}>
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