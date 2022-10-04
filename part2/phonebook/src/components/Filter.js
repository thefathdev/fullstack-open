import React from 'react'

const Filter = ({ filter, onChange }) => {
  return (
    <>
      <label htmlFor="filter">filter shown with</label>
      <input id="filter" value={filter} onChange={onChange} />
    </>
  )
}

export default Filter
