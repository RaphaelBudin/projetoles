import "./MaisVendidos.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import AddToCartButton from "../../Shopping/Cart/AddToCartButton";
import {useState} from 'react';

export default function MaisVendidos(props) {
  const [numLivros, setNumLivros] = useState(0);
  function getNumLivros(){
    return {numLivros};
  }

  const livros = [
    {
      titulo: "Clean Code",
      autor: "Robert Cecil Martin",
      preco: 71.89,
      url: "https://images-na.ssl-images-amazon.com/images/I/41xShlnTZTL._SX376_BO1,204,203,200_.jpg",
    },
    {
      titulo: "Clean Architecture",
      autor: "Robert Cecil Martin",
      preco: 67.56,
      url: "https://images-na.ssl-images-amazon.com/images/I/41-sN-mzwKL.jpg",
    },
    {
      titulo: "Desenvolvimento Ágil Limpo",
      autor: "Robert Cecil Martin",
      preco: 31.9,
      url: "https://m.media-amazon.com/images/I/41u6zi8JVML.jpg",
    },
    {
      titulo: "Scrum",
      autor: "Jeff Sutherland",
      preco: 71.89,
      url: "https://m.media-amazon.com/images/P/B07NCYLTKM.01._SCLZZZZZZZ_SX500_.jpg",
    },
  ];
  const listLivros = livros.map((livro) => {
    return (
      <Col className="info-livros" key={livro.titulo}>
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
          numLivros={getNumLivros}
          setNumLivros={setNumLivros}
        />
      </Col>
    );
  });

  return (
    <>
      <h1> Mais Vendidos </h1>
      <br /> <br />
      <Row>{listLivros}</Row>
    </>
  );
}
