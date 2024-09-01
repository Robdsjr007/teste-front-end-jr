import { useEffect, useState } from 'react';

// Estilo
import '../styles/components/cardMercadoria.sass';

// Componentes
import Modal from './Modal';
import Botao from './Botao';

interface Produto {
  productName: string;
  descriptionShort: string;
  photo: string;
  price: number;
}

const CardMercadoria = () => {
  const [produtos, setProdutos] = useState<Produto[]>([]);
  const [aberturaModal, setAberturaModal] = useState(false);
  const [produtoSelecionado, setProdutoSelecionado] = useState<Produto | null>(null);

  // Requisição para arquivo JSON

  useEffect(() => {
    fetch('./data/produtos.json', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => res.json())
      .then((data) => {
          setProdutos(data.products);
      })
      .catch((err) => console.log(`Mensagem de erro: ${err.message}`));
  }, []);


  // Função que converte para a moeda Brasileira

  const conversaoDeMoeda = (valor: number) => {
     return valor.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL', })
  }

  // Função responsável pela abertura do modal

  const abrirModal = (produto: Produto) => {
    setProdutoSelecionado(produto);
    setAberturaModal(true);
  }

  return (
    <article className='cardContainer'>
      {produtos &&
        produtos.slice(0,4).map((produto, index) => (

          <article className='cardMercadoria' key={index}>
            <article className='containerImagem'>
              <img src={produto.photo} alt={produto.productName} />
            </article>
            <p className='descricao'>{produto.descriptionShort}</p>
            <article className="preco">
              <p className="desconto">{conversaoDeMoeda(produto.price * 2)}</p> {/* Valor sem desconto */}
              <p className="oferta">{conversaoDeMoeda(produto.price)}</p> {/* Valor com 50% de desconto */}
              <p className="parcela">ou 2x de {conversaoDeMoeda(produto.price / 2)} sem juros</p> {/* Parcela */}
              <p className="frete">Frete grátis</p>
              <Botao funcao={() => abrirModal(produto)}/>
            </article>
          </article>
        ))}

      {/* Modal só inicia quando estiver com todos os dados do produto */}

      {produtoSelecionado && (
        <Modal
          imagem={produtoSelecionado.photo}
          nome={produtoSelecionado.productName}
          preco={conversaoDeMoeda(produtoSelecionado.price)}
          detalhe={produtoSelecionado.descriptionShort}
          aberturaModal={aberturaModal}
          setAberturaModal={setAberturaModal}
        />
      )}
    </article>
  );
}

export default CardMercadoria;
