import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"
import 'react-toastify/dist/ReactToastify.css';

import Login from "./screens/Login"
import Cadastro from "./screens/Cadastro"
import Characters from "./screens/Characters";
import Personagem from "./screens/Inventory"
import Home from "./screens/Home";
import { useContext } from "react";
import { AuthContext } from "./providers/AuthContext";

const redirect = () => {
    return <Navigate to="/Personagens"/>
}

const App = () => {
    const { isLoggedIn } = useContext(AuthContext)

    return (
        <Router>
            <Routes>
                <Route path="/" Component={Home} />
                <Route path="/Characters" Component={Characters} />
                <Route path="/Personagem" Component={Personagem} />
                <Route path="/Cadastro" Component={!isLoggedIn ? Cadastro : redirect} />
                <Route path="/Login" Component={!isLoggedIn ? Login : redirect} />
            </Routes>
        </Router>
    )
}

export default App