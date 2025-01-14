import {  ReactNode } from 'react'
import './button.css'

interface props {
    children: ReactNode // ReactNode es un tipo de dato que puede ser cualquier cosa que se pueda renderizar en react
    parentMethod : () => void   // parentMethod es una funcion que no recibe parametros y no retorna nada
}


export const childrenButton = ({children}:Omit <props, "parentMethod">) => {    // Omit es un tipo de dato que se usa para omitir una propiedad de un tipo de dato en este caso de la interface props 
    return (<>{children}</>) // retorna un children que es cualquier cosa que se pueda renderizar en react dentro de un fragment <> </> y dentro del componente Button
}



export const Button = ({children, parentMethod}:props) => {
    return (
        <button className='custom-button' onClick={parentMethod}> { /*boton personalizado que al hacer click ejecuta la funcion parentMethod */}
            {children} {/* permite que se pueda renderizar cualquier cosa dentro del boton */}
        </button>
    )
}