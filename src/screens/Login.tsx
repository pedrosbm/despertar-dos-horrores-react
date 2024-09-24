import { ChangeEvent, FormEvent, useContext, useState } from "react"
import { Link } from "react-router-dom";
import { User } from "../types";

import '../styles/Formulario.scss'
import Header from "../components/Header";
import { AuthContext } from "@/providers/AuthContext";

const Login = () => {
    // states & vars
    const [user, setUser] = useState<User>({ cargo: "PLAYER" } as User);
    const [submiting, setSubmiting] = useState<boolean>(false)
    const { logar } = useContext(AuthContext)

    // functions
    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target
        setUser({ ...user, [name]: value })
    }

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setSubmiting(true)
        console.log(user)
        logar(user).catch(e => {
            console.error(e)
        }).finally(() => {
            setSubmiting(false)
        })
    }

    // isLoggedIn && <Navigate to="characters"/>
    return (
        <section className="formulario">
            <Header />
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <div className="fields">
                    <div className="inputBox">
                        <label htmlFor="nome">Nome</label>
                        <input placeholder="John Doe" value={user?.nome} onChange={handleChange} id="nome" name="nome" required type="text" />
                    </div>

                    <div className="inputBox">
                        <label htmlFor="senha">Senha</label>
                        <input placeholder="********" value={user?.senha} onChange={handleChange} id="senha" name="senha" required type="password" />
                    </div>

                    <div className="inputBox">
                        <label htmlFor="cargo">Cargo</label>
                        <select value={user?.cargo} onChange={handleChange} id="cargo" name="cargo" required>
                            <option value="PLAYER" defaultChecked>Player</option>
                            <option value="MESTRE" >Mestre</option>
                        </select>
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