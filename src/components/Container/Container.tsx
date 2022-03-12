import { useState, useEffect } from 'react'
import InputForm from '../InputForm/InputForm'
import ItemsContainer from './ItemsContainer'

export default function Container() {
  type Task = { id: string; name: string; completed: boolean }
  const [userTasks, setUserTasks] = useState<Task[]>([])

  // This function is received by <InputForm /> and it returns the new Task.
  // Updates the current tasks (userTasks state) with the new { task } received.
  const addTaskHandler = (task: Task) => {
    setUserTasks((prevUserTasks) => [task, ...prevUserTasks])
    console.log(task)
  }

  useEffect(() => {
    window.localStorage.setItem('Task', JSON.stringify(userTasks))
  }, [userTasks])

  useEffect(() => {
    setUserTasks(JSON.parse(window.localStorage.getItem('Task') || '[]'))
  }, [])


  return (
    <div className="flex flex-col px-4 container mx-auto sm:max-w-screen-sm">
      <InputForm onAddTask={addTaskHandler} />
      {console.log('Test')}
      <ItemsContainer tasks={userTasks} />
    </div>
  )
}
