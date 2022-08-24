import CustomNavbar from '../../components/Header/CustomNavbar';
import './PageCarrinhoCompras.css';
import Col from 'react-bootstrap/Col';

export default function PageCarrinhoCompras(props){
    const listItensCarrinho = props.itensCarrinho.map(livro => {
        <Col className="info-livros centralizado" key={livro.titulo}>
        <p className="titulo">    {livro.titulo} </p>
        <p className="autor"> <i> {livro.autor} </i> </p>
        <p className="preco">     {livro.preco} </p>
        <img src={livro.url} alt= {livro.titulo} height="250" width="250" />
        <br />
        <br />
      </Col>
    });

    console.log("Itens carrinho dentro da página Carrinho Compras: ");
    console.log(props.itensCarrinho);

    return (
        <>
            <CustomNavbar/>
            <h1 className='centralizado'> Carrinho de Compras </h1>
            {listItensCarrinho} 
        </>
    );
}