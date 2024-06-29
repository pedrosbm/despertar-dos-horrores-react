import { ChangeEvent, FormEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import { User } from '../types';
import Cookies from "js-cookie"

import trees from '../assets/forest-background.png'

import '../styles/Formulario.scss'
import Header from '../components/Header';

const apiUrl = import.meta.env.BASE_URL as string

const Cadastro = () => {

    // States & Variables
    const [user, setUser] = useState<User>();
    const [confirmarSenha, setConfirmarSenha] = useState<string>()
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
        
        if (user?.userPassword == confirmarSenha) {
            console.log("fazendo login")
            setSubmiting(true)
            
            toast.promise(fetch(`${apiUrl}/User`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(user)
            }).then(response => {
                if(response.ok){
                    return response.json()
                }
            }).then((json: any) => {
                Cookies.set("logged", "true", {secure: true, sameSite: "Strict"})
                Cookies.set("userId", json.userId, {secure: true, sameSite: "Strict"})
                navigate("/")
            }).catch(error => {
                console.error("Erro ao fazer requisição - ", error)
                throw new Error
            }).finally(() => setSubmiting(false)), {
                success: "Concluido",
                error: "Ocorreu algum erro",
                pending: "Enviando dados cadastrais"
            })
        } else {
            toast.warn("Senhas devem corresponder")
        }
    }

    isLoggedIn && navigate("Home")
    return (
        <section className="formulario">
            <Header />
            <h2>Cadastro</h2>
            <form onSubmit={handleSubmit}>
                <div className="fields">
                    <div className="inputBox">
                        <label htmlFor="nome">Nome</label>
                        <input placeholder="Nome" value={user?.userNome} onChange={handleChange} id="nome" name="userNome" required type="text" min={3}/>
                    </div>

                    <div className="inputBox">
                        <label htmlFor="senha">Senha</label>
                        <input placeholder="********" value={user?.userPassword} onChange={handleChange} id="senha" name="userPassword" required type="password" />
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
            <img className="backgroundTrees" src={trees} alt="" />
        </section>
    )
}

export default Cadastro