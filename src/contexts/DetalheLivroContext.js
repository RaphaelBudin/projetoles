import { useState, CreateContext } from "react";

const DetalheLivroContext = CreateContext();

function DetalheLivroContextProvider12333123131(props){
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

