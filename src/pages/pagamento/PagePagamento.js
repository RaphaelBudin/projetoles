import './PagePagamento.css';
import {useNavigate} from 'react-router-dom';
import Container from 'react-bootstrap/esm/Container';
import FormPagamento from '../../components/Shopping/pagamentos/FormPagamento';
import CustomNavbar from '../../components/Header/CustomNavbar';
import Footer from '../../components/Footer/Footer';


export default function PagePagamento(props){
    const navigate = useNavigate();

    function handleVoltar(){
        navigate(-1);
    }

    return (
        <>
            <CustomNavbar/>
            <Container className='container-principal'>
                <h1> Page Pagamento </h1>
                <h4> 
                    Total: &nbsp; 
                    {props.totalCarrinho
                    .toLocaleString(undefined, {maximumFractionDigits:2, minimumFractionDigits:2})}
                </h4>
                <FormPagamento geraPedido={props.geraPedido}/>
                <br/>
                <br/>
                <br/>
                <br/>
                <button onClick={handleVoltar} className=""> Voltar </button>        
            </Container>
        </>
    );
}