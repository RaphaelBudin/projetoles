import './GrupoPrecificacao.css';
import Form from "react-bootstrap/Form";
import {useState} from 'react';

export default function GrupoPrecificacao(){ 
    const [gruposPrecificacao, setGruposPrecificacao] = useState([
        {label: "Produção Própria", value:"prod-propria"},
        {label: "Revenda", value:"revenda"},
        {label: "Consórcio", value:"consorcio"},
    ]);
    const listGruposPrecificacao = gruposPrecificacao.map((grupo) => {
        return <option> {grupo.label} </option>
    })

  function onSelectedOptionsChange(event){
    setGruposPrecificacao(prevState => [...prevState, event.target.value]);
  }
    return (
      <Form.Control as="select" multiple required onChange={onSelectedOptionsChange}>
        {listGruposPrecificacao}
      </Form.Control>
    );
}