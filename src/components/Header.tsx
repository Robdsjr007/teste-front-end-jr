// Estilo
import '../styles/components/header.sass';

const Header = () => {
  return (
    <header>
      <nav>
        <ul className='container1'>
          <ul className='ofertas'>
            <li><img src="./icons/ShieldCheck.png" alt="Shield Check" /><p>Compra <span>100% seguro</span></p></li>
            <li><img src="./icons/Truck.png" alt="Truck" /><p><span> Frete grátis</span> acima de R$ 200</p></li>
            <li><img src="./icons/CreditCard.png" alt="Credit Card" /><p><span> Parcele</span> suas compras</p></li>
          </ul>
        </ul>


        <ul className='container2'>
          <a href='#'><img className='logo' src="./img/logo139x5064.png" alt="VTEX" /></a>

          <label htmlFor="">
            <input type="text" placeholder='O que você está buscando?' />
            <img src="./icons/MagnifyingGlass.png" alt="lupa" />
          </label>

          <ul className='icons'>
            <a href="#"><img className='icon box' src="./icons/Box.png" alt="Box" /></a>
            <a href='#'><img className='icon heart' src="./icons/Heart.png" alt="Heart" /></a>
            <a href='#'><img className='icon avatar' src="./icons/UserCircle.png" alt="User Cicle" /></a>
            <a href="#"><img className='icon cart' src="./icons/ShoppingCart.png" alt="Shopping Cart" /></a>
          </ul>
        </ul>


        <ul className='container3'>
          <ul className='lista-categorias'>
            <li>TODAS CATEGORIAS</li>
            <li>SUPERMERCADO</li>
            <li>LIVROS</li>
            <li>MODA</li>
            <li className='active'>LANÇAMENTOS</li>
            <li>OFERTAS DO DIA</li>
            <li><img src="./icons/CrownSimple.png" alt="Crown Simple" />ASSINATURA</li>
          </ul>
        </ul>
      </nav>
    </header>
  )
}

export default Header;