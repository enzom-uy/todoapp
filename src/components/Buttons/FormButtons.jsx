import React, { useContext } from 'react'
import { Button, useToast } from '@chakra-ui/react'
import { TasksContext } from '../../context/TasksContext'

const textShadow = '0 0 1px rgba(0, 0, 0, .3)'

const FormButtons = ({ showToast }) => {
    const { clearTasks } = useContext(TasksContext)
    const toast = useToast()

    const handleClearTasks = () => {
        clearTasks()
        toast({
            title: 'Tasks cleared.',
            description: 'Your to-do list is now empty.',
            status: 'info',
            duration: 1500,
            isClosable: true
        })
    }
    return (
        <>
            <Button
                bg="cyan.600"
                color="text.white"
                type="submit"
                _hover={{ bg: 'cyan.800' }}
                w={['100%', '100%', '100%', '8em']}
                mb={[1, 1, 1, 0]}
                mr={[0, 0, 0, 1]}
                onClick={showToast}
                fontWeight="400"
                sx={{ textShadow: textShadow }}
            >
                Create
            </Button>

            <Button
                bg="cyan.600"
                fontWeight="400"
                color="text.white"
                type="button"
                _hover={{ bg: 'cyan.800' }}
                w={['100%', '100%', '100%', '8em']}
                onClick={handleClearTasks}
                sx={{ textShadow: textShadow }}
            >
                Clear tasks
            </Button>
        </>
    )
}

export default FormButtons
