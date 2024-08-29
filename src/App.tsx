import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Bounce, ToastContainer } from "react-toastify"
import { ThemeProvider } from "./components/ThemeProvider";
import 'react-toastify/dist/ReactToastify.css';

import Login from "./screens/Login"
import Cadastro from "./screens/Cadastro"
import Characters from "./screens/Characters";
import Personagem from "./screens/Inventory"
import Home from "./screens/Home";

const App = () => {
    return (
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
            <Router>
                <Routes>
                    <Route path="/" Component={Home} />
                    <Route path="/Characters" Component={Characters} />
                    <Route path="/Cadastro" Component={Cadastro} />
                    <Route path="/Login" Component={Login} />
                    <Route path="/Personagem" Component={Personagem} />
                </Routes>

                <ToastContainer
                    position="bottom-left"
                    autoClose={2500}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss={false}
                    draggable={false}
                    pauseOnHover={false}
                    theme="dark"
                    transition={Bounce}
                    stacked={true}
                />
            </Router>
        </ThemeProvider>
    )
}

export default App