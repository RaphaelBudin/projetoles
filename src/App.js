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

import {getCurrentDateTime} from './components/utils/getCurrentDateTime';
import {getCurrentDate} from './components/utils/getCurrentDate';
import CategoriaJava from "./pages/categoria/java/CategoriaJava";
import CategoriaGeral from "./pages/categoria/geral/CategoriaGeral";
import DetalheLivro from "./pages/livro/DetalheLivro";
import EditaLivro from "./pages/livro/EditaLivro";

function App() {
  //Variáveis que serão utilizados no Mock  

  //Itens do carrinho
  const [itensCarrinho, setItensCarrinho] = useState([]);
  const [totalCarrinho, setTotalCarrinho] = useState(0.00);
  const [idPedido, setIdPedido] = useState(getCurrentDate()*1000);
  const [pedidos, setPedidos] = useState([]);
  const [livroDetalhe, setLivroDetalhe] = useState([]);
  const [autorDetalhe, setAutorDetalhe] = useState([]);

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

  useEffect(()=>{
    console.log("ID Pedido: ");
    console.log(idPedido);
    console.log("Lista de Pedidos:");
    console.log(pedidos);
  }, [idPedido])

  useEffect(()=>{
    setItensCarrinho([]);
    setTotalCarrinho(0.00);
    console.log('Carrinho de pedidos zerado!');
  }, [pedidos]);

  function adicionarCarrinho(produto){
    console.log("Adicionando ao carrinho...");
    setItensCarrinho([...itensCarrinho, produto]);
  };

  function removerCarrinho(tituloLivro){
    const novoArray = itensCarrinho.filter(item => item.titulo != tituloLivro);
    setItensCarrinho(novoArray);
    console.log("Item removido!");
  }

  function geraPedido(){
    console.log("GERANDO PEDIDO");
  
    const novoPedido = ({
      id:idPedido,
      itens:itensCarrinho.map(livro => livro),
      valorTotal:totalCarrinho,
      dateTime:getCurrentDateTime('-'),
      status:"Em Processamento...",
    });

    setPedidos([...pedidos,novoPedido]);

    console.log("Atualizando ID pedido...");
    setIdPedido(idPedido+1);
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
            adicionarCarrinho={adicionarCarrinho}
            numLivros={itensCarrinho.length}
            livroDetalhe={livroDetalhe} setLivroDetalhe={setLivroDetalhe}
            autorDetalhe={autorDetalhe} setAutorDetalhe={setAutorDetalhe}
            />} />
      
      <Route exact path="/lancamentos" element={
          <PageLancamentos
            numLivros={itensCarrinho.length}
            livroDetalhe={livroDetalhe} setLivroDetalhe={setLivroDetalhe}
            autorDetalhe={autorDetalhe} setAutorDetalhe={setAutorDetalhe}
          />} />
      
      <Route path="categorias">
        <Route exact path="java" element={
          <CategoriaJava
            adicionarCarrinho={adicionarCarrinho} 
            numLivros={itensCarrinho.length}
            livroDetalhe={livroDetalhe} setLivroDetalhe={setLivroDetalhe}
            autorDetalhe={autorDetalhe} setAutorDetalhe={setAutorDetalhe}
            />}/>
        <Route exact path="geral" element={
          <CategoriaGeral
            adicionarCarrinho={adicionarCarrinho} 
            numLivros={itensCarrinho.length}
            livroDetalhe={livroDetalhe} setLivroDetalhe={setLivroDetalhe}
            autorDetalhe={autorDetalhe} setAutorDetalhe={setAutorDetalhe}
            />}/>
      </Route>

      <Route exact path="/detalheLivro" element={
          <DetalheLivro
            numLivros={itensCarrinho.length}
            livroDetalhe={livroDetalhe} setLivroDetalhe={setLivroDetalhe}
            autorDetalhe={autorDetalhe} setAutorDetalhe={setAutorDetalhe}
          />}/> 


      <Route exact path="/carrinho-compras" element={
          <PageCarrinhoCompras 
            itensCarrinho={itensCarrinho} 
            numLivros={itensCarrinho.length}
            removerCarrinho={removerCarrinho}
            totalCarrinho={totalCarrinho}
            livroDetalhe={livroDetalhe} setLivroDetalhe={setLivroDetalhe}
            autorDetalhe={autorDetalhe} setAutorDetalhe={setAutorDetalhe}
            />} />
      
      <Route exact path="/pagamento" element={
          <PagePagamento 
            itensCarrinho={itensCarrinho} 
            totalCarrinho={totalCarrinho}
            geraPedido={geraPedido}
            />} />

      <Route exact path="/processamento" element={
          <PageProcessamento 
            itensCarrinho={itensCarrinho}
            totalCarrinho={totalCarrinho}
            pedidos={pedidos}
            livroDetalhe={livroDetalhe} setLivroDetalhe={setLivroDetalhe}
            autorDetalhe={autorDetalhe} setAutorDetalhe={setAutorDetalhe}
            />} />

      <Route path="livro"> 
        <Route exact path="cadastro"  element={<CadastroLivro/>}/>
        <Route exact path="edicao"    element={<EditaLivro/>}/>
        <Route exact path="detalhe"   element={<DetalheLivro/>}/>
      </Route>


      <Route exact path="/" element={<Home 
          adicionarCarrinho={adicionarCarrinho}
          numLivros={itensCarrinho.length}
          totalCarrinho={totalCarrinho}
          livroDetalhe={livroDetalhe} setLivroDetalhe={setLivroDetalhe}
          autorDetalhe={autorDetalhe} setAutorDetalhe={setAutorDetalhe}
          />} />
    
    </Routes>
    </BrowserRouter>    
    </>
  );
}

export default App;
