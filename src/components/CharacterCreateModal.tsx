
type modalProps = {
    modal: boolean,
    toggleModal: () => void
}

const CharacterCreateModal = ({modal, toggleModal} : modalProps) => {


    if(modal) return(
        <div>
            <h1>pênis</h1>
            <button onClick={toggleModal}>Fechar</button>
        </div>
    )
}

export default CharacterCreateModal