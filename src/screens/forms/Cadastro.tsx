import { ChangeEvent, FormEvent, useContext, useState } from 'react';
import { AuthContext } from '@/providers/AuthProvider';
import { Link } from 'react-router-dom';
import { User } from '@/types'; 

import './Formulario.scss'
import Header from '@/components/Header';

const Cadastro = () => {

    // States & Variables
    const [user, setUser] = useState<User>({cargo: "PLAYER"} as User);
    const [confirmarSenha, setConfirmarSenha] = useState<string>()
    const { cadastrar, isLoading } = useContext(AuthContext)

    // functions
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setUser({ ...user, [name]: value })
    }

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        if(user.senha == confirmarSenha){
            cadastrar(user)
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
                        <input placeholder="John Doe" value={user?.nome} onChange={handleChange} id="nome" name="nome" required type="text" min={3}/>
                    </div>

                    <div className="inputBox">
                        <label htmlFor="senha">Senha</label>
                        <input placeholder="********" value={user?.senha} onChange={handleChange} id="senha" name="senha"  required type="password" />
                    </div>

                    <div className="inputBox">
                        <label htmlFor="confirmSenha">Confirmar Senha</label>
                        <input placeholder="********" value={confirmarSenha} onChange={(e: ChangeEvent<HTMLInputElement>) => setConfirmarSenha(e.target.value)} id="confirmSenha" required type="password" />
                    </div>
                </div>

                <div className="confirmation">
                    <Link className='link' to="/Login">Já tenho uma conta</Link>
                    <input disabled={isLoading} className="sendForm" type="submit" name="enviar" id="enviar" />
                </div>
            </form>
            <img className="backgroundTrees" src="/forest-background.png" alt="" />
        </section>
    )
}

export default Cadastro