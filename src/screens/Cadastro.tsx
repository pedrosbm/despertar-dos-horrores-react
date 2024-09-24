import { ChangeEvent, FormEvent, useContext, useEffect, useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import { User } from '../types';
import Cookies from "js-cookie"

import '../styles/Formulario.scss'
import Header from '../components/Header';
import { AuthContext } from '@/providers/AuthContext';

const Cadastro = () => {

    // States & Variables
    const [user, setUser] = useState<User>({} as User);
    const [confirmarSenha, setConfirmarSenha] = useState<string>()
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
        
        if (user?.senha == confirmarSenha) {
            setSubmiting(true)
            fetch(`${apiUrl}/usuario`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(user)
            }).then(response => {
                if(response.ok){
                    return response.json()
                }
            }).then((json) => {
                Cookies.set("token", json.token, { secure: true, sameSite: "Strict" })
                navigate("/characters")
            }).catch(error => {
                console.error("Erro ao fazer requisição - ", error)
                throw new Error()
            }).finally(() => setSubmiting(false))
        } else {
            toast.warn("Senhas devem corresponder")
        }
    }

    isLoggedIn && <Navigate to="characters"/>
    return (
        <section className="formulario">
            <Header />
            <h2>Cadastro</h2>
            <form onSubmit={handleSubmit}>
                <div className="fields">
                    <div className="inputBox">
                        <label htmlFor="nome">Nome</label>
                        <input placeholder="John Doe" value={user?.nome} onChange={handleChange} id="nome" name="userNome" required type="text" min={3}/>
                    </div>

                    <div className="inputBox">
                        <label htmlFor="senha">Senha</label>
                        <input placeholder="********" value={user?.senha} onChange={handleChange} id="senha" name="userPassword"  required type="password" />
                    </div>

                    <div className="inputBox">
                        <label htmlFor="confirmSenha">Confirmar Senha</label>
                        <input placeholder="********" value={confirmarSenha} onChange={(e: ChangeEvent<HTMLInputElement>) => setConfirmarSenha(e.target.value)} id="confirmSenha" required type="password" />
                    </div>
                </div>

                <div className="confirmation">
                    <Link className='link' to="/Login">Já tenho uma conta</Link>
                    <input disabled={submiting} className="sendForm" type="submit" name="enviar" id="enviar" />
                </div>
            </form>
            <img className="backgroundTrees" src="/forest-background.png" alt="" />
        </section>
    )
}

export default Cadastro