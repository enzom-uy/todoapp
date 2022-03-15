import React from 'react'
import Items from '../Items/Items'
import { List, Flex } from '@chakra-ui/react'

interface Props {
  tasks: Array<{
    id: string
    name: string
    completed: boolean
  }>,
  onUpdateTasks: Array<{
    id: string
    name: string
    completed: boolean
  }>
}


const ItemsContainer: React.FC<Props> = ({ tasks, onUpdateTasks }) => {
  function handleDeleteClick(id: string) {
    const removeTask = tasks.filter((task) => {
      return task.id !== id
    })   
    onUpdateTasks(removeTask)
  }
  return (
    <List w={'100%'}>
      <Flex direction="column" align={'center'}>
        {tasks.map((task) => (
          <Items name={task.name} key={task.id} id={task.id} />
        ))}
      </Flex>
    </List>
  )
}

export default ItemsContainer
