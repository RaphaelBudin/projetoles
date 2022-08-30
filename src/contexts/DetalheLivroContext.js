import { useState, CreateContext } from "react";

const DetalheLivroContext = CreateContext();

export default function DetalheLivroContextProvider(props){
    const [detalheLivro, setDetalheLivro] = useState([]);
    
    function setLivro(props){
        setDetalheLivro(props.livro);
    }

    function getLivro(props){
        return {detalheLivro};
    }

    const value = {
        setLivro,
        getLivro,
    }; 

    return (
        <DetalheLivroContext.Provider value={value}>
            {props.children}
        </DetalheLivroContext.Provider>
    );
}

