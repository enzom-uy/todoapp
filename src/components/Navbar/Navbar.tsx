import React from 'react'
import { Box, Heading } from '@chakra-ui/react'

export default function Navbar() {
  return (
    <Box
      py={2}
      px={5}
      fontSize="xl"
      fontFamily="fonts.box"
      fontWeight="bold"
      bg="cyan.600"
      w={'100%'}
      boxShadow="xl"
      color={'text.white'}
      position="fixed"
    >
      <Heading as={'h1'} size="md" sx={{ textShadow: '0px 2px 4px #00000080' }}>
        TO-DO APP
      </Heading>
    </Box>
  )
}
