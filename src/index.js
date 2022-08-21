import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CadastroLivro from "./pages/livro/CadastroLivro";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route exact path="/cadastro-livro" element={<CadastroLivro />} />
      <Route exact path="/" element={<App />} />
    </Routes>
  </BrowserRouter>
);
