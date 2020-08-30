import React from 'react'

const index = ({ error }) => {
  if(!error) {
    return null
  }

  return (
    <p style={{color: '#f31', margin: '1rem 0'}}>
      {error}
    </p>
  )
}

export default index
