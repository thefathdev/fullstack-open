import React from 'react'

const Notification = ({ text, success }) => {
  return (
    <>
      {Boolean(text) ? (
        <p className={`notification ${success ? 'success' : 'failed'}`}>
          {text}
        </p>
      ) : null}
    </>
  )
}

export default Notification
