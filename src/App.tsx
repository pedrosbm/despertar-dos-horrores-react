import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import Login from "./screens/Login"
import Cadastro from "./screens/Cadastro"
import Home from "./screens/Home"

const App = () => {

    return(
        <Router>
            <Routes>
                <Route path="/" Component={localStorage.getItem("logado") == "true" ? Home : Login}/>
                <Route path="/Cadastro" Component={Cadastro}/>
                
            </Routes>
        </Router>
    )
}

export default App