// Componentes
import '../styles/components/botao.sass'

const Botao = ({funcao}: BotaoProps) => {
  return (
    <>
        <button className='btn-comprar' onClick={funcao}>COMPRAR</button>
    </>
  )
}

interface BotaoProps {
    funcao: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export default Botao