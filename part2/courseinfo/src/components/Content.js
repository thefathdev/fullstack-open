import React from 'react'
import Part from './Part'
import Total from './Total'

const Content = ({ parts }) => {
  return (
    <ul>
      {parts.map((part) => (
        <Part key={part.id} name={part.name} exercises={part.exercises} />
      ))}

      <Total parts={parts} />
    </ul>
  )
}

export default Content
