import "./CategoriaJava.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import AddToCartButton from "../../../components/Shopping/Cart/AddToCartButton";
import CustomNavbar from "../../../components/Header/CustomNavbar";
import Footer from "../../../components/Footer/Footer";

export default function CategoriaJava(props) {

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
      <h1 className="centralizado"> Java </h1>
      <br />
      <Row>{listLivros}</Row>
    </>
  );
}
