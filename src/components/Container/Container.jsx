import Form from '../Form/Form'
import TasksContainer from './TasksContainer'
import { Box } from '@chakra-ui/react'
import TasksContextProvider from '../../context/TasksContext'

export default function Container() {
    return (
        <TasksContextProvider>
            <Box w={['90%', '90%', '80vw']} maxW="40rem">
                <Form />
                <TasksContainer />
            </Box>
        </TasksContextProvider>
    )
}
