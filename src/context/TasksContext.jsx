import { createContext, useState, useEffect } from 'react'

export const TasksContext = createContext()

const { Provider } = TasksContext

const completedTasksArray = []

const TasksContextProvider = ({ children }) => {
    const [userTasks, setUserTasks] = useState([])
    const [completedTasks, setCompletedTasks] = useState(completedTasksArray)

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

    /*
     * Edit task handler function.
     *
     * Receives the updated task name and task id from EditTaskModal.
     * Maps through all the current tasks, and if it finds one that its id matches the taskId received
     * updates the Task.name replacing the old one by newName, else it just returns the task.
     * Finally, updates the state to be the previous tasks and the new one edited.
     */
    const editTaskHandler = (newName, taskId) => {
        const tasksUpdated = userTasks.map((task) => {
            if (task.id === taskId) {
                const editedTask = { ...task, name: newName }
                return editedTask
            } else {
                return task
            }
        })
        setUserTasks(tasksUpdated)
    }

    // Set task as completed
    const setTaskAsCompleted = (taskId) => {
        let currentTask = userTasks.find((task) => task.id === taskId)
        currentTask = {...currentTask, completed: true}
        setCompletedTasks((prevCompletedTasks) => [currentTask, ...prevCompletedTasks])
        const tasksUpdated = userTasks.filter((task) => task.id !== taskId)
        setUserTasks(tasksUpdated)
    }

    // Using localStorage to save the data
    useEffect(() => {
        setUserTasks(JSON.parse(window.localStorage.getItem('Task') || '[]'))
    }, [])

    useEffect(() => {
        window.localStorage.setItem('Task', JSON.stringify(userTasks))
    }, [userTasks])

    // Using localStorage to save the completedTasks array
    useEffect(() => {
        setCompletedTasks(JSON.parse(window.localStorage.getItem('CompletedTasks') || '[]'))
    }, [])

    useEffect(() => {
        window.localStorage.setItem('CompletedTasks', JSON.stringify(completedTasks))
    }, [completedTasks])

    const contextValue = {
        userTasks,
        addTaskHandler,
        deleteTaskHandler,
        clearTasks,
        editTaskHandler,
        setTaskAsCompleted
    }
    return <Provider value={contextValue}>{children}</Provider>
}

export default TasksContextProvider
