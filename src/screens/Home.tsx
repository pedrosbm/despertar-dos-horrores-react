import { useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import { Character } from "../types"
import { toast } from "react-toastify"
import Cookies from "js-cookie"
import "../styles/Home.scss"


const apiUrl = import.meta.env.BASE_URL as string

const Home = () => {
    // States & variables
    const [personagens, setPersonagens] = useState<Character[]>()
    const isLoggedIn = Cookies.get("logged") == "true"

    // Hooks
    const navigate = useNavigate()

    // functions
    useEffect(() => {
        isLoggedIn &&
        fetch(`${apiUrl}/Personagem/User/${Cookies.get("userId")}`, {
            method: "GET"
        }).then(response => {
            if(response.ok){
                return response.json()
            }
            if(response.status == 404){
                toast.info("Não foram encontrados personagens")
            }
        }).then((json : any)=> {
            setPersonagens(json)
        }).catch(err => {
            console.error("Erro na requisição - ", err)
            toast.error("Ocorreu um erro ao obter seus personagens, recarregue a página.", {autoClose: 5000})
        })
    }, [])

    // useEffect(() => {
    //     !isLoggedIn && navigate("Login")
    // }, [])

    return (
        <section className="home">
            <HeaderSecundario />
            <h2>Olá {}</h2>
            <h3>sua aventura o aguarda</h3>
            <div className="personagens">
                {personagens?.map((personagem: Character) => (
                    <div className="personagem">
                        <p>nome: {personagem.personagemNome}</p>
                    </div>
                ))}
                <div className="newCharacter">

                </div>
            </div>
        </section>
    )
}

export default Home