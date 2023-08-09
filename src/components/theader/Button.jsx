import React from 'react'

const Button = ({color,text}) => {
  return (
    
    <button className={`${color} px-4 py-1 border-1 rounded` }>
    {text}
  </button>
    
  )
}

export default Button
