import {useState, useEffect} from 'react';

export default function Estado(){
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
}