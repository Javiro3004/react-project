import React, { createContext,  useContext } from "react";


interface GlobalContextType {
    value  :  number;// es el tipo de dato que va a tener el contexto
    setValue: React.Dispatch<React.SetStateAction<number>> // es una funcion que va  a cambiar el estado de value 
}


export const GlobalContext = createContext<GlobalContextType>({// se crea el context
    value: 0,//con el valor inicial de value 0
    setValue: () => {}
} );// y una funcion vacia ya que no se le ha asignado un valor  a setValue


// manejo de control del contexto 

export const useGlobalContext = ( ) => { // se crea una funcion que va a ser utilizada para acceder al contexto
    const context = useContext(GlobalContext); // se crea una constante que va a encapusular al globalcontext

    if (!context.value && context.value !==0 ){ // si el contexto es igual a 0 
        throw new Error("useGlobalContext debe ser usado dentro de un GlobalProvider") // si el contexto es igual a 0 se lanza un error ya que no se esta utilizando dentro de un GlobalProvider
    }
    return context; // si no se cumple la condicion se retorna el contexto que es globalcontext es decir se renderiza el globalProvider
}
/*import { createContext, useContext } from "react";


interface GlobalContextType {
    value: number | null
    setValue: React.Dispatch<React.SetStateAction<number>>
}
export const GlobalContext = createContext<GlobalContextType>({
    value: null,
    setValue: () => { }
})
export const useGlobalContext = () => {
    const context = useContext(GlobalContext)
    if (!context.value && context.value !== 0) {
        throw new Error("GlobalContext must be used within a GlobalContextProvider")
    }
    return context;
}*/
