import { ChangeEvent, FormEvent, useContext, useEffect, useState } from "react"
import { Link, Navigate, useNavigate } from "react-router-dom";
import { User } from "../types";
import Cookies from "js-cookie";

import '../styles/Formulario.scss'
import Header from "../components/Header";
import { AuthContext } from "@/providers/AuthContext";

const Login = () => {
    // states & vars
    const [user, setUser] = useState<User>({} as User);
    const [submiting, setSubmiting] = useState<boolean>(false)
    const { isLoggedIn } = useContext(AuthContext)

    // hooks
    const navigate = useNavigate()

    // functions
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setUser({ ...user, [name]: value })
    }

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setSubmiting(true)
        fetch(`${apiUrl}/auth`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(user)
        }).then(response => {
            if (response.ok) {
                return response.json()
            }
        }).then((json) => {
            Cookies.set("token", json.token, { secure: true, sameSite: "Strict" })
            navigate("/characters")
        }).catch(error => {
            console.error("Erro ao fazer requisição - ", error)
            throw new Error()
        }).finally(() => setSubmiting(false))
    }

    isLoggedIn && <Navigate to="characters"/>
    return (
        <section className="formulario">
            <Header />
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <div className="fields">
                    <div className="inputBox">
                        <label htmlFor="nome">Nome</label>
                        <input placeholder="John Doe" value={user?.nome} onChange={handleChange} id="nome" name="userNome" required type="text" />
                    </div>

                    <div className="inputBox">
                        <label htmlFor="senha">Senha</label>
                        <input placeholder="********" value={user?.senha} onChange={handleChange} id="senha" name="userPassword" required type="password" />
                    </div>
                </div>

                <div className="confirmation">
                    <Link className="link" to="/Cadastro">Não tenho uma conta</Link>
                    <input disabled={submiting} className="sendForm" type="submit" name="enviar" id="enviar" />
                </div>
            </form>
            <img draggable="false" className="backgroundTrees" src="/forest-background.png" alt="" />
        </section>
    )
}

export default Login