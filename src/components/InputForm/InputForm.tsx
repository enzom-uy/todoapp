import React, { useState } from 'react'
import styles from './InputForm.module.scss'

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
      <h2 className={styles}>Create a new task</h2>
      <form className={styles} onSubmit={handleSubmit}>
        <div className={styles.label_and_input}>
          <label htmlFor="name">New task</label>
          <input
            className={styles}
            name="input"
            id="input"
            type="text"
            placeholder="Create a task..."
            onChange={(e) => setInputValue(e.target.value)}
            value={inputValue}
          />
        </div>
        <button className={styles} type="submit">
          Create
        </button>
      </form>
    </>
  )
}
