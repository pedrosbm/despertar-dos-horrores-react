import { createContext, PropsWithChildren } from "react";
import { Bounce, ToastContainer, toast } from "react-toastify";


type Context = {
    message: (message: string) => void,
    warn: (message: string) => void,
    info: (message: string) => void,
    error: (message: string) => void,
}

const ToastContext = createContext<Context>({} as Context)

const ToastProvider = ({ children }: PropsWithChildren) => {

    const message = (message: string) => {
        toast(message)
    }

    const warn = (message: string) => {
        toast.warn(message)
    }

    const info = (message: string) => {
        toast.info(message)
    }

    const error = (message: string) => {
        toast.error(message)
    }

    return (
        <ToastContext.Provider value={{ message , warn, info, error }}>
            <ToastContainer
                position="top-right"
                autoClose={2500}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss={false}
                draggable
                pauseOnHover={false}
                theme="dark"
                transition={Bounce}
            />
            {children}
        </ToastContext.Provider>
    )
}

export {ToastProvider, ToastContext}