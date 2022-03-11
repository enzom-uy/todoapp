import React from 'react'
import Items from '../Items/Items'

interface Props {
  tasks: Array<{
    id: string
    name: string
    completed: boolean
  }>
}

function debug(thingToDebug: any): void {
  return console.log(thingToDebug)
}

const ItemsContainer: React.FC<Props> = ({ tasks }) => {
  return (
    <ul className="h-96 overflow-auto flex flex-col items-center scrollbar-hide">
      {tasks.map((task) => (
        <Items name={task.name} key={task.id} />
      ))}{' '}
      {debug(tasks)}
    </ul>
  )
}

export default ItemsContainer
