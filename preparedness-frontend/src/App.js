import { useState }from "react"
import { Button, Input, Label } from "reactstrap"
import ModalComponent from "./components/ModalComponent"
import "./App.css"

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [userName, setUserName] = useState("")
  
  const openModal = () => {
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }

  const handleNameChange = (event) => {
    setUserName(event.target.value)
  }

  const resetNameChange = () => {
    setUserName("")
   
  }
  return (
    <div className="entire-content">
      <h1>Preparedness Assessment</h1>
      <div className="form">
        <div className="input">
            <Label for="name">Enter your name</Label>
            <Input className="input-field" value={userName} onChange={handleNameChange}/>
          </div>
          <div className="buttons">
          <Button className="btn" onClick={openModal}>Click Me</Button>
          <Button className="btn" onClick={resetNameChange}>Reset</Button>
        </div>
          {isModalOpen && (
            <ModalComponent isOpen={isModalOpen} closeModal={closeModal} userName={userName} />
            )}
      </div>
    </div>
  )
}

export default App
