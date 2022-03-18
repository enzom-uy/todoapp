import React, { useContext } from 'react'
import Task from '../Task/Task'
import { List, Flex } from '@chakra-ui/react'
import { TasksContext } from '../../context/TasksContext'

const ItemsContainer = () => {
    const { userTasks } = useContext(TasksContext)
    return (
        <List w={'100%'}>
            <Flex direction="column" align={'center'}>
                {userTasks.map((task) => (
                    <Task name={task.name} key={task.id} id={task.id} />
                ))}
            </Flex>
        </List>
    )
}

export default ItemsContainer
