import React from "react"
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from "reactstrap";


const ModalComponent = ({isOpen, closeModal, userName}) => {
  return( 
  <>
  <Modal isOpen={isOpen}>
      <ModalHeader>Hello there, {userName}!</ModalHeader>
      <ModalBody>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec id arcu non velit lacinia tincidunt.
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
