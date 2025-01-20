// objetivo:  nos permite crear una referencia mutable que persiste durante todo el ciclo de vida del componente 
// sin causar un re-render
// objetivo dos : hacer referencia a un elemento del DOM 
// elemplo:
// un separador de libro que nos indica donde quedo la lectura 
// NOO modifa el contenido del libro 

import { useRef, useState } from "react";

export const BookReader = () => { 
    const CurrentPageRef= useRef<number>(1) // creacion del objeto useRef con el valor inicial de 1
    const [current, setCurrent ] = useState<number>(1) // estado para guardar el valor de la pagina solo cunado el valor cambie  se va a porducir un re-render
    const nextPage = () => { // funcion (metodo) para avanzar de pagina 
        CurrentPageRef.current += 1; // incremnta el valor de CurrentPageRef.current en 1  
        console.log(`avanzaste a la pagina ${CurrentPageRef.current}`)// imprimir el nuevo valor 
    }

    const previusPage = () =>{ //   funcion (metodo) para retorceder  de pagina
        if (CurrentPageRef.current === 1){//  proceso de control de error en caso de que se este en la pagina uno 
            console.log(`no se puede retroceder mas porque ya estas en ${CurrentPageRef.current}`)// en caso de que se este en la pgina uno se imprime el mensaje de error 
            return;// en caso de que no se pueda retroceder se sale del previusPage 
        }

        CurrentPageRef.current -= 1; // decrementa el valor de currentPageRef.current en uno 
        console.log(`te devolviste a la pagina ${CurrentPageRef.current}`)// imprimir el nuevo valor
    }

    const goToPage = (page:number ) => { // funcion (metodo) para ir a una pagina en especifico
        setCurrent(page)
        if(page<1) {// proceso de control de error en caso de que se quiera ir a una pagina imposible 
            console.log("no se puede ir a un valor imposible ")// imprime el mensaje de error 
            return;// en caso de que no se pueda ir a la pagina se sale del metodo goToPage
        }


        CurrentPageRef.current = page; // en este caso CurrentPageRef.current es igual a la pagina que se quiera ir
        console.log(`ahora estas en la pagina ${CurrentPageRef.current}`)
    }

    return (
        <div>
            <h2>lectura del libro </h2>
            <p>pagina actual : {CurrentPageRef.current}</p>
            <p>pagina [State]: {current} </p>
            <button onClick={nextPage}>siguiente pagina </button>
            <button onClick={previusPage}>pagina anterior</button>
            <button onClick={() => {goToPage(73)}}>ir a la mejor pagina  </button>
        </div>
    )
}