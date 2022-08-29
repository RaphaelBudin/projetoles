import './CardLivro.css';
import Col from 'react-bootstrap/Col';
import {useNavigate} from 'react-router-dom';

export default function CardLivro(props){
    const navigate = useNavigate();
    
    function irDetalheLivro(){
        let caminho = '/livros:'+ props.livro.id;
        console.log("Caminho:");
        console.log(caminho);
        console.log("Props Livro: ");
        console.log(props.livro);
        //navigate(caminho);
    }

    function irDetalheAutor(evento){
        evento.preventDefault();
        alert("Indo para página do autor...");
    }
    return (
        <Col>
            <button 
                className="btn-titulo"
                value={props.livro.id}
                onClick={irDetalheLivro}
            >
                {props.livro.titulo}
            </button>
            <br/>
            <button
                className="btn-autor"
                value={props.livro.autor}
                onClick={irDetalheAutor}
            >
                {props.livro.autor}
            </button>

            <p 
                className="preco">
                {props.livro.preco} 
            </p>
            <button>
                <img 
                    src={props.livro.url}
                    value={props.livro.id}
                    alt= {props.livro.titulo}
                    height="125"
                    width="150"
                    onClick={irDetalheLivro}
                />
            </button>
        </Col>
    );
}