import { ChangeEvent, FormEvent, useState } from "react"
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import { User } from "../types";
import { Navigate } from "react-router-dom";

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

        toast.promise(
            fetch(`${apiUrl}/Authenticate`, {
                method: "POST",
                headers: { "Content-type": "application/json" },
                body: JSON.stringify(user)
            }).then(response => {
                return response.json()
            }).then((json: any) => {
                localStorage.setItem("logado", "true")
                localStorage.setItem("userId", json["userId"])
                localStorage.setItem("userNome", json["userNome"])
                navigate("/")
            }).catch(error => {
                console.error("Erro ao fazer requisição - ", error)
                throw new Error
            }).finally(() => setSubmiting(false)),
            {
                pending: 'Logando',
                success: 'Logado com sucesso 👌',
                error: 'Ocorreu um erro 🤯'
            }
        );
    }

    // Redirecionamento
    if (localStorage.getItem("true") == "true") {
        return <Navigate to="/" />
    } else {
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
}

export default Login