import React from 'react'
import { Card } from 'primereact/card'

interface Props {
  name: string
}

const Items: React.FC<Props> = ({ name }) => {
  return (
    <li>
      <Card className='h-12 flex items-center mb-3' title={name} />
    </li>
  )
}

export default Items
