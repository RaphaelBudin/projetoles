import CustomNavbar from '../../components/Header/CustomNavbar';
import ItemPedido from '../../components/pedidos/ItemPedido';
import './PageProcessamento.css';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';

export default function PageProcessamento(props){
    const listItensPedidos = props.pedidos.map(pedido=>{
        return (
            <div key={pedido.id}>
                <Row className='RowPedido'>
                    <ItemPedido pedido={pedido} />
                </Row>
                <hr className='linhaRowPedido' />
            </div>
        );
    });
    
    return (
        <>
            <CustomNavbar/>
            <Container className='container' fluid>
                {listItensPedidos}
            </Container>
        </>
    );
}