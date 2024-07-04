import "../styles/Modal.scss"
import { IoClose } from "react-icons/io5";

type modalProps = {
    modal: boolean,
    toggleModal: () => void
}

const CharacterCreateModal = ({modal, toggleModal} : modalProps) => {
    if(modal) return(
        <div className="modal">
            <div className="modalBox">
                <IoClose onClick={toggleModal} className="closeButton"/>
                <div className="formulario">
                    
                </div>
            </div>
        </div>
    )
}

export default CharacterCreateModal