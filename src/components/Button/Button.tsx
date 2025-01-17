import {  ReactNode } from 'react'
import './button.css'
import { useGlobalContext } from '../../contexts/global.context'

interface props {
    children: ReactNode // ReactNode es un tipo de dato que puede ser cualquier cosa que se pueda renderizar en react
    parentMethod : () => void   // parentMethod es una funcion que no recibe parametros y no retorna nada
}


interface childrenProps{
    children: ReactNode
}

export const ChildrenButton = ({children}:childrenProps) => {    // Omit es un tipo de dato que se usa para omitir una propiedad de un tipo de dato en este caso de la interface props
    const {value } = useGlobalContext() // se extrae el valor del contexto global
    return (<><div> {value}:{children}</div></>) //retorna el valor de value y el children que es cualquier cosa que se pueda renderizar en react
}



export const Button = ({children, parentMethod}:props) => {
    const { setValue} = useGlobalContext()//se extrae el valor del contexto global

    const handleClick = () => {
        setValue(10),
        parentMethod()
}

    return (
        <button className='custom-button' onClick={handleClick}> 
            {children}{/*se renderiza el children  */}
        </button>
    )
}
