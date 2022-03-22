import React, { useState, useContext } from 'react'
import { TasksContext } from '../../context/TasksContext'

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

const EditTaskModal = ({ taskId, taskName }) => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [currentName, setCurrentName] = useState(taskName)
    const { editTaskHandler } = useContext(TasksContext)

    const onEditTask = () => {
        editTaskHandler(currentName, taskId)
        onClose()
    }

    return (
        <>
            {' '}
            <Button
                type="button"
                colorScheme="green"
                _hover={{ bg: 'green.700' }}
                onClick={onOpen}
            >
                <EditIcon color="white" />
            </Button>
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent fontFamily={'roboto'}>
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
                        <Button type="submit" colorScheme="blue" mr={3} onClick={onEditTask}>
                            Save
                        </Button>
                        <Button
                            variant="solid"
                            colorScheme="red"
                            onClick={onClose}
                        >
                            Close
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}

export default EditTaskModal
