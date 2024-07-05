import { IoClose } from "react-icons/io5";
import "../styles/CharacterCreateModal.scss"
import CharacterForm from "./CharacterForm";

type modalProps = {
    modal: boolean,
    toggleModal: () => void
}

const CharacterCreateModal = ({modal, toggleModal} : modalProps) => {
    if(modal) return(
        <div className="modal">
            <div className="modalBox">
                <IoClose onClick={toggleModal} className="closeButton"/>
                <CharacterForm/>
            </div>
        </div>
    )
}

export default CharacterCreateModal