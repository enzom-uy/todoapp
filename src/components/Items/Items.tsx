import React from 'react'
import { Card } from 'primereact/card'

interface Props {
  name: string
}

const Items: React.FC<Props> = ({ name }) => {
  return (
    <li>
      <Card
        className="mb-3 p-0 flex flex-col justify-center"
        style={{ width: '25rem' }}
      >
        {name}
      </Card>
    </li>
  )
}

export default Items
