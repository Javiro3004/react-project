import { AxiosResponse } from "axios";
import { useCallback, useEffect, useState } from "react";


type UseApiOptions = {
    autoFetch? : boolean
};
type Loading = boolean ;
type Data<T> = T | null
type customError = Error | null  ;

export interface useApiCall <T>{
    call:  Promise<AxiosResponse<T>>,
    controller : AbortController
}

interface UseApiResult<T>  {
    loading : Loading ;
    data: Data<T> ;
    error: customError;
    fetch: () => void  
}

export const useApi = <T,> (apiCall:  useApiCall<T> ,  options?: UseApiOptions ): UseApiResult<T> => { // el componente recibe como params una funcion para realizar una promesa y obtener un response de tipo <T>
    const [loading, setLoading] = useState<boolean>(false)// estaso de carga 
    const [data, setData] = useState<Data<T>>(null) // estado de data 
    const [error, setError] = useState<customError>(null) // estado de los errors    

    const fetch = useCallback(() => {
        const {call, controller} = apiCall;
        setLoading(true);
        call.then((Response)=> { // en caso de que la primise se resuelva correctamente va a obtener la respuest 
            setData(Response.data); // y va   a cambiar el estado de data por la data que obtuvo
            setError(null);// y por ultimo va a especificar que no hay errors 
        }).catch((err)=>{
            setError(err)
        }).finally (()=>{
            setLoading(false    )
        })
        return  () => controller.abort()
    },[apiCall]) // va a guardar la istancia de cada cambio de apiCall 

    useEffect(() =>{
        if (options && options.autoFetch) {
            return fetch()
        }
    }, [fetch, options])

    return {loading, data, error, fetch } // returna el valor de lading data y de error 
}

