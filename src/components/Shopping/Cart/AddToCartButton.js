import "./AddToCartButton.css";
import Logo from "../../../public/cart-icon-transparent.png";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useNavigate } from "react-router-dom";

export default function AddToCartButton(props) {
  const [show, setShow] = useState(false);
  const navigate = useNavigate();

  function handleClose() {setShow(false);}
  function handleCloseCarrinho(){
    handleClose();
    navigate('/carrinho-compras');  
  }
  function handleShow() {setShow(true);}

  function clickHandler() {
    props.adicionarCarrinho({titulo:props.titulo, autor:props.autor, preco:props.preco, url:props.url, altura:props.height, largura:props.width});
    handleShow();
  }

  function submitHandler(event) {
    event.preventDefault();
  }

  return (
    <>
      <button onSubmit={submitHandler} className="button">
        <figure onClick={clickHandler}>
          <img
            src={Logo}
            alt="Adicione este produto ao carrinho!"
            width="50"
            height="50"
          />
          <figcaption>
            <u className="text-carrinho"> Adicionar ao Carrinho </u>
          </figcaption>
        </figure>
        <br />
        <br />
        <br />
      </button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Produto Adicionado</Modal.Title>
        </Modal.Header>
        <Modal.Body>Produto adicionado ao carrinho com sucesso!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseCarrinho}>
            Ir para Carrinho
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Continuar Navegação
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
