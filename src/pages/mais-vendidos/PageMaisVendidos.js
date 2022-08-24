import './PageMaisVendidos.css';
import MaisVendidos from '../../components/Body/MaisVendidos/MaisVendidos';
import CustomNavbar from '../../components/Header/CustomNavbar';

export default function PageMaisVendidos(props){
    return (
        <>
            <CustomNavbar/>
            <MaisVendidos adicionarCarrinho={props.adicionarCarrinho}/>
        </>
    );
}