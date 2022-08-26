import "./App.css";
import React, {useEffect, useState} from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import CadastroLivro from "./pages/livro/CadastroLivro";
import PageLancamentos from "./pages/lancamentos/PageLancamentos";
import PageMaisVendidos from "./pages/mais-vendidos/PageMaisVendidos";
import PageCadastroCliente from "./pages/cliente/PageCadastroCliente";
import PageCarrinhoCompras from "./pages/carrinho/PageCarrinhoCompras";
import PagePagamento from "./pages/pagamento/PagePagamento";
import PageProcessamento from "./pages/processamento/PageProcessamento";

function App() {
  //Variáveis que serão utilizados no Mock  

  //Itens do carrinho
  const [itensCarrinho, setItensCarrinho] = useState([]);
  const [totalCarrinho, setTotalCarrinho] = useState(0.00);
  const [idPedido, setIdPedido] = useState('');
  

  useEffect(()=>{
    if (itensCarrinho.length > 0){
      console.log("Itens atualmente no carrinho: ");
      console.log(itensCarrinho);
      const somaCarr = itensCarrinho
          .map(livro => livro.preco)
          .reduce((somaParcial, precoLivroAtual) => somaParcial + precoLivroAtual);
      setTotalCarrinho(somaCarr);
    }
    else{
      setTotalCarrinho(0.00);
    }
  }, [itensCarrinho]);

  function adicionarCarrinho(produto){
    console.log("Adicionando ao carrinho...");
    setItensCarrinho([...itensCarrinho, produto]);
  };

  function removerCarrinho(tituloLivro){
    const novoArray = itensCarrinho.filter(item => item.titulo != tituloLivro);
    setItensCarrinho(novoArray);
  }

  function geraPedido(){
    setIdPedido((Math.random()+1).toString(36).substring(7));
    console.log(idPedido);
  }

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="cadastro" element={<CadastroLivro />}>
        <Route exact path="livro" element={<CadastroLivro />} />
        <Route exact path="cliente" element={<PageCadastroCliente/>} />
      </Route>
      
      <Route exact path="/mais-vendidos" element={
          <PageMaisVendidos 
            adicionarCarrinho={adicionarCarrinho}/>} />
      
      <Route exact path="/lancamentos" element={<PageLancamentos/>} />
      
      <Route exact path="/carrinho-compras" element={
          <PageCarrinhoCompras 
            itensCarrinho={itensCarrinho} 
            numLivros={itensCarrinho.length}
            removerCarrinho={removerCarrinho}
            totalCarrinho={totalCarrinho}
            />} />
      
      <Route exact path="/pagamento" element={
          <PagePagamento 
            itensCarrinho={itensCarrinho} 
            totalCarrinho={totalCarrinho}
            />} />

      <Route exact path="/processamento" element={
          <PageProcessamento 
            itensCarrinho={itensCarrinho} 
            totalCarrinho={totalCarrinho}
            geraPedido={geraPedido}
            />} />

      <Route exact path="/" element={<Home 
          adicionarCarrinho={adicionarCarrinho}
          numLivros={itensCarrinho.length}
          totalCarrinho={totalCarrinho}
          />} />
    
    </Routes>
    </BrowserRouter>    
    </>
  );
}

export default App;
