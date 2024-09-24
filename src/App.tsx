import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Bounce, ToastContainer } from "react-toastify"
import { ThemeProvider } from "./components/ThemeProvider";
import 'react-toastify/dist/ReactToastify.css';

import Login from "./screens/Login"
import Cadastro from "./screens/Cadastro"
import Characters from "./screens/Characters";
import Personagem from "./screens/Inventory"
import Home from "./screens/Home";
import { useContext } from "react";
import { AuthContext } from "./providers/AuthContext";

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" Component={Home} />
                <Route path="/Characters" Component={Characters} />
                <Route path="/Personagem" Component={Personagem} />
                <Route path="/Cadastro" Component={Cadastro} />
                <Route path="/Login" Component={Login} />
            </Routes>
        </Router>
    )
}

export default App