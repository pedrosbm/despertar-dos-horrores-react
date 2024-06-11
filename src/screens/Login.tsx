import { ChangeEvent, MouseEvent, useState } from "react"
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { User } from "../types";

import '../styles/Formulario.scss'

const Login = () => {

    const [user, setUser] = useState<User>();

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setUser({ ...user, [name]: value })
    }

    const handleSubmit = (e: MouseEvent<HTMLInputElement>) => {
        e.preventDefault()
        
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
                    <input className="sendForm" onClick={handleSubmit} type="submit" name="enviar" id="enviar" />
                </div>
            </form>
        </section>
    )
}

export default Login