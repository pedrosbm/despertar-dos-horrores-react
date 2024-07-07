import { Link } from "react-router-dom"


import styles from "../styles/Header/Header.module.scss"

const Header = () => {
    return (
        <header className={styles.cabeçalho}>
            <Link draggable="false" className={styles.logo} to="/">
                <h1>Despertar dos Horrores</h1>
            </Link>
        </header>
    )
}

export default Header