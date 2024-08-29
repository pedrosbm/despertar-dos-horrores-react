import { ChangeEvent, FormEvent, useEffect, useState } from "react"
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import { User } from "../types";
import Cookies from "js-cookie";

import trees from '../assets/forest-background.png'

import '../styles/Formulario.scss'
import Header from "../components/Header";

const apiUrl = import.meta.env.VITE_API_URL as string

const Login = () => {
    // states & vars
    const [user, setUser] = useState<User>();
    const [submiting, setSubmiting] = useState<boolean>(false)
    const isLoggedIn = Cookies.get("logged") == "true"

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
        toast.promise(fetch(`${apiUrl}/users`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(user)
        }).then(response => {
            if (response.ok) {
                return response.json()
            }
        }).then((json) => {
            Cookies.set("logged", "true", { secure: true, sameSite: "Strict" })
            Cookies.set("userId", json.userId, { secure: true, sameSite: "Strict" })
            Cookies.set("userNome", json.userNome, { secure: true, sameSite: "Strict" })
            navigate("/characters")
        }).catch(error => {
            console.error("Erro ao fazer requisição - ", error)
            throw new Error()
        }).finally(() => setSubmiting(false)), {
            success: "Logado com sucesso",
            error: "Ocorreu algum erro",
            pending: "Enviando dados cadastrais"
        })
    }

    // useEffect(()=> {
    //     isLoggedIn && navigate("Home")
    // }, [])
    
    return (
        <section className="formulario">
            <Header />
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <div className="fields">
                    <div className="inputBox">
                        <label htmlFor="nome">Nome</label>
                        <input placeholder="John Doe" value={user?.userNome} onChange={handleChange} id="nome" name="userNome" required type="text" />
                    </div>

                    <div className="inputBox">
                        <label htmlFor="senha">Senha</label>
                        <input placeholder="********" value={user?.userPassword} onChange={handleChange} id="senha" name="userPassword" required type="password" />
                    </div>
                </div>

                <div className="confirmation">
                    <Link className="link" to="/Cadastro">Não tenho uma conta</Link>
                    <input disabled={submiting} className="sendForm" type="submit" name="enviar" id="enviar" />
                </div>
            </form>
            <img draggable="false" className="backgroundTrees" src={trees} alt="" />
        </section>
    )
}

export default Login