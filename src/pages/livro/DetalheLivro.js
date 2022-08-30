import "./DetalheLivro.css";
import Col from 'react-bootstrap/Col';
import AddToCartButton from "../../components/Shopping/Cart/AddToCartButton";

export default function DetalheLivro(props) {
  return (
    <>
      <Col className="info-livros centralizado" key={props.livro.id}>
        <p className="titulo"> {props.livro.titulo} </p>
        <p className="autor">
          <i> {props.livro.autor} </i>
        </p>
        <p className="preco"> {props.livro.preco} </p>
        <img src={props.livro.url} alt={props.livro.titulo} height="250" width="250" />
        <br />
        <br />
        <AddToCartButton
          adicionarCarrinho={props.adicionarCarrinho}
          titulo={props.livro.titulo}
          autor={props.livro.autor}
          preco={props.livro.preco}
          url={props.livro.url}
          height="250"
          width="250"
        />
      </Col>
    </>
  );
}
