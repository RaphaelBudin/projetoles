import "./App.css";
import React, {useEffect, useState} from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import CadastroLivro from "./pages/livro/CadastroLivro";
import PageLancamentos from "./pages/lancamentos/PageLancamentos";
import PageMaisVendidos from "./pages/mais-vendidos/PageMaisVendidos";
import PageCadastroCliente from "./pages/cliente/PageCadastroCliente";
import PageCarrinhoCompras from "./pages/carrinho/PageCarrinhoCompras";

function App() {
  //Variáveis que serão utilizados no Mock  

  //Itens do carrinho
  const [itensCarrinho, setItensCarrinho] = useState([]);

  useEffect(()=>{
    console.log("Itens atualmente no carrinho: ");
    console.log(itensCarrinho);
  }, [itensCarrinho]);

  function adicionarCarrinho(produto){
    console.log("Adicionando ao carrinho...");
    setItensCarrinho([...itensCarrinho, produto]);
  };

  function removerCarrinho(produto){
    console.log("Removendo do carrinho...");
    setItensCarrinho(
      (itensCarrinho.filter((item) => {return item!=produto}))
    );
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
            numProdutos={itensCarrinho.length}
            removerCarrinho={removerCarrinho}
            />} />
      
      <Route exact path="/" element={<Home 
          adicionarCarrinho={adicionarCarrinho}
          numProdutos={itensCarrinho.length}
          />} />
    
    </Routes>
    </BrowserRouter>    
    </>
  );
}

export default App;
