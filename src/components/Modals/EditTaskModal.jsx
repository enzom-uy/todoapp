import React from 'react'
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button
} from '@chakra-ui/react'
import { EditIcon } from '@chakra-ui/icons'

const EditTaskModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <>
      {' '}
      <Button
        type="button"
        bg="bgRed.900"
        _hover={{ bg: 'bgRed.dark' }}
        onClick={onOpen}
      >
        <EditIcon color="white" />
      </Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Edit the task</ModalHeader>
          <ModalCloseButton />
          <ModalBody></ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant="ghost">Secondary Action</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

export default EditTaskModal
