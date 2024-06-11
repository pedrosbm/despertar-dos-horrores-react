import { ChangeEvent, MouseEvent, useState } from "react"
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import { User } from "../types";

import '../styles/Formulario.scss'

const Login = () => {

    const [user, setUser] = useState<User>();

    const [submiting, setSubmiting] = useState<boolean>(false)

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setUser({ ...user, [name]: value })
    }

    const handleSubmit = async (e: MouseEvent<HTMLInputElement>) => {
        e.preventDefault()
        setSubmiting(true)

        const response = await toast.promise(
            fetch("http://localhost:8080/Authenticate", {
                method: "GET"
            }).then(response => {
                return response.json
            }).finally(() => setSubmiting(false)),
            {
                pending: 'Logando',
                success: 'Logado com sucesso 👌',
                error: 'Ocorreu um erro 🤯'
            }
        );

        //TODO implementar login
        localStorage.setItem("logado", "true")
    }

    return (
        <section className="formulario">
            <h2>Login</h2>
            <form>
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
                    <input disabled={submiting} className="sendForm" onClick={handleSubmit} type="submit" name="enviar" id="enviar" />
                </div>
            </form>
        </section>
    )
}

export default Login