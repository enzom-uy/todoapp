import React, { useState } from 'react'

import { v4 as uuidv4 } from 'uuid'

export default function InputForm({ onAddTask }: any) {
  const [inputValue, setInputValue] = useState('')

  const taskData = {
    id: uuidv4(),
    name: inputValue,
    completed: false
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onAddTask(taskData)
    setInputValue('')
  }

  // <InputText
  //   value={inputValue}
  //   onChange={(e) => setInputValue(e.target.value)}
  //   placeholder="Task name..."
  // />
  // <Button label="Submit" />
  return (
    <>
      <h2>Create a new task</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">New task</label>
          <input
            name="input"
            id="input"
            type="text"
            placeholder="Create a task..."
            onChange={(e) => setInputValue(e.target.value)}
            value={inputValue}
          />
        </div>
        <button type="submit">Create</button>
      </form>
    </>
  )
}
