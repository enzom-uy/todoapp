import React, { useState, useContext } from 'react'
import FormButtons from '../Buttons/FormButtons'
import { TasksContext } from '../../context/TasksContext'

// Random & unique ID generator
import { v4 as uuidv4 } from 'uuid'

// Chakra stuff
import { Heading, Flex, Input, FormControl, useToast } from '@chakra-ui/react'

// Date picker
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

export default function InputForm() {
    const [inputValue, setInputValue] = useState('')
    const [startDate, setStartDate] = useState(new Date())
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
                direction={['column', 'column', 'column', 'column']}
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
                        w='100%'
                    />
                </FormControl>
                <Flex w={'200px'}>
                    <DatePicker
                        selected={startDate}
                        onChange={(date) => setStartDate(date)}
                        allowSameDay={true}
                        minDate={startDate}
                    />
                </Flex>
                <FormButtons />
            </Flex>
        </>
    )
}
