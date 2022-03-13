import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { Heading, Box, Flex, Input, Button } from '@chakra-ui/react'

export default function InputForm({ onAddTask }: any) {
  const [inputValue, setInputValue] = useState('')

  const taskData = {
    id: uuidv4(),
    name: inputValue,
    completed: false
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onAddTask(taskData)
    setInputValue('')
  }

  // <InputText
  //   value={inputValue}
  //   onChange={(e) => setInputValue(e.target.value)}
  //   placeholder="Task name..."
  // />
  // <Button label="Submit" />
  return (
    <>
      <Heading fontFamily="montserrat" textAlign='center' mb={2} fontSize={[25,25,'3ch', '4ch']}>Create a new task</Heading>
      <Flex
        as='form'
        onSubmit={handleSubmit}
        fontFamily="montserrat"
        align={'center'}
        mb={6}
        direction={['column', 'column', 'column', 'row']}
      >
        <Input
          placeholder="New task..."
          size='md'
          fontFamily="inherit"
          variant='flushed'
          mr={4}
          onChange={(e) => setInputValue(e.target.value)}
          value={inputValue}
          mb={[2, 2]}
        />
        <Button
          bg='cyan.600'
          color="text.white"
          type="submit"
          _hover={{ bg: 'cyan.800' }}
          w={['100%', '100%', '100%', '8em']}
        >
          Create
        </Button>
      </Flex>
    </>
  )
}
