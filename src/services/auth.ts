import { User } from "@/types"
import Cookies from "js-cookie"

const apiUrl = import.meta.env.VITE_API_URL as string

const cadastrar = async (data : User) => {
    const response = await fetch(`${apiUrl}/usuario`, {
        method:"POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(data)
    })

    return response
}

const logar = async (data : User) => {
    fetch(`${apiUrl}/auth`, {
        method:"POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(data)
    }).then(response => {
        if(response.ok){
            return response.json()
        }
    }).then(json => {
        
    })
}

export { cadastrar, logar }