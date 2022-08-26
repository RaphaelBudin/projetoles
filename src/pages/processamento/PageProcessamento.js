import './PageProcessamento.css';

export default function PageProcessamento(props){
    return (
        <>
            <h1> Resumo do Pedido </h1>
            <p> 
                ID do Pedido: 
                {props.geraPedido}
            </p>
        </>
    );
}