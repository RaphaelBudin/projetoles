import "./CadastroLivro.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

/*
É necessário ter os seguintes dados:
- Título
- Autor
- Categoria(s)
- Ano
- Editora
- Edição
- ISBN
- Número de Páginas
- Sinopse
- Dimensões (altura, largura e profundidade)
- Grupo de Precificação
- Código de Barras
*/

export default function CadastroLivro() {
  function submitHandler(event) {
    event.preventDefault();
  }
  return (
    <Form onSubmit={submitHandler} className="">
      <Form.Group className="" controlId="formTitulo">
        <Form.Label> </Form.Label>
        <Form.Control type="text" placeholder="Insira o Título do livro" />
        <Form.Text className="text-muted">
          Informe o título do livro aqui
        </Form.Text>
      </Form.Group>

      <Form.Group className="" controlId="formAutor">
        <Form.Label> </Form.Label>
        <Form.Control type="text" placeholder="Insira o Autor do livro" />
        <Form.Text className="text-muted">
          Informe o Autor do livro aqui
        </Form.Text>
      </Form.Group>
    </Form>
  );
}
