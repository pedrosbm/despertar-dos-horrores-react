import { Link } from "react-router-dom"

const HeaderSec = () => {
    return (
        <header className="z-[2] flex items-center justify-center fixed top-0 border-b-[1px] border-[#ffd700] w-screen text-center bg-[#24051842] shadow-[1px_1px_100px_-30px_#ffd700] p-[1rem] backdrop-blur-sm">
            <Link draggable="false" className="no-underline text-white" to="/">
                <h1>Despertar dos Horrores</h1>
            </Link>
        </header>
    )
}

export default HeaderSec