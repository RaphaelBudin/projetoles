import './PageMaisVendidos.css';
import MaisVendidos from '../../components/Body/MaisVendidos/MaisVendidos';
import CustomNavbar from '../../components/Header/CustomNavbar';

export default function PageMaisVendidos(props){
    return (
        <>
            <CustomNavbar 
                numLivros={props.numLivros}
                livroDetalhe={livroDetalhe} setLivroDetalhe={setLivroDetalhe}
                autorDetalhe={autorDetalhe} setAutorDetalhe={setAutorDetalhe}
            />
            <MaisVendidos 
                adicionarCarrinho={props.adicionarCarrinho}
                livroDetalhe={livroDetalhe} setLivroDetalhe={setLivroDetalhe}
                autorDetalhe={autorDetalhe} setAutorDetalhe={setAutorDetalhe}    
            />
        </>
    );
}