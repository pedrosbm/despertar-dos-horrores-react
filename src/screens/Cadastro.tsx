import { ChangeEvent, MouseEvent, useState } from 'react';
import '../styles/Formulario.scss'
import { User } from '../types';
import { Link } from 'react-router-dom';

const Cadastro = () => {

    const [user, setUser] = useState<User>();

    const [confirmarSenha, setConfirmarSenha] = useState<string>()

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setUser({ ...user, [name]: value })
    }

    const handleSubmit = (e: MouseEvent<HTMLInputElement>) => {
        e.preventDefault()

        if (user?.userPassword == confirmarSenha) {

        }
    }

    return (
        <section className="formulario">
            <h2>Cadastro</h2>
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

                    <div className="inputBox">
                        <label htmlFor="confirmSenha">Confirmar Senha</label>
                        <input placeholder="********" value={confirmarSenha} onChange={(e: ChangeEvent<HTMLInputElement>) => setConfirmarSenha(e.target.value)} id="confirmSenha" required type="password" />
                    </div>
                </div>

                <div className="confirmation">
                    <Link className='link' to="/Login">Já tenho uma conta</Link>
                    <input className='sendForm' onClick={handleSubmit} type="submit" name="enviar" id="enviar" />
                </div>
            </form>
        </section>
    )
}

export default Cadastro