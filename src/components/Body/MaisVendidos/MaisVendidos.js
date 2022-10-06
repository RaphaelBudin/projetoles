import "./MaisVendidos.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import AddToCartButton from "../../Shopping/Cart/AddToCartButton";
import CardLivro from "../../Livros/CardLivro";

const livros = [
  {
    id: 1,  
    titulo: "Clean Code",
    autor: "Robert Cecil Martin",
    preco: 71.89,
    url: "https://images-na.ssl-images-amazon.com/images/I/41xShlnTZTL._SX376_BO1,204,203,200_.jpg",
    categorias:"Java",
  },
  {
    id: 2,
    titulo: "Clean Architecture",
    autor: "Robert Cecil Martin",
    preco: 67.56,
    url: "https://images-na.ssl-images-amazon.com/images/I/41-sN-mzwKL.jpg",
    categorias:"Java",
  },
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

export default function MaisVendidos(props) {

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
          id={livro.id}
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

  const listLivros2 = livros.map((livro)=>{
    return (
        <CardLivro 
          livro={livro}
          livroDetalhe={props.livroDetalhe} setLivroDetalhe={props.setLivroDetalhe}
          autorDetalhe={props.autorDetalhe} setAutorDetalhe={props.setAutorDetalhe}
        />      
    );
  });

  return (
    <>
      <br />
      <h1 className="centralizado"> Mais Vendidos </h1>
      <br />
      <Row>{listLivros}</Row>
      <Row>{listLivros2}</Row>
    </>
  );
}
