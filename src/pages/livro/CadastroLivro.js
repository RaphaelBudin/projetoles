import "./CadastroLivro.css";
import { React, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const categorias = [
  {label: "Java", value:"Java"},
  {label: "Ruby", value:"Ruby"},
  {label: "Geral", value:"Geral"},
];
const listCategorias = categorias.map((categoria) => {return <option> {categoria.label} </option>})

const gruposPrecificacao = [
  {label: "Produção Própria", value:"prod-propria"},
  {label: "Revenda", value:"revenda"},
  {label: "Consórcio", value:"consorcio"},
];
const listGruposPrecificacao = gruposPrecificacao.map((grupo) => {return <option> {grupo.label} </option>})

export default function CadastroLivro(){
  const [categorias, setCategorias] = useState([]);

  function submitHandler(event) {
    event.preventDefault();
    alert('Produto cadastrado com sucesso!');
  }

  function onSelectedOptionsChange(event){
    //console.log(event.target.value);
    setCategorias(prevState => [...prevState, event.target.value]);
  }


  return (
    <Form onSubmit={submitHandler} className="">
      <br/>
      <h1 className="centralizado"> Cadastro Livro </h1> 
      <Form.Group className="input" controlId="formTitulo">  
        <Form.Label>Titulo:</Form.Label>
        <Form.Control type="text" placeholder="Título do livro" required />
      </Form.Group>

      <Form.Group className="input" controlId="formAutor">
        <Form.Label>Autor:</Form.Label>
        <Form.Control type="text" placeholder="Autor do livro" required />
      </Form.Group>

      <Form.Group className="input" controlId="formCategorias">
        <Form.Label>Categorias:</Form.Label>
        <Form.Control as="select" multiple onChange={onSelectedOptionsChange} required>
          {listCategorias}
        </Form.Control>
        <Form.Text>Segure Ctrl ou Shift para selecionar mais de um valor</Form.Text>
      </Form.Group>

      <Form.Group className="input" controlId="formAno">
        <Form.Label>Ano:</Form.Label>
        <Form.Control type="number" min="0" placeholder="Ano do livro" required/>
      </Form.Group>

      <Form.Group className="input" controlId="formEditora">
        <Form.Label>Editora:</Form.Label>
        <Form.Control type="text" placeholder="Editora do livro" required/>
      </Form.Group>

      <Form.Group className="input" controlId="formEdição">
        <Form.Label>Edição:</Form.Label>
        <Form.Control type="number" min="1" placeholder="Edição do livro" />
      </Form.Group>

      <Form.Group className="input" controlId="formISBN">
        <Form.Label>ISBN:</Form.Label>
        <Form.Control type="number" placeholder="ISBN do livro" required/>
      </Form.Group>

      <Form.Group className="input" controlId="formPaginas">
        <Form.Label>Número de Paginas:</Form.Label>
        <Form.Control type="number" min="1" placeholder="Número de Paginas do livro" required/>
      </Form.Group>

      <Form.Group className="input" controlId="formSinopse">
        <Form.Label>Sinopse do livro:</Form.Label>
        <br/>
        <textarea rows="5" className="form-control" placeholder="Sinopse do livro aqui" required/>
      </Form.Group>

      <Form.Group className="input" controlId="formDimensao-altura">
        <Form.Label>Altura(cm):</Form.Label>
        <Form.Control type="number" min="0.00" placeholder="0,00" step="0.01"/>
      </Form.Group>

      <Form.Group className="input" controlId="formDimensao-largura">
        <Form.Label>Largura(cm):</Form.Label>
        <Form.Control type="number" min="0.00" placeholder="0,00" step="0.01"/>
      </Form.Group>

      <Form.Group className="input" controlId="formDimensao-comprimento">
        <Form.Label>Comprimento(cm):</Form.Label>
        <Form.Control type="number" min="0.00" placeholder="0,00" step="0.01"/>
      </Form.Group>

      <Form.Group className="input" controlId="formCodigoBarras">
        <Form.Label>Codigo de Barras:</Form.Label>
        <Form.Control type="number" min="111111111111" max="999999999999999" placeholder="000123456789"/>
      </Form.Group>

      <Form.Group className="input" controlId="formGrupoPrecificacao">
        <Form.Label>Grupo de Precificação:</Form.Label>
        <Form.Control as="select" multiple onChange={onSelectedOptionsChange} required>
          {listGruposPrecificacao}
        </Form.Control>
        <Form.Text>Segure Ctrl ou Shift para selecionar mais de um valor</Form.Text>
      </Form.Group>
      
      <Form.Group className="centralizado botao-submit">
        <Button variant="primary" type="submit" onSubmit={submitHandler}>
          Cadastrar
        </Button>
      </Form.Group>
  
    </Form>
  );
}
