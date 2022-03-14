import React from 'react'
import { ListItem } from '@chakra-ui/react'

interface Props {
  name: string
}

const Items: React.FC<Props> = ({ name }) => {
  return (
    <ListItem w={'100%'} bg="cyan.300" mb={1} p={2} fontSize="lg">
      {name}
    </ListItem>
  )
}

export default Items
