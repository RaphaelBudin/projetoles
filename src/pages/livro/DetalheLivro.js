import "./DetalheLivro.css";
import Col from 'react-bootstrap/Col';
import AddToCartButton from "../../components/Shopping/Cart/AddToCartButton";

export default function DetalheLivro(props) {
  return (
    <>
      <Col className="info-livros centralizado" key={props.livroDetalhe.id}>
        <p className="titulo"> {props.livroDetalhe.titulo} </p>
        <p className="autor">
          <i> {props.livroDetalhe.autor} </i>
        </p>
        <p className="preco"> {props.livroDetalhe.preco} </p>
        <img src={props.livroDetalhe.url} alt={props.livroDetalhe.titulo} height="250" width="250" />
        <br />
        <br />
        <AddToCartButton
          adicionarCarrinho={props.adicionarCarrinho}
          titulo={props.livroDetalhe.titulo}
          autor={props.livroDetalhe.autor}
          preco={props.livroDetalhe.preco}
          url={props.livroDetalhe.url}
          height="250"
          width="250"
        />
      </Col>
    </>
  );
}
