import React, { useRef} from "react"
import { createPortal } from "react-dom"
import { useModalContext } from "./context/ModalContext"

import "./modal.css"
interface Props {
    children : React.ReactNode 
}

export const Modal = ({children}: Props) => {
    const  modalRef = useRef<HTMLDivElement>(null) // referencia a un div que de momento no se ha creado (null)

    const {State, setState} = useModalContext()// abrir o cerrar el modal

    const closeModal = ( ) => {
        setState(false)
        
    }

    const modalRoot = document.getElementById("modal")

    if(!State || !modalRoot){
        return null;
    }

    return createPortal( 
    <div className="Overlay" onClick={closeModal}>
        <div className=" modal" ref={modalRef} > {/*hace referencia al modalRef creacion del ref */}
            {children}{/*se puede renderizar cualquier cosa  */}
            <button className="button-close" onClick={closeModal}>close</button> {/*boton para cerrar el modal */}
        </div>
    </div>,modalRoot)
    
} 