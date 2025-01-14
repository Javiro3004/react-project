import {Button} from "../components"// ruta sencilla gracias al archivo index.tsx que se encuentra en la carpeta components


function App() {
const handleClick = () => {
  console.log("button clicked")
}


  return (
    <Button  parentMethod = {handleClick}>
      <div style={{"color": "red"}}>"esto es el children del Button"</div> {/* esto ee el componente children del Button que hace un div de color rojo con un texto cosa que no se podria hacer sin el children */}
    </Button> 
  )
}

export default App 
