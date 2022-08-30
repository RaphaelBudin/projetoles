//import "./CategoriaGeral.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import AddToCartButton from "../../../components/Shopping/Cart/AddToCartButton";
import CustomNavbar from "../../../components/Header/CustomNavbar";

export default function CategoriaGeral(props) {

  const livros = [
    {
      id: 3,
      titulo: "Desenvolvimento Ágil Limpo",
      autor: "Robert Cecil Martin",
      preco: 31.9,
      url: "https://m.media-amazon.com/images/I/41u6zi8JVML.jpg",
      categorias:"Geral",
    },
    {
      id: 4,
      titulo: "Scrum",
      autor: "Jeff Sutherland",
      preco: 71.89,
      url: "https://m.media-amazon.com/images/P/B07NCYLTKM.01._SCLZZZZZZZ_SX500_.jpg",
      categorias:"Geral",
    },
  ];

  const listLivros = livros.map((livro) => {
    return (
      <Col className="info-livros centralizado" key={livro.id}>
        <p className="titulo">    {livro.titulo} </p>
        <p className="autor"> <i> {livro.autor} </i> </p>
        <p className="preco">     {livro.preco} </p>
        <img src={livro.url} alt= {livro.titulo} height="250" width="250" />
        <br />
        <br />
        <AddToCartButton
          adicionarCarrinho={props.adicionarCarrinho}
          titulo={livro.titulo}
          autor={livro.autor}
          preco={livro.preco}
          url={livro.url}
          height="250"
          width="250"
        />
      </Col>
    );
  });

  return (
    <>
      <CustomNavbar numLivros={props.numLivros}/>
      <br />
      <h1 className="centralizado"> Geral </h1>
      <br />
      <Row>{listLivros}</Row>
    </>
  );
}
