import React, { useState, useContext } from 'react'
import { TasksContext } from '../../context/TasksContext'
import { Flex, useToast, Button } from '@chakra-ui/react'
import { DeleteIcon, CheckIcon } from '@chakra-ui/icons'
import EditTaskModal from '../Modals/EditTaskModal'

const Task = ({ name, id }) => {
    const toast = useToast()
    const { userTasks, deleteTaskHandler, setTaskAsCompleted } = useContext(TasksContext)

    const deletedTaskToast = () => {
        toast({
            title: 'Task deleted.',
            description: `The task ${name} was deleted.`,
            status: 'info',
            duration: 1000,
            isClosable: true
        })
    }

    /*
     * Handles the delete task feature.
     * It filters the current tasks array and returns all tasks except the current task using the id.
     * It's using the deleteTaskHandler function received via props from ItemsContainer and passed
     * from Container.jsx.
     * deleteTaskHandler function prop updates the state with the new tasks after being filtered.
     */
    const deleteTask = () => {
        const filteredTasks = userTasks.filter((task) => {
            return task.id !== id
        })
        deleteTaskHandler(filteredTasks)
        deletedTaskToast()
    }

    // Set task as completed
    const completeTaskHandler = () => {
        setTaskAsCompleted(id)
    }

    return (
        <>
            <Flex
                as="li"
                w={'100%'}
                bg="cyan.300"
                mb={1}
                p={2}
                fontSize="lg"
                id={id}
                justify="space-between"
                align="center"
            >
                {name}
                <Flex gap="2">
                    <Button
                        type="button"
                        onClick={completeTaskHandler}
                        colorScheme='green'
                        _hover={{ bg: 'green.700' }}
                    >
                        <CheckIcon color="white" />
                    </Button>
                    <EditTaskModal taskId={id} taskName={name} />
                    <Button
                        type="button"
                        onClick={deleteTask}
                        bg="bgRed.900"
                        _hover={{ bg: 'bgRed.dark' }}
                    >
                        <DeleteIcon color="white" />
                    </Button>
                </Flex>
            </Flex>
        </>
    )
}

export default Task
