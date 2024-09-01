//Estilo
import '../styles/components/modal.sass'

// Componentes
import Popup from './Popup'

const Modal = ({ aberturaModal, setAberturaModal, imagem, nome, preco, detalhe }: ModalProps) => {

    // Função que impede com que você scrolle na página enquanto o modal estiver aberto.
    const aparecerOverflow = (modalAberto: boolean) => {
        if (modalAberto) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'visible';
        }
    }

    // Função responsável pelo fechamento do modal.
    const fecharModal = () => {
        setAberturaModal(false);
    }

    return (
        <>
            {aberturaModal ? (
                aparecerOverflow(aberturaModal),
                <main className="modal">
                    <Popup imagem={imagem} nome={nome} preco={preco} detalhe={detalhe} fechar={fecharModal} />
                </main>
            ) : aparecerOverflow(aberturaModal)}
        </>
    );
}

interface ModalProps {
    imagem: string;
    nome: string;
    preco: string;
    detalhe: string;
    aberturaModal: boolean;
    setAberturaModal: React.Dispatch<React.SetStateAction<boolean>>;
}

export default Modal;
