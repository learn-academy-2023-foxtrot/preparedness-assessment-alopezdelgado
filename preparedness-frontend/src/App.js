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
    console.log("Reset button clicked")
  }
  return (
    <div className="entire-content">
      <h1>Preparedness Assessment</h1>
      <div className="form">
        <div className="input">
          <Label for="name">Enter your name</Label>
          <Input value={userName} onChange={handleNameChange}/>
        </div>
        <Button onClick={openModal}>Click Me</Button>
        <Button onClick={resetNameChange}>Reset</Button>
        {isModalOpen && (
          <ModalComponent isOpen={isModalOpen} closeModal={closeModal} userName={userName} />
          )}
      </div>
    </div>
  )
}

export default App
