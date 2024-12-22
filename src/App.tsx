import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"
import { useContext } from "react";
import { AuthContext } from "./providers/AuthProvider";

import 'react-toastify/dist/ReactToastify.css';

import Login from "./screens/forms/Login";
import Cadastro from "./screens/forms/Cadastro";
import Characters from "./screens/characters/Characters"
import Home from "./screens/home/Home";

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
                <Route path="/Cadastro" Component={!isLoggedIn ? Cadastro : () => redirect("Characters")} />
                <Route path="/Login" Component={!isLoggedIn ? Login : () => redirect("Characters")} />
            </Routes>
        </Router>
    )
}

export default App