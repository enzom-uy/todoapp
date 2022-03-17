import React, { useState } from 'react'
import { Flex, useToast, Button } from '@chakra-ui/react'
import { DeleteIcon } from '@chakra-ui/icons'
import EditTaskModal from '../Modals/EditTaskModal'

const Items = ({ name, id, tasks, deleteTaskHandler }) => {
  const toast = useToast()
  const [currentTask, setCurrentTask] = useState(name)

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
    const filteredTasks = tasks.filter((task) => {
      return task.id !== id
    })
    deleteTaskHandler(filteredTasks)
    deletedTaskToast()
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
        {currentTask}
        <Flex gap="2">
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

export default Items
