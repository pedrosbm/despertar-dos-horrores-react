import { ChangeEvent, FormEvent, useState } from 'react';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import { User } from '../types';

import trees from '../assets/forest-background.png'

import '../styles/Formulario.scss'
import Header from '../components/Header';

const Cadastro = () => {

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
            const response = await toast.promise(
                fetch("http://localhost:8080/User", {
                    method: "POST",
                    body: JSON.stringify(user)
                }).then(response => {
                    return response.json
                }).catch(json => {
                    console.log(json)
                }).finally(() => setSubmiting(false)),
                {
                    pending: 'Enviando dados cadastrais',
                    success: 'Usuário cadastrado 👌',
                    error: 'Ocorreu um erro 🤯',
                }
            );
            // TODO implementar cadastro
            localStorage.setItem("logado", "true")
        }
    }

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

export default Cadastro