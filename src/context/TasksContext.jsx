import { createContext, useState, useEffect } from 'react'

export const TasksContext = createContext()

const { Provider } = TasksContext

const TasksContextProvider = ({ children }) => {
  const [userTasks, setUserTasks] = useState([])
  // This function is received by <InputForm /> and it returns the new Task.
  // Updates the current tasks (userTasks state) with the new { task } received.
  const addTaskHandler = (task) => {
    setUserTasks((prevUserTasks) => [task, ...prevUserTasks])
  }

  const deleteTaskHandler = (filteredTasks) => {
    setUserTasks(filteredTasks)
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

  const contextValue = {
    userTasks,
    addTaskHandler,
    deleteTaskHandler,
    clearTasks
  }
  return <Provider value={contextValue}>{children}</Provider>
}

export default TasksContextProvider
