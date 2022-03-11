import React, { useState, useEffect } from 'react'
import InputForm from '../InputForm/InputForm'
import ItemsContainer from './ItemsContainer'

export default function Container() {
  const [userTasks, setUserTasks] = useState(
    new Array<{ id: string; name: string; completed: boolean }>()
  )

  // This function is received by <InputForm /> and it returns the new Task.
  // Updates the current tasks (userTasks state) with the new { task } received.
  const addTaskHandler = (task: any) => {
    setUserTasks(task)
  }

  useEffect(() => {
    setUserTasks(JSON.parse(window.localStorage.getItem('Task') || '{}'))
  }, [])

  useEffect(() => {
    window.localStorage.setItem('Task', JSON.stringify(userTasks))
  }, [userTasks])

  return (
    <div className="flex flex-col px-4 container mx-auto sm:max-w-screen-sm">
      {console.log(typeof(userTasks))}
      <InputForm onAddTask={addTaskHandler} />
      <ItemsContainer tasks={userTasks} />
    </div>
  )
}
