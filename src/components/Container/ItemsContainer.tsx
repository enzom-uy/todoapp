import React from 'react'
import Items from '../Items/Items'
import { List, Flex } from '@chakra-ui/react'

interface Props {
  tasks: Array<{
    id: string
    name: string
    completed: boolean
  }>
}

const ItemsContainer: React.FC<Props> = ({ tasks }) => {
  return (
    <List w={'100%'}>
      <Flex direction='column' align={'center'}>
        {tasks.map((task) => (
          <Items name={task.name} key={task.id} />
        ))}
      </Flex>
    </List>
  )
}

export default ItemsContainer
