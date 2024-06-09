import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import 'normalize.css'

import Login from "./screens/Login"
import Cadastro from "./screens/Cadastro"
import Home from "./screens/Home"
import Personagem from "./screens/Personagem"
import 'react-toastify/dist/ReactToastify.css';
import { Bounce, ToastContainer } from "react-toastify"


const App = () => {

    return(
        <Router>
            <Routes>
                <Route path="/" Component={localStorage.getItem("logado") == "true" ? Home : Login}/>
                <Route path="/Cadastro" Component={Cadastro}/>
                <Route path="/Login" Component={Login} />
                <Route path="/Personagem" Component={Personagem} />
            </Routes>
            
            <ToastContainer
                position="bottom-center"
                autoClose={2300}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss={false}
                draggable={false}
                pauseOnHover={false}
                theme="dark"
                transition={Bounce}
            />
        </Router>
    )
}

export default App