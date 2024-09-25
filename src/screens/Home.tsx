import { Button } from "@/components/ui/button"
import { AuthContext } from "@/providers/AuthContext"
import { useContext } from "react"
import { useNavigate } from "react-router-dom"

const Home = () => {

    const navigate = useNavigate()

    const { isLoggedIn } = useContext(AuthContext)

    return (
        <section className="flex flex-col h-screen w-screen items-center justify-center gap-[2rem]">
            <h1 className="text-7xl ">Despertar dos horrores</h1>

            {!isLoggedIn ?
            <div className="flex gap-[1rem]">
                <Button onClick={() => navigate("/Login")}>Login</Button>
                <Button onClick={() => navigate("/Cadastro")} variant={"secondary"}>Cadastrar</Button>
            </div>
            :
            <div className="flex gap-[1rem]">
                <Button onClick={() => navigate("/Characters")}>Personagens</Button>
            </div>
            }
        </section>
    )
}

export default Home 