import "./App.css";
import React from "react";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import CadastroLivro from "./pages/livro/CadastroLivro.js";
import CadastroCliente from "./pages/cliente/CadastroCliente.js";

function App() {
  return (
    <Home />
  );
}

export default App;
