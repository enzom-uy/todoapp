import React from 'react'
import { ListItem, ListIcon } from '@chakra-ui/react'

interface Props {
  name: string
}

// <Card
//   className="mb-3 p-0 flex flex-col justify-center"
//   style={{ width: '25rem' }}
// >
//   {name}
// </Card>
//
const Items: React.FC<Props> = ({ name }) => {
  return (
    <ListItem w={'100%'} bg='cyan.300' mb={1} p={2} fontSize='lg'>{name}</ListItem>
  )
}

export default Items
