import "./Lancamentos.css";
import Carousel from "react-bootstrap/Carousel";
import Livro from "../../Livros/Livro";
import React from 'react';

import dp_explained from '../../../public/dp_explained.webp';
import dp_intro from '../../../public/dp_intro.jpg';
import dp_java from '../../../public/dp_java.jpg';
import dp_ruby from '../../../public/dp_ruby.jpg';

const lancamentos = [
  {
    id: 1,
    titulo:"Design Patterns Explained",
    autor:"Autores X Editora Y", 
    sinopse: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam dapibus ante eget quam accumsan pretium. In auctor ultrices tortor, vitae tempor erat dictum non. Aliquam feugiat dolor rhoncus, ornare lacus et, condimentum nunc. Mauris varius dolor nec nisl molestie, at facilisis magna euismod. Vestibulum justo libero, pellentesque non accumsan eget, dapibus id ex. Donec volutpat tempor dapibus. Aliquam pulvinar enim sit amet interdum placerat. Aenean euismod dolor nisl, tincidunt tincidunt urna scelerisque id. Donec pellentesque lectus nec ligula condimentum condimentum.", 
    preco:100.0, 
    categorias:["Cat1","Cat2","Cat3"], 
    url:dp_explained,
    h:400,
    w:400,
  },
  {
    id: 2,
    titulo:"Design Patterns Intro",
    autor:"Autores X Editora Y", 
    sinopse: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam dapibus ante eget quam accumsan pretium. In auctor ultrices tortor, vitae tempor erat dictum non. Aliquam feugiat dolor rhoncus, ornare lacus et, condimentum nunc. Mauris varius dolor nec nisl molestie, at facilisis magna euismod. Vestibulum justo libero, pellentesque non accumsan eget, dapibus id ex. Donec volutpat tempor dapibus. Aliquam pulvinar enim sit amet interdum placerat. Aenean euismod dolor nisl, tincidunt tincidunt urna scelerisque id. Donec pellentesque lectus nec ligula condimentum condimentum.", 
    preco:12.0, 
    categorias:["Cat1","Cat2","Cat3"], 
    url:dp_intro,
    h:400,
    w:400,
  },
  {
    id: 3,
    titulo:"Design Patterns Java",
    autor:"Autores X Editora Y", 
    sinopse: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam dapibus ante eget quam accumsan pretium. In auctor ultrices tortor, vitae tempor erat dictum non. Aliquam feugiat dolor rhoncus, ornare lacus et, condimentum nunc. Mauris varius dolor nec nisl molestie, at facilisis magna euismod. Vestibulum justo libero, pellentesque non accumsan eget, dapibus id ex. Donec volutpat tempor dapibus. Aliquam pulvinar enim sit amet interdum placerat. Aenean euismod dolor nisl, tincidunt tincidunt urna scelerisque id. Donec pellentesque lectus nec ligula condimentum condimentum.", 
    preco:60.0, 
    categorias:["Cat1","Cat2","Cat3"], 
    url:dp_java, 
    h:400,
    w:400,
  },
  {
    id: 4,
    titulo:"Design Patterns Ruby",
    autor:"Autores X Editora Y", 
    sinopse: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam dapibus ante eget quam accumsan pretium. In auctor ultrices tortor, vitae tempor erat dictum non. Aliquam feugiat dolor rhoncus, ornare lacus et, condimentum nunc. Mauris varius dolor nec nisl molestie, at facilisis magna euismod. Vestibulum justo libero, pellentesque non accumsan eget, dapibus id ex. Donec volutpat tempor dapibus. Aliquam pulvinar enim sit amet interdum placerat. Aenean euismod dolor nisl, tincidunt tincidunt urna scelerisque id. Donec pellentesque lectus nec ligula condimentum condimentum.", 
    preco:10.0, 
    categorias:["Cat1","Cat2","Cat3"], 
    url:dp_ruby, 
    h:400,
    w:400,
  },
]
const listLancamentos = lancamentos.map((livro) => {
    return (<Carousel.Item>
      <Livro
        id={livro.id} 
        titulo={livro.titulo}
        autor={livro.autor}
        sinopse={livro.sinopse}
        preco={livro.preco}
        categorias={livro.categorias}
        src={livro.url}
        alt={livro.titulo}
        className="d-block w-10"
      />
    </Carousel.Item>
    );
});

export default function Lancamentos() {
  return (
    <React.Fragment>
      <br/>
      <h1> Últimos Lançamentos </h1>
      <Carousel className="container" variant="dark" interval={1500}>
        {listLancamentos}
      </Carousel>
    </React.Fragment>
  );
}

