import { useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import { Character } from "@/types"
import { toast } from "react-toastify"
import Cookies from "js-cookie"
import HeaderSecundario from "@/components/HeaderSec"
import CharacterCreateModal from "@/components/characterForm/modal/CharacterCreateModal"

import "./Characters.scss"

const apiUrl = import.meta.env.VITE_API_URL as string

const Characters = () => {
    // States & variables
    const [personagens, setPersonagens] = useState<Character[]>()
    const [modal, setModal] = useState<boolean>(false)
    const isLoggedIn = Cookies.get("token")

    // Hooks
    const navigate = useNavigate()

    // functions
    const toggleModal = () => {
        setModal(!modal)
    }

    useEffect(() => {
        isLoggedIn &&
            fetch(`${apiUrl}/personagem/User/${Cookies.get("userId")}`, {
                method: "GET"
            }).then(response => {
                if (response.ok) {
                    return response.json()
                }
                if (response.status == 404) {
                    toast.info("Não foram encontrados personagens")
                }
            }).then((json) => {
                setPersonagens(json)
            }).catch(err => {
                console.error("Erro na requisição - ", err)
                toast.error("Ocorreu um erro ao obter seus personagens, recarregue a página.", { autoClose: 5000 })
            })
    }, [])

    return (
        <div>
            <HeaderSecundario />
            <section className="home">
                <div className="greetings">
                    <h2>Olá {Cookies.get("userNome")}</h2>
                    <h3>sua aventura o aguarda</h3>
                </div>
                <div className="personagens">
                    {personagens?.map((personagem: Character) => (
                        <div className="personagem">
                            <p>nome: {personagem.nome}</p>
                        </div>
                    ))}
                    <div onClick={toggleModal} className="newCharacter">
                        <div className="backdrop">
                            <p>+</p>
                        </div>
                        <div className="name">
                            <p>Novo personagem</p>
                        </div>
                    </div>
                </div>
                <img className="backgroundGradient" src="/degrade-deserto.jpg" alt="" />
                <img className="desert" draggable={false} src="/desert-background.png" alt="" />
            </section>
            <CharacterCreateModal modal={modal} toggleModal={toggleModal} />
        </div>
    )
}

export default Characters