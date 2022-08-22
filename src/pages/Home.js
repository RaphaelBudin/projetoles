import "./Home.css";
import Body from "../components/Body/Body";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";

export default function Home() {
  return (
    <div className="home">
      <Body />
      <footer>
        <br/><br/><br/><br/>
        <Footer />
      </footer>
    </div>
  );
}

