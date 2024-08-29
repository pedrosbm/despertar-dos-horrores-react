import { Link } from "react-router-dom"

const Header = () => {
    return (
        <header className="flex items-center justify-center fixed top-0 border-b-[1px] border-[blueviolet] w-screen text-center bg-[#24051842] shadow-[1px_1px_100px_-30px_#8a2be2] p-[1rem] backdrop-blur-sm">
            <Link draggable="false" className="no-underline text-white" to="/">
                <h1>Despertar dos Horrores</h1>
            </Link>
        </header>
    )
}

export default Header