import '../styles/components/cardCategoria.sass'

const CardCategoria = ({ nome }: CardProps) => {
    return (
        <article className="categoria">
            <article className={nome == "Tecnologia" ? "active card" : "card"}>
                <img src={`../../img/${nome}.png`} alt={nome}/>
            </article>
            <p className={nome == "Tecnologia" ? "active" : ""} >{nome}</p>
        </article>
    )
}

export interface CardProps {
    nome: string
}

export default CardCategoria