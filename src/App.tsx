import { ChildrenButton, Button  } from "./components/Button/Button"
import { GlobalProvider } from "./contexts/global.provider"





function App() {
const handleClick = () => {
  console.log("button clicked")
}

const dimeHola = () => {
  alert("Hola como andas ")
}


  return (
    <GlobalProvider >
      <ChildrenButton>
        <Button parentMethod={dimeHola}>boton 2 </Button>{/*toma como children al componente Button  */}
      </ChildrenButton>
      <Button  parentMethod = {handleClick}>
        my boton {/* esto ee el componente children del Button que hace un div de color rojo con un texto cosa que no se podria hacer sin el children */}
      </Button>
    </GlobalProvider>
    
  )
}

export default App 
