import React from 'react'
import Task from '../Task/Task'
import { List, Flex } from '@chakra-ui/react'

const ItemsContainer = ({ tasks, deleteTaskHandler }) => {

  return (
    <List w={'100%'}>
      <Flex direction="column" align={'center'}>
        {tasks.map((task) => (
          <Task name={task.name} key={task.id} id={task.id} tasks={tasks} deleteTaskHandler={deleteTaskHandler} />
        ))}
      </Flex>
    </List>
  )
}

export default ItemsContainer
