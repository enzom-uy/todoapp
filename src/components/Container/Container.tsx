import React, { useState } from 'react'
import InputForm from '../InputForm/InputForm'

export default function Container() {
  const [userTasks, setUserTasks] = useState(
    new Array<{ id: string; name: string; completed: boolean }>()
  )
  const addTaskHandler = (task: object) => {
    setUserTasks((prevUserTasks: Array<any>) => [task, ...prevUserTasks])
  }
  return (
    <div className="flex flex-col px-4 container mx-auto sm:max-w-screen-sm">
      <InputForm onAddTask={addTaskHandler} userTasks={userTasks} />
    </div>
  )
}
