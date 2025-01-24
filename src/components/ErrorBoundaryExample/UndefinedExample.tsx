import {useState} from "react"

const UndefinedExample = () => {
    const [obj]  = useState<{ prop?: String }>({})

    return <div>{obj.prop!.length} </div>
}

export default UndefinedExample