import "./AddToCartButton.css";
import Logo from "../../../public/cart-icon-transparent.png";

export default function AddToCartButton(props) {
  function clickHandler() {
    alert("Produto Adicionado com sucesso!");
  }

  //Adiciona os dados no carrinho de compras
  function submitHandler(event){
    //Previne que a página seja recarregada
    event.preventDefault();
    
    /*Cria uma variável que armazenará todas as informações do produto:
        Título
        Autor
        Valor
        Categoria
        Preco
        URL
    */
   const produto = [];

  }

  return (
    <button onSubmit={submitHandler} className="button">
      <figure onClick={clickHandler} >
        <img
          src={Logo}
          alt="Adicione este produto ao carrinho!"
          width="50"
          height="50"
        />
        <figcaption>
        <u  className="text-carrinho"> Adicionar ao Carrinho </u>
        </figcaption>
      </figure>
      <br />
      <br />
      <br />
    </button>
  );
}
