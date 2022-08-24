import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CadastroLivro from "./pages/livro/CadastroLivro";
import PageLancamentos from "./pages/lancamentos/PageLancamentos";
import PageMaisVendidos from "./pages/mais-vendidos/PageMaisVendidos";
import PageCadastroCliente from "./pages/cliente/PageCadastroCliente";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="cadastro" element={<CadastroLivro />}>
        <Route exact path="livro" element={<CadastroLivro />} />
        <Route exact path="cliente" element={<PageCadastroCliente/>} />
      </Route>
      <Route exact path="/mais-vendidos" element={<PageMaisVendidos/>} />
      <Route exact path="/lancamentos" element={<PageLancamentos/>} />
      <Route exact path="/" element={<App />} />
    </Routes>
  </BrowserRouter>
);

/*

*/
