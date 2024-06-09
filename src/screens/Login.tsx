import { ChangeEvent, MouseEvent, useState } from "react"
import { User } from "../types";
import { Bounce, ToastContainer, toast } from "react-toastify";

const Login = () => {

    const [user, setUser] = useState<User>();

    const [confirmarSenha, setConfirmarSenha] = useState<string>()

    const handleChange = (e : ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target

        setUser({...user, [name]: value})
    }

    const handleSubmit = (e : MouseEvent<HTMLInputElement>) => {
        e.preventDefault()

        if(user?.userPassword === confirmarSenha){
            toast("fazeno")
        }
    }

    return (
        <form className="formulario">
            <div className="fields">
                <div className="inputBox">
                    <label htmlFor="nome">Nome</label>
                    <input value={user?.userNome} onChange={handleChange} id="nome" name="nome" required type="text" />
                </div>

                <div className="inputBox">
                    <label htmlFor="senha">Senha</label>
                    <input value={user?.userPassword} onChange={handleChange} id="senha" name="senha" required type="password" />
                </div>

                <div className="inputBox">
                    <label htmlFor="confirmSenha">Confirmar Senha</label>
                    <input value={confirmarSenha} onChange={() => setConfirmarSenha} id="confirmSenha" required type="passwords" />
                </div>

                <input onClick={handleSubmit} type="submit" name="enviar" id="enviar" />
            </div>

            <div className="confirmation">

            </div>
        </form>
    )
}

export default Login