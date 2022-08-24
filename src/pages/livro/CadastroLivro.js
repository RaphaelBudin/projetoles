import "./CadastroLivro.css";
import { React, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Categorias from "../../components/tags/categorias/Categorias";
import GrupoPrecificacao from "../../components/tags/grupo-precificacao/GrupoPrecificacao";
import FormAutor from "../../components/autores/FormAutor";

const autores = ["Selecione um autor", "Autor1", "Autor2", "Autor3"];

export default function CadastroLivro(){
  const [classe, setClasse] = useState('');
  const [autorValido, setAutorValido] = useState(false);

  function submitHandler(event) {
    event.preventDefault();
    alert('Livro cadastrado com sucesso!');
    //ID do livro será o próprio ISBN
  }

  function validaAutor(event){
    console.log(event);
    if (event.target.value === 'Selecione um autor') {
        setAutorValido(false);
        invalidaInput(event);
    }
    setAutorValido(true);
  }

  function invalidaInput(event){
    setClasse("invalida");
  }

  function validaInput(event){
    setClasse("");
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
        <Form.Label>Autor: </Form.Label>
        <Form.Select aria-label="Selecione o autor:" onChange={validaAutor} required className={classe} key={autores} id="autor">
          {autores.map(autor => 
            <option value={autor}>{autor}</option>
            )};
        </Form.Select>
      </Form.Group>

      <Form.Group className="input" controlId="formCapa">
        <Form.Label> Capa </Form.Label>
        <Form.Control type="file"/>
      </Form.Group>

      <Form.Group className="input" controlId="formContraCapa">
        <Form.Label> Contra-Capa </Form.Label>
        <Form.Control type="file"/>
      </Form.Group>

      <Form.Group className="input" controlId="formCategorais">
        <Form.Label> Categorias:</Form.Label>
        <Categorias/>
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
        <Form.Control type="number" min="1" placeholder="Edição do livro" required/>
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
          <GrupoPrecificacao/> 
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
