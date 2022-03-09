// React stuff
import React, { useState } from 'react'

// PrimeReact components
import { InputText } from 'primereact/inputtext'
import { Button } from 'primereact/button'

// id generator
import nextId from 'react-id-generator'

export default function InputForm({ onAddTask }: any) {
  const [inputValue, setInputValue] = useState('')

  const taskData = {
    id: nextId(),
    name: inputValue,
    completed: false
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onAddTask(taskData)
  }

  return (
    <>
      <h2 className="text-center text-fg-white text-2xl mb-3">New task</h2>
      <form className='flex justify-center' onSubmit={handleSubmit}>
        <InputText
          className="h-2 mr-2"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <Button label="Submit" className="w-22 h-[2.10rem] " />
      </form>
    </>
  )
}
