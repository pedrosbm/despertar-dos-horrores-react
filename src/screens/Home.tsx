import { Button } from "@/components/ui/button"
import { useNavigate } from "react-router-dom"

const Home = () => {

    const navigate = useNavigate()

    return (
        <section className="flex flex-col h-screen w-screen items-center justify-center gap-[2rem]">
            <h1 className="text-7xl ">Despertar dos horrores</h1>

            <div className="flex gap-[1rem]">
                <Button onClick={() => navigate("/Login")}>Login</Button>
                <Button onClick={() => navigate("/Cadastro")} variant={"secondary"}>Cadastrar</Button>
            </div>
        </section>
    )
}

export default Home 