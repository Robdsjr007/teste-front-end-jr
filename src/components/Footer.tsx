// Estilo
import '../styles/components/footer.sass'

// Componentes
import Bandeiras from './Bandeiras'

const Footer = () => {
  return (
    <footer>
      <article className='container1'>
        <article className='area sobre'>
          <h4>Sobre nós</h4>
          <ul>
            <li>CONHEÇA</li>
            <li>COMO COMPRAR</li>
            <li>INDICAÇÃO E DESCONTO</li>
          </ul>
          <div className="redes">
            <a href="#"><img src="../../img/facebook.png" alt="Facebook" /></a>
            <a href="#"><img src="../../img/instagram.png" alt="Instagram" /></a>
            <a href="#"><img src="../../img/youtube.png" alt="YouTube" /></a>
          </div>
        </article>
        <article className='area informacoes'>
          <h4>INFORMAÇÕES ÚTEIS</h4>
          <ul>
            <li>FALE CONOSCO</li>
            <li>DÚVIDAS</li>
            <li>PRAZOS DE ENTREGA</li>
            <li>FORMAS DE PAGAMENTO</li>
            <li>POLÍTICA DE PRIVACIDADE</li>
            <li>TROCAS E DEVOLUÇÃO</li>
          </ul>
        </article>
        <article className='area pagamentos'>
          <h4>FORMAS DE PAGAMENTO</h4>
          <Bandeiras/>
        </article>
        <article className="cardForm">
          <form>
            <h1>CADASTRE-SE E RECEBA NOSSAS<span> NOVIDADES E PROMOÇÕES</span></h1>
            <p>Excepteur sint accaecat cudatat non ent, sunt in culpa qui officia lorem ipsum</p>
            <div>
              <input type="text" placeholder='SEU E-MAIL' />
              <button>OK</button>
            </div>
          </form>
        </article>
      </article>
      <article className='container2'>
        <p>Copyright &copy; 2019. Todos os direitos reservados. Todas as marcas e suas imagens são de propriedade de seus respectivos donos.  
        É vedada a reprodução, total ou parcial, de qualquer conteúdo sem expressa autorização.</p>
        <div className='empresas'>
          <img className='econverse' src="../../img/econverse.png" alt="econverse" />
          <img className='vtex' src="../../img/vtex.png" alt="vtex" />
        </div>
      </article>
    </footer>
  )
}

export default Footer