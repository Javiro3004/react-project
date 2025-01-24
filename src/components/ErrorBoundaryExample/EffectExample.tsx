import { useEffect } from "react"

export const EffectExample = () => {
    useEffect(() => {
        throw new Error("upps");
        
    }, [])
    return <div></div>
}