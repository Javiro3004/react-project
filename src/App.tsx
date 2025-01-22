import { Modal, /*ShopingCart*/ } from "./components"
import { useModalContext } from "./components"
// import { FocusInput, BookReader } from "./components/useRef"




function App() {

  const {setState} = useModalContext()

  const openModal = () => {
    setState(true)
  }

  return (<>
    <Modal>
      <h2> hola mundo</h2>
      <h3>como andan </h3>
    </Modal>
    <button onClick={openModal}>abrir</button>
    {/*<BookReader/>
    <FocusInput/>*/}
    {/*<ShopingCart/>*/}
    </>
  )
}

export default App 
