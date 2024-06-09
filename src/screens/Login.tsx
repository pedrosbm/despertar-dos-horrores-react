

const Login = () => {
    return (
        <form className="formulario">
            <div className="fields">
                <div className="inputBox">
                    <label htmlFor="nome">Nome</label>
                    <input id="nome" required type="text" />
                </div>

                <div className="inputBox">
                    <label htmlFor="senha">Senha</label>
                    <input id="sehna" required type="password" />
                </div>

                <div className="inputBox">
                    <label htmlFor="confirmSenha">Confirmar Senha</label>
                    <input id="confirmSenha" required type="passwords" />
                </div>

                <input type="submit" name="enviar" id="enviar" />
            </div>

            <div className="confirmation">

            </div>
        </form>
    )
}

export default Login