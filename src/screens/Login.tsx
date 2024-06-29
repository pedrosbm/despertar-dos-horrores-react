import { ChangeEvent, FormEvent, useState } from "react"
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import { User } from "../types";
import Cookies from "js-cookie";

import trees from '../assets/forest-background.png'

import '../styles/Formulario.scss'
import Header from "../components/Header";

const apiUrl = import.meta.env.BASE_URL as string

const Login = () => {
    const navigate = useNavigate()

    const [user, setUser] = useState<User>();

    const [submiting, setSubmiting] = useState<boolean>(false)

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setUser({ ...user, [name]: value })
    }

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setSubmiting(true)
        const request = toast.loading("Enviando dados cadastrais...")

        fetch(`${apiUrl}/User`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(user)
        }).then(response => {
            if (response.ok) {
                toast.update(request, { render: "Logado com sucesso!", type: "success", isLoading: false, autoClose: 2300 })
                return response.json()
            }
            if (!response.ok) {
                toast.update(request, { render: "Ocorreu um erro interno", type: "error", isLoading: false, autoClose: 2300 })
            }
        }).then((json: any) => {
            Cookies.set("logged", "true", { secure: true, sameSite: "Strict" })
            Cookies.set("userId", json.userId, { secure: true, sameSite: "Strict" })
            navigate("/")
        }).catch(error => {
            console.error("Erro ao fazer requisição - ", error)
            throw new Error
        }).finally(() => setSubmiting(false));
    }

    return (
        <section className="formulario">
            <Header />
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <div className="fields">
                    <div className="inputBox">
                        <label htmlFor="nome">Nome</label>
                        <input placeholder="Nome" value={user?.userNome} onChange={handleChange} id="nome" name="userNome" required type="text" />
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