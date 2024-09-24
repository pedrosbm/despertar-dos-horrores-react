import Cookies from "js-cookie"
import { createContext, PropsWithChildren, useEffect, useState } from "react"


type Context = {
    isLoggedIn: boolean
}

const AuthContext = createContext<Context>({} as Context)

const AuthProvider = ({ children }: PropsWithChildren) => {
    const [isLoggedIn, setIsloggedIn] = useState<boolean>(false)

    useEffect(() => {
        if (Cookies.get("token") != undefined) {
            setIsloggedIn(true)
        }
    }, [])

    const authenticate = () => {

    }

    return (
        <AuthContext.Provider value={{ isLoggedIn, }}>
            {children}
        </AuthContext.Provider>
    )
}

export { AuthContext, AuthProvider }