import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

// Componentes
import App from './App.tsx'

//Estilo
import './styles/index.sass'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
