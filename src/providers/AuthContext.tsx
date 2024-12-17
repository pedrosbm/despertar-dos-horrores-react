import { createContext, PropsWithChildren, useEffect, useState } from "react"
import Cookies from "js-cookie"

import { User } from "@/types"
import { toast } from "react-toastify"

type Context = {
    isLoggedIn: boolean,
    isLoading: boolean,
    cadastrar: (data: User) => void,
    logar: (data: User) => void,
    logoff: () => void
}

const AuthContext = createContext<Context>({} as Context)

const apiUrl = import.meta.env.VITE_API_URL as string

const AuthProvider = ({ children }: PropsWithChildren) => {
    const [isLoggedIn, setIsloggedIn] = useState<boolean>(false)
    const [isLoading, setisLoading] = useState<boolean>(false)

    useEffect(() => {
        if (Cookies.get("token") != undefined) {
            setIsloggedIn(true)
        }
    }, [])

    const cadastrar = async (data: User) => {
        setisLoading(true)
        await fetch(`${apiUrl}/usuario`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data)
        }).then(response => {
            if (response.ok) {
                return response.json()
            }
        }).then(json => {
            Cookies.set("userid", json.id)
            Cookies.set("cargo", json.cargo)
            Cookies.set("", json.cargo)
            setIsloggedIn(true)
        }).catch(e => {
            toast.error(e.Message)
        }).finally(() => {
            setisLoading(false)
        })
    }
    
    const logar = async (data: User) => {
        setisLoading(true)
        await fetch(`${apiUrl}/login`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data)
        }).then(response => {
            if (response.ok) {
                return response.json()
            }
        }).then(json => {
            Cookies.set("userid", json.id)
            Cookies.set("cargo", json.cargo)
            setIsloggedIn(true)
        }).catch(e => {
            toast.error(e.Message)
        }).finally(() => {
            setisLoading(false)
        })
    }
    
    const logoff = () => {
        setisLoading(true)
        Cookies.remove("userid")
        setisLoading(false)
        setIsloggedIn(false)
    }

    return (
        <AuthContext.Provider value={{ isLoggedIn, cadastrar, logar, logoff, isLoading }}>
            {children}
        </AuthContext.Provider>
    )
}

export { AuthContext, AuthProvider }