import React from 'react'

const Input = ({change}) => {
  return (
    
    <input type="text" onChange = {(e)=>{change(e)}}  />

  )
}

export default Input