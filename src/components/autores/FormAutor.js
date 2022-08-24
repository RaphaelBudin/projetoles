import './FormAutor.css';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export default function FormAutor (){
    function submitHandler(event){
        event.preventDefaults();
        console.log("Formulário Autor enviado!");
        console.log(event);
    }

    return (
        <Form onSubmit={submitHandler}>
            <Form.Group className="input" controlId="formAutor">
                <Form.Control type="text" required> Primeiro Nome: </Form.Control> 
                <Form.Control type="text" required> Sobrenome: </Form.Control> 
                <Form.Control type="date"> Dia de Nascimento: </Form.Control> 
                <Button type="submit"> Cadastrar </Button>
            </Form.Group>
        </Form>                
    );
}