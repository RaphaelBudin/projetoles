import './ProdutoAdicionado.css';
import {useState} from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export default function ProdutoAdicionado(props){
    const [show, setShow] = useState(false);

    function handleClose(){
        setShow(false);
    };
    function handleShow(){
        setShow(true);
    };
    
  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Produto Adicionado</Modal.Title>
        </Modal.Header>
        <Modal.Body>Produto adicionado com sucesso!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Fechar
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Continuar Navegação
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}