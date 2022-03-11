import React from 'react'
import Items from '../Items/Items'

interface Props {
  tasks: Array<{
    id: string
    name: string
    completed: boolean
  }>
}

const ItemsContainer: React.FC<Props> = ({tasks}) => {
  return (
    <>
      {tasks.map((task) => (
        <Items name={task.name}/>
      ))}
    </>
  )
}

export default ItemsContainer
