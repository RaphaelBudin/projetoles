import Container from "react-bootstrap/Container";
import Carousel from "react-bootstrap/Carousel";
import "./Lancamentos.css";
import Livro from "../../Livros/Livro";
import React from 'react';

export default function Lancamentos() {
  return (
    <React.Fragment>
      <br/>
      <h1> Últimos Lançamentos </h1>
      <Carousel className="container" variant="dark" interval={1500}>
        <Carousel.Item>
          <Livro
            className="d-block w-10"
            src="https://images-na.ssl-images-amazon.com/images/I/51YC9nPgbhS.jpg"
            alt="Alt do primeiro slide"
            titulo="Design Patterns I"
            autor="Múltiplos Autores"
          />
        </Carousel.Item>

        <Carousel.Item>
          <Livro
            className="d-block w-10"
            src="https://m.media-amazon.com/images/I/41XLSYVVWuL.jpg"
            alt="Alt do primeiro slide"
            titulo="Design Patterns II"
            autor="Casa do Código + Alura"
          />
        </Carousel.Item>

        <Carousel.Item>
          <Livro
            className="d-block w-10"
            src="https://m.media-amazon.com/images/I/51inXHEQAJL.jpg"
            alt="Alt do primeiro slide"
            titulo="Design Patterns III"
            autor="Russ Olsen"
          />
        </Carousel.Item>

        <Carousel.Item>
          <Livro
            className="d-block w-10"
            src="https://images-americanas.b2w.io/produtos/1994688832/imagens/livro-design-patterns-explained-a-new-perspective-on-object-oriented-design/1994688832_1_large.jpg"
            alt="Alt do primeiro slide"
            titulo="Design Patterns IV"
            autor="Autores X Editora Y"
          />
        </Carousel.Item>
      </Carousel>
    </React.Fragment>
  );
}
