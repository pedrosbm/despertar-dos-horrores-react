import { User } from "@/types"
import Cookies from "js-cookie"
import { createContext, PropsWithChildren, useEffect, useState } from "react"
import { toast } from "react-toastify"

type Context = {
    isLoggedIn: boolean,
    cadastrar: (data: User) => Promise<void>,
    logar: (data: User) => Promise<void>,
    logoff: () => void
}

const AuthContext = createContext<Context>({} as Context)

const apiUrl = import.meta.env.VITE_API_URL as string

const AuthProvider = ({ children }: PropsWithChildren) => {
    const [isLoggedIn, setIsloggedIn] = useState<boolean>(false)

    useEffect(() => {
        if (Cookies.get("token") != undefined) {
            setIsloggedIn(true)
        }
    }, [])

    const cadastrar = async (data : User) => {
        await fetch(`${apiUrl}/usuario`, {
            method:"POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(data)
        }).then(response => {
            if(response.ok){
                return response.json()
            }
        }).then(json => {
            Cookies.set("token",json.token)
            setIsloggedIn(true)
        }).catch(e => {
            toast.error(e.Message)
        })
    }
    
    const logar = async (data : User) => {
        await fetch(`${apiUrl}/login`, {
            method:"POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(data)
        }).then(response => {
            if(response.ok){
                return response.json()
            }
        }).then(json => {
            Cookies.set("token",json.token)
            setIsloggedIn(true)
        }).catch(e => {
            toast.error(e.Message)
        })
    }
    
    const logoff = async () => {
        Cookies.remove("token")
        await setIsloggedIn(false)
    }

    return (
        <AuthContext.Provider value={{ isLoggedIn, cadastrar, logar, logoff }}>
            {children}
        </AuthContext.Provider>
    )
}

export { AuthContext, AuthProvider }