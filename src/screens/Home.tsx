import { Navigate } from "react-router-dom"
import Header from "../components/Header"
import { useEffect, useState } from "react"
import { Character } from "../types"

import "../styles/Home.scss"

const apiUrl = import.meta.env.BASE_URL as string

const Home = () => {

    const [personagens, setPersonagens] = useState<Character[]>()

    useEffect(() => {
        fetch(`${apiUrl}/Personagem/User/${localStorage.getItem("userId")}`, {
            method: "GET"
        })
    }, [])

    if (localStorage.getItem("logado") != "true") {
        return <Navigate to="/Login" />
    } else {
        return (
            <section className="home">
                <Header />
                <h2>Olá {localStorage.getItem("userNome")}</h2>
                <h3>sua aventura o aguarda</h3>
                <div className="personagens">
                    {personagens?.map((personagem : Character) => (
                        <div className="personagem">
                            <p>nome: {personagem.personagemNome}</p>
                        </div>
                    ))}
                </div>
            </section>
        )
    }
}

export default Home