import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import 'normalize.css'

import Login from "./screens/Login"
import Cadastro from "./screens/Cadastro"
import Home from "./screens/Home"
import Personagem from "./screens/Personagem"


const App = () => {

    return(
        <Router>
            <Routes>
                <Route path="/" Component={localStorage.getItem("logado") == "true" ? Home : Login}/>
                <Route path="/Cadastro" Component={Cadastro}/>
                <Route path="/Login" Component={Login} />
                <Route path="/Personagem" Component={Personagem} />
            </Routes>
        </Router>
    )
}

export default App