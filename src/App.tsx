// Estilo
import './styles/app.sass'

// Páginas
import Home from './pages/Home/Home';

// Componentes
import Navbar from './components/Header';
import Footer from './components/Footer';

function App() {

  return (
    <>
    <Navbar/>
     <Home/>
     <Footer/>
    </>
  )
}

export default App
