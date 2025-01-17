import { ReactNode, useState } from "react"
import { GlobalContext } from "./global.context"


export const EmpyGlobalState: number = 0 // se define el valor vacio del context que es un tipo de dato number con valor de cero


interface GlobalProps {
    children:  ReactNode // especifica que children es cualuier cosa renderizable por react 
}

export const GlobalProvider = ({children}:GlobalProps) => { // el componente que va a proveer el contexto recibe un children como parametro 
    const [value, setValue] = useState<number>(EmpyGlobalState) // son los estados que se crearon en la interface GlobalContextType  

    return(
        <GlobalContext.Provider value={{value, setValue}}> {/* hacen referencia a la interface que se creo arriba y se le asigna el valor de value y setValue  */}
            {children}
        </GlobalContext.Provider>
    )
}

/*
import { ReactNode, useState } from "react"
import { GlobalContext } from "./global.context"

const EmptyGlobalState: number = 0
interface GlobalProps {
    children: ReactNode
}
export const GlobalProvider = ({ children }: GlobalProps) => {
    const [value, setValue] = useState<number>(EmptyGlobalState)
    return (
        <GlobalContext.Provider value={{ value, setValue }}>{children}</GlobalContext.Provider>
    )
}*/
