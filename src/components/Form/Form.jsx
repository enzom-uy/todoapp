import React, { useState, useContext } from 'react'
import FormButtons from '../Buttons/FormButtons'
import { v4 as uuidv4 } from 'uuid'
import { Heading, Flex, Input, FormControl, useToast } from '@chakra-ui/react'
import { TasksContext } from '../../context/TasksContext'

export default function InputForm() {
    const [inputValue, setInputValue] = useState('')
    const { addTaskHandler } = useContext(TasksContext)
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
                duration: 1200,
                isClosable: true
            })
        }
        if (inputValue !== '') {
            toast({
                title: 'Task created successfully!',
                description: 'You should see your new task in the list.',
                status: 'success',
                duration: 1200,
                isClosable: true
            })
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        addTaskHandler(taskData)
        setInputValue('')
        showToast()
    }
    return (
        <>
            <Heading
                fontFamily="roboto"
                textAlign="center"
                mb={2}
                fontSize={[25, 25, '3ch', '4ch']}
            >
                Create a new task
            </Heading>
            <Flex
                as="form"
                onSubmit={handleSubmit}
                fontFamily="roboto"
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
                <FormButtons />
            </Flex>
        </>
    )
}
