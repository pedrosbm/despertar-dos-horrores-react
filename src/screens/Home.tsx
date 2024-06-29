import { useNavigate } from "react-router-dom"
import Header from "../components/Header"
import { useEffect, useState } from "react"
import { Character } from "../types"
import Cookies from "js-cookie"

import "../styles/Home.scss"

const apiUrl = import.meta.env.BASE_URL

const Home = () => {
    // States & variables
    const [personagens, setPersonagens] = useState<Character[]>()
    const isLoggedIn = Cookies.get("logged") == "true"

    // Hooks
    const navigate = useNavigate()

    // functions
    useEffect(() => {
        fetch(`${apiUrl}/Personagem/User/${localStorage.getItem("userId")}`, {
            method: "GET"
        })
    }, [])

    !isLoggedIn && navigate("Login")
    return (
        <section className="home">
            <Header />
            <h2>Olá {localStorage.getItem("userNome")}</h2>
            <h3>sua aventura o aguarda</h3>
            <div className="personagens">
                {personagens?.map((personagem: Character) => (
                    <div className="personagem">
                        <p>nome: {personagem.personagemNome}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Home