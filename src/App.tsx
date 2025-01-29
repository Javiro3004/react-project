// import { useEffect, useState } from "react";
// import { PromiseError } from "./components/ErrorBoundaryExample"
// import { getCharacter } from "./services/api.service"

import { useApi } from "./Hooks/useApi"
import { character } from "./models/character.model"
import { getCharacter } from "./services/api.service"

function App() {

  const {loading, error , data, fetch } = useApi<character>(getCharacter(1))

  if(loading) {
    return  (<p>cargando ...</p>)
  }

  if (error ) {
    return (<p>upss has a error : {error.message}</p>)
  }


  return (
  <>
    {JSON.stringify(data)}
    <button onClick={fetch}>obtener fetch </button>
  </>
  )
} 

export default App 
