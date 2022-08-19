import "./App.css";
import Body from "./components/Body/Body";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <Body />
      <footer>
        <br/><br/><br/><br/>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
