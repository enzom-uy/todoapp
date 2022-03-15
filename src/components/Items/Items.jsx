import React from 'react'
import { ListItem } from '@chakra-ui/react'


const Items = ({ name, id }) => {
  return (
    <>
      <ListItem w={'100%'} bg="cyan.300" mb={1} p={2} fontSize="lg" id={id}>
        {name}
        <button type='button'>Borra tarea</button>
      </ListItem>
    </>
  )
}

export default Items
