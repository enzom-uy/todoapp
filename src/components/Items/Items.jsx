import React from 'react'
import { ListItem, Flex, useToast } from '@chakra-ui/react'

const Items = ({ name, id, tasks, deleteTaskHandler }) => {
  const toast = useToast()

  const deletedTaskToast = () => {
    toast({
      title: 'Task deleted.',
      description: `The task ${name} was deleted.`,
      status: 'info',
      duration: 1000,
      isClosable: true
    })
  }

  const filterTasks = () => {
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
      >
        {name}
        <button type="button" onClick={filterTasks}>
          Borra tarea
        </button>
      </Flex>
    </>
  )
}

export default Items
