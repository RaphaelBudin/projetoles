import Footer from '../../components/Footer/Footer';
import CustomNavbar from '../../components/Header/CustomNavbar';
import ItemPedido from '../../components/pedidos/ItemPedido';
import './PageProcessamento.css';

export default function PageProcessamento(props){
    return (
        <>
            <CustomNavbar/>
            <ItemPedido 
                idPedido={props.idPedido}
                itensPedido={props.itensPedido}
            />
            <Footer/>
        </>
    );
}