import Lancamentos from '../../components/Body/Lancamentos/Lancamentos';
import CustomNavbar from '../../components/Header/CustomNavbar';
import './PageLancamentos.css';

export default function PageLancamentos(props){
    return ( 
    <>
        <CustomNavbar numLivros={props.numLivros}/>
        <Lancamentos/>
    </>
    );
    
}