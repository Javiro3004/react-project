import { useRef } from "react";

export const FocusInput = () => {
    const inputRef = useRef<HTMLInputElement>(null)

    const handleButtonClick = () => {
        if (!inputRef.current){// si el input no existe en el DOM
            console.log('no existe un elemento input ') // muestra que en el dom no hay ningun input enlazado 
            return;
    }
    inputRef.current.focus()// si existe el input en el DOM, lo selecciona
    }

    return(
        <div>
            <input ref={inputRef} type="text" placeholder="escribe aca "/> {/* el input se enlaza con el ref y se muestra en el DOM */}
            <button onClick={handleButtonClick}>enfoca el input</button>
        </div>
    )
}

