import React, { useState } from 'react'
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  Text,
  Input
} from '@chakra-ui/react'
import { EditIcon } from '@chakra-ui/icons'

// TODO the new name after edited the task needs to be saved on localStorage.

const EditTaskModal = ({ taskId, taskName, onEditTask }) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [currentName, setCurrentName] = useState(taskName)

  const submitEditTask = () => {
    onEditTask(currentName)
    onClose()
  }
  return (
    <>
      {' '}
      <Button
        type="button"
        colorScheme="green"
        _hover={{ bg: 'bgRed.dark' }}
        onClick={onOpen}
      >
        <EditIcon color="white" />
      </Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent fontFamily={'montserrat'}>
          <ModalHeader>Edit the task</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text fontSize="md" fontWeight={'900'} mb={2}>
              Task name:
            </Text>
            <Text fontSize="md" fontWeight="600" display="inline">
              {currentName}
            </Text>
            <Input
              size="md"
              fontFamily="inherit"
              variant="flushed"
              value={currentName}
              onChange={(e) => setCurrentName(e.target.value)}
              type="text"
              mb={[2, 2]}
              w={['100%', '100%', '100%', '26.5rem']}
            />
          </ModalBody>
          <ModalFooter>
            <Button
              type='submit'
              colorScheme="blue"
              onClick={submitEditTask}
              mr={3}
            >
              Save
            </Button>
            <Button variant="solid" colorScheme="red" onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

export default EditTaskModal
