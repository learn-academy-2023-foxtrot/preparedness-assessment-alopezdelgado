import React from "react"
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from "reactstrap";


const ModalComponent = ({isOpen, closeModal, userName}) => {
  return( 
  <>
  <Modal isOpen={isOpen}>
      <ModalHeader>Hello there, {userName}!</ModalHeader>
      <ModalBody>
      Zombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro. De carne lumbering animata corpora quaeritis. Summus brains sit​​, morbo vel maleficia? De apocalypsi gorger omero undead survivor dictum mauris. Hi mindless mortuis soulless creaturas, imo evil stalking monstra adventus resi dentevil vultus comedat cerebella viventium.
      </ModalBody>
      <ModalFooter>
        <Button color="secondary" onClick={closeModal}>
          Close
        </Button>
      </ModalFooter>
    </Modal>
  </>
  )
}

export default ModalComponent
