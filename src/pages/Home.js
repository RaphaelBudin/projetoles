import "./Home.css";
import Body from "../components/Body/Body";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import ProdutoAdicionado from "../components/popups/ProdutoAdicionado";
import CustomNavbar from "../components/Header/CustomNavbar";

export default function Home(props) {
  return (
    <>
      <CustomNavbar/>
      <div className="home">
        <Body adicionarCarrinho={props.adicionarCarrinho}/>
        <footer>
          <br/><br/><br/><br/>
          <Footer />
        </footer>
      </div>
    </>
    
  );
}

