import { ChangeEvent, FormEvent, useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import { User } from '../types';

import trees from '../assets/forest-background.png'

import '../styles/Formulario.scss'
import Header from '../components/Header';

const apiUrl = import.meta.env.BASE_URL as string

const Cadastro = () => {
    
    const navigate = useNavigate()

    const [user, setUser] = useState<User>();

    const [confirmarSenha, setConfirmarSenha] = useState<string>()

    const [submiting, setSubmiting] = useState<boolean>(false)

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setUser({ ...user, [name]: value })
    }

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        setSubmiting(true)
        if (user?.userPassword == confirmarSenha) {
            console.log("requisição")
            toast.promise(
                fetch(`${apiUrl}/User`, {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
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
                    pending: 'Enviando dados cadastrais',
                    success: 'Usuário cadastrado 👌',
                    error: 'Ocorreu um erro 🤯',
                }
            );
        }
    }

    if (localStorage.getItem("logado") == "true") {
        return <Navigate to="/" />
    } else {
        return (
            <section className="formulario">
                <Header />
                <h2>Cadastro</h2>
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
}

export default Cadastro