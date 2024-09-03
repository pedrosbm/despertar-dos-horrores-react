import { ChangeEvent, FormEvent, useEffect, useState } from "react"
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import { User } from "../types";
import Cookies from "js-cookie";

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
        console.log()
        toast.promise(fetch(`${apiUrl}/auth`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(user)
        }).then(response => {
            if (response.ok) {
                return response.json()
            }
        }).then((json) => {
            Cookies.set("logged", "true", { secure: true, sameSite: "Strict" })
            Cookies.set("userId", json.id, { secure: true, sameSite: "Strict" })
            Cookies.set("userNome", json.nome, { secure: true, sameSite: "Strict" })
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

    useEffect(()=> {
        isLoggedIn && navigate("/characters")
    }, [])
    
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