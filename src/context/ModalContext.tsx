import React, {createContext, useState} from "react";

interface IModalContext {
    modal: boolean
    open: () => void
    close: () => void
    button: boolean
}

export const ModalContext = createContext<IModalContext>({
    modal: false,
    open: () => {},
    close: () => {},
    button: true
})

export const ModalState = ({ children }: {children: React.ReactNode}) => {
    const [modal, setModal] = useState(false)
    const [button, setButton] = useState(true)

    const open = () => {
        setModal(true)
        setButton(false)
    }
    const close = () => {
        setModal(false)
        setButton(true)
    }

    return (
        <ModalContext.Provider value={{modal, open, close, button}}>
            {  children }
        </ModalContext.Provider>
    )
}