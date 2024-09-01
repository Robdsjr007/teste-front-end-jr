import { useState } from 'react';

// Estilo
import '../styles/components/popup.sass'

// Componentes
import Botao from './Botao';

const Popup = ({imagem, nome, preco, detalhe, fechar}: PopupProps) => {
    const [count, setCount] = useState(1)

    return (
        <article className="popup">
            <section className="imagem">
                <img src={imagem} alt={nome} />
            </section>
            <section className='maisInfo'>
                <div className='fechar'>
                    <button onClick={fechar}><img src="../../icons/x.png" alt="x" /></button>
                </div>
                <h1>{nome}</h1>
                <h4>{preco}</h4>
                <p>{detalhe}</p>
                <a>{"Veja mais detalhes do produto >"}</a>
                <div className='counter'>
                    <button onClick={() => setCount(count - 1)}>-</button>
                    <p>{count}</p>
                    <button onClick={() => setCount(count + 1)}>+</button>
                </div>
                <Botao funcao={() => alert("Comprei")}/>
            </section>
        </article>
    )
}

interface PopupProps {
    imagem: string;
    nome: string;
    preco: string;
    detalhe: string;
    fechar: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export default Popup