import { createContext, useState, ReactNode, useContext} from "react";

export const ModalContext = createContext<{
    State: boolean;
    setState: React.Dispatch<React.SetStateAction<boolean>>
}>({
    State:false,
    setState: () => null

})

export const ModalProvider = ({children }: {children: ReactNode}) => {
    const [State,setState] = useState<boolean>(false)

    return <ModalContext.Provider value={{State, setState}}>{children}</ModalContext.Provider>
}

export const useModalContext =() => {
    const context = useContext(ModalContext)
    if(!context) {
        throw new Error("errorsito")
    }

    return context;
}