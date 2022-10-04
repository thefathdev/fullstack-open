import React from 'react'

const Total = ({ parts }) => {
  const exercises = parts.map((part) => part.exercises)
  const total = exercises.reduce((prev, curr) => prev + curr, 0)

  return (
    <li>
      <strong>total of {total} exercises</strong>
    </li>
  )
}

export default Total
