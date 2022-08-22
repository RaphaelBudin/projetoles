import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CadastroLivro from "./pages/livro/CadastroLivro";
import CadastroCliente from "./pages/cliente/CadastroCliente";
import CustomNavbar from "./components/Header/CustomNavbar";
import Lancamentos from "./components/Body/Lancamentos/Lancamentos";
import MaisVendidos from "./components/Body/MaisVendidos/MaisVendidos";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <CustomNavbar />
    <Routes>
      <Route path="cadastro" element={<CadastroLivro />}>
        <Route exact path="livro" element={<CadastroLivro />} />
        <Route exact path="cliente" element={<CadastroCliente />} />
      </Route>
      <Route exact path="/mais-vendidos" element={<MaisVendidos />} />
      <Route exact path="/lancamentos" element={<Lancamentos />} />
      <Route exact path="/" element={<App />} />
    </Routes>
  </BrowserRouter>
);
