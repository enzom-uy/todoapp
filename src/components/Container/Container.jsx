import { useState, useEffect } from 'react'
import Form from '../Form/Form'
import ItemsContainer from './ItemsContainer'
import { Box } from '@chakra-ui/react'

export default function Container() {
  type Task = { id: string; name: string; completed: boolean }
  const [userTasks, setUserTasks] = useState<Task[]>([])

  // This function is received by <InputForm /> and it returns the new Task.
  // Updates the current tasks (userTasks state) with the new { task } received.
  const addTaskHandler = (task: Task) => {
    setUserTasks((prevUserTasks) => [task, ...prevUserTasks])
  }

  const getUpdatedTasks = (newTask: Task) => {
    setUserTasks((prevUserTasks) => [newTask, ...prevUserTasks])
  }

  // Clear all the tasks
  const clearTasks = () => {
    setUserTasks([])
  }

  // Using localStorage to save the data
  useEffect(() => {
    setUserTasks(JSON.parse(window.localStorage.getItem('Task') || '[]'))
  }, [])

  useEffect(() => {
    window.localStorage.setItem('Task', JSON.stringify(userTasks))
  }, [userTasks])

  // Remove a task

  return (
    <Box w={['90%', '90%', '80vw']} maxW="40rem">
      <Form onAddTask={addTaskHandler} onClearTasks={clearTasks} />
      <ItemsContainer tasks={userTasks} onUpdateTasks={getUpdatedTasks} />
    </Box>
  )
}