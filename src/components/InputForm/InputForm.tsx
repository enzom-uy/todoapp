// React stuff
import React, { useState } from 'react'

// PrimeReact components
import { InputText } from 'primereact/inputtext'
import { Button } from 'primereact/button'

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

  return (
    <>
      <h2 className="text-center text-fg-white text-2xl mb-3">Create a new task</h2>
      <form className='flex justify-center' onSubmit={handleSubmit}>
        <InputText
          className="h-2 mr-2 mb-4"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Task name..."
        />
        <Button label="Submit" className="w-22 h-[2.10rem] " />
      </form>
    </>
  )
}
