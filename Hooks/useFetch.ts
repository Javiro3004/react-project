import { useEffect, useState } from "react";

// siempre que se quiera usar elementos genericos se debe typear con <T> para que sepa que es un elemento generico y no un tipo de dato en especifico como string, number, etc.
type data<T> = T | null;
type errorType =  Error | null; 

interface params <T> {
    data : data<T>;
    loading : boolean;
    errors : errorType ;
}

// cuando se crea un useState se dee especificar el valor inicial que tendra el state si se trabaja con genericos
// como aca useState<data<T>>(null)  se especifica que el valor es generico y luego se declara el valor 
// inicial que sera null

export function useFetch  <T>(url : string) : params<T> {
    const [data, setData] = useState<data<T>>(null);/* useState<data<T>>(null) es el valor inicial de data */
    const [loading, setLoading] = useState(true); 
    const [errors, setErrors] = useState<errorType>(null); /*aca se especifica que el valor inicial de errors es null aunque no es generico porque es un tipo de dato especial */

    useEffect (() => {
        const controller = new AbortController();

        setLoading(true); 
        const fetchData = async () =>{
            try {
                const response = await fetch(url, controller);// se espera a que la peticion url se resuelva o a que se cancele (aborte) la peticion 

                if (!response.ok){
                    throw new Error("fatal error");//Este bloque verifica si la respuesta HTTP no es exitosa. La propiedad response.ok es true si el código de estado HTTP está en el rango 200-299, lo que indica una respuesta exitosa. Si response.ok es false, se lanza un error con el mensaje "fatal error".
                }

                const jsonData : T = await response.json();// Esta línea convierte la respuesta HTTP en formato JSON a un objeto JavaScript. response.json() devuelve una promesa que se resuelve con el cuerpo de la respuesta parseado como JSON.
                setData(jsonData);//Esta línea actualiza el estado data con el objeto JavaScript que se obtiene de la respuesta HTTP.
                setErrors(null);//Este bloque establece el estado errors en null para indicar que no se ha producido ningún error durante la solicitud HTTP.


            }catch(err){
                setErrors(err as Error);//Este bloque captura cualquier error que se produzca durante la solicitud HTTP y lo almacena en el estado errors. El error se convierte en un objeto Error y se almacena en el estado errors.`
            } finally{
                setLoading(false);//Este bloque se ejecuta después de que se resuelva la promesa de la solicitud HTTP. Establece el estado loading en false para indicar que la solicitud ha finalizado.
            }
        }

        fetchData();// Llama a la función fetchData para iniciar la solicitud HTTP.  

        return () =>{
            controller.abort();//Este bloque cancela la solicitud HTTP si el componente se desmonta antes de que se complete la solicitud. La función controller.abort() cancela la solicitud HTTP y evita que se realice cualquier trabajo adicional.
        }
    },[url]) // El segundo argumento de useEffect es una matriz de dependencias. En este caso, la matriz contiene la variable url. Esto significa que useEffect se ejecutará cada vez que la variable url cambie.

    return {data,loading,errors} // La función useFetch devuelve un objeto con tres propiedades: data, loading y errors. data contiene los datos obtenidos de la solicitud HTTP, loading indica si la solicitud está en curso y errors contiene cualquier error que se haya producido durante la solicitud.
}
