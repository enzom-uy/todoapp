import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import {
  Heading,
  Flex,
  Input,
  Button,
  FormControl,
  useToast
} from '@chakra-ui/react'

const textShadow = "0 0 1px rgba(0, 0, 0, 0.3)"

export default function InputForm({ onAddTask, onClearTasks }: any) {
  const [inputValue, setInputValue] = useState('')
  const toast = useToast()

  const taskData = {
    id: uuidv4(),
    name: inputValue,
    completed: false
  }

  const showToast = () => {
    if (inputValue === '') {
      toast({
        title: 'Task name is required.',
        description: 'Please provide a Task name.',
        status: 'error',
        duration: 1500,
        isClosable: true
      })
    }
    if (inputValue !== '') {
      toast({
        title: 'Task created successfully!',
        description: 'You should see your new task in the list.',
        status: 'success',
        duration: 1500,
        isClosable: true
      })
    }
  }

  const handleClearTasks = () => {
    onClearTasks()
    toast({
      title: 'Tasks cleared.',
      description: 'Your to-do list is now empty.',
      status: 'info',
      duration: 1500,
      isClosable: true
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onAddTask(taskData)
    setInputValue('')
  }
  return (
    <>
      <Heading
        fontFamily="montserrat"
        textAlign="center"
        mb={2}
        fontSize={[25, 25, '3ch', '4ch']}
      >
        Create a new task
      </Heading>
      <Flex
        as="form"
        onSubmit={handleSubmit}
        fontFamily="montserrat"
        align={'center'}
        mb={6}
        direction={['column', 'column', 'column', 'row']}
      >
        <FormControl isRequired>
          <Input
            placeholder="New task..."
            size="md"
            fontFamily="inherit"
            variant="flushed"
            onChange={(e) => setInputValue(e.target.value)}
            value={inputValue}
            type="text"
            mb={[2, 2]}
            w={['100%', '100%', '100%', '26.5rem']}
          />
        </FormControl>
        <Button
          bg="cyan.600"
          color="text.white"
          type="submit"
          _hover={{ bg: 'cyan.800' }}
          w={['100%', '100%', '100%', '8em']}
          mb={[1, 1, 1, 0]}
          mr={[0, 0, 0, 1]}
          onClick={showToast}
          fontFamily="montserrat"
          sx={{textShadow: textShadow}}
        >
          Create
        </Button>
        <Button
          bg="cyan.600"
          color="text.white"
          type="button"
          _hover={{ bg: 'cyan.800' }}
          w={['100%', '100%', '100%', '8em']}
          onClick={handleClearTasks}
          sx={{textShadow: textShadow}}
        >
          Clear tasks
        </Button>
      </Flex>
    </>
  )
}
