import "./App.css";
import React, {useEffect, useState} from "react";
import Home from "./pages/Home";
import CustomNavbar from "./components/Header/CustomNavbar";

function App() {
  //Variáveis que serão utilizados no Mock
  
  //Itens do carrinho
  const [itensCarrinho, setItensCarrinho] = useState([]);
  useEffect(()=>{
    console.log("Itens atualmente no carrinho: ");
    console.log(itensCarrinho);
  }, [itensCarrinho]);

  function adicionarCarrinho(produto){
    console.log("Adicionando ao carrinho...App.js");
    setItensCarrinho([...itensCarrinho, produto]);
  }

  //
  return (
    <>
      <Home adicionarCarrinho={adicionarCarrinho}/>
    </>
  );
}

export default App;
