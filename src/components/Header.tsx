import { Link } from "react-router-dom"

import userIcon from '../assets/user-icon.png'
import ornarmentedLine from '../assets/ornamented-line.png'

import "../styles/Header.scss"

const Header = () => {
    return (
        <header className="cabeçalho">
            <Link draggable="false" className="logo" to="/">
                <h1>Despertar dos Horrores</h1>
                <img draggable="false" className="ornamentedLine" src={ornarmentedLine} alt="" />
            </Link>
            <img draggable="false" className="userIcon" src={userIcon} alt="" />
        </header>
    )
}

export default Header