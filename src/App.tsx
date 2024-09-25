import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"
import 'react-toastify/dist/ReactToastify.css';

import Login from "./screens/Login"
import Cadastro from "./screens/Cadastro"
import Characters from "./screens/Characters";
import Personagem from "./screens/Inventory"
import Home from "./screens/Home";
import { useContext } from "react";
import { AuthContext } from "./providers/AuthContext";

const redirect = (route: string) => {
    return <Navigate to={`/${route}`}/>
}

const App = () => {
    const { isLoggedIn } = useContext(AuthContext)

    return (
        <Router>
            <Routes>
                <Route path="/" Component={Home} />
                <Route path="/Characters" Component={isLoggedIn ? Characters : () => redirect("Login")} />
                <Route path="/Personagem" Component={isLoggedIn ? Personagem : () => redirect("Login")} />
                <Route path="/Cadastro" Component={!isLoggedIn ? Cadastro : () => redirect("Personagem")} />
                <Route path="/Login" Component={!isLoggedIn ? Login : () => redirect("Personagem")} />
            </Routes>
        </Router>
    )
}

export default App