// Estilo
import '../styles/components/marca.sass'

// Simulação de Array com mais marcas
const marcas = [0,1,2,3,4]

const Marca = () => {
  return (
    <>
        {marcas && marcas.map((marca) => (
        <article className='marca' key={marca}>
            <img src="../../img/logo139x5064.png" alt="vtex" />
        </article>
        ))}
    </>
  )
}

export default Marca