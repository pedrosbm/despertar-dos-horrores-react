import { Link } from "react-router-dom"


import "../styles/Header.scss"

const Header = () => {
    return (
        <header className="cabeçalho">
            <Link draggable="false" className="logo" to="/">
                <h1>Despertar dos Horrores</h1>
            </Link>
        </header>
    )
}

export default Header