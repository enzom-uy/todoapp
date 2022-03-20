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
        clearTasks,
        editTaskHandler
    }
    return <Provider value={contextValue}>{children}</Provider>
}

export default TasksContextProvider
