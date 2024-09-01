// Estilo
import '../styles/components/main.sass'

// Componentes
import CardCategoria from './CardCategoria'
import Divider from './Divider'
import Links from './Links'
import CardParceiro from './CardParceiro'
import CardMercadoria from './CardMercadoria'
import CardProduto from './CardProduto'
import Marca from './Marca'

const Main = () => {
    return (
        <main>
            <article className='banner'>
                <h1>Venha conhecer nossas promoções</h1>
                <h3>50% Off nos produtos</h3>
                <a href='#'>Ver produto</a>
            </article>
            <article className='containerCategorias'>
                <nav className='categoriasOnScreen'>
                    <CardCategoria nome={"Tecnologia"} />
                    <CardCategoria nome={"Supermercado"} />
                    <CardCategoria nome={"Bebidas"} />
                    <CardCategoria nome={"Ferramentas"} />
                    <CardCategoria nome={"Saúde"} />
                    <CardCategoria nome={"Esportes e Fitness"} />
                    <CardCategoria nome={"Moda"} />
                </nav>
            </article>
            <section>
                <Divider/>
                <Links/>
                <article className='containerCardMercadoria'>
                    <a type='submit'><img src="../../../icons/left.png" alt="Seta para esquerda" /></a>
                        <CardMercadoria/>
                    <a type='submit'><img src="../../../icons/right.png" alt="Seta para a direita" /></a>
                </article>
                <article className='containerCardParceiro'>
                    <CardParceiro/>
                    <CardParceiro/>
                </article>
            </section>
            <section>
                <Divider/>
                <p>Ver todos</p>
                <article className='containerCardProduto'>
                    <CardProduto/>
                    <CardProduto/>
                </article>
            </section>
            <section>
                <article className='containerMarcas'>
                    <h4>Navegue por marcas</h4>
                    <article className="marcas">
                        <Marca/>
                        <button className='setaRight'>
                            <img src="../../../icons/right_blue.png" alt="seta azul" />
                        </button>
                    </article>
                </article>
            </section>
        </main>
    )
}

export default Main