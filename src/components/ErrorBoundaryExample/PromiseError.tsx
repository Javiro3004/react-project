import { useState, useEffect} from "react"

export const PromiseError = () => {
    const [data, setData] = useState<string | null>(null )
    const [error,setError ] = useState<string | null>(null)

    useEffect(() => { 
        const fetchData = async () => {
            try {
                throw new Error("la promesa se fue a la verga ");
            } catch (err)  {
                if(err instanceof Error){
                setError(err.message)
                throw err
                }
            }
        }
        
        fetchData()
        },[])
    if (error) {
        throw error
    }
    return <div>{data}</div>
}