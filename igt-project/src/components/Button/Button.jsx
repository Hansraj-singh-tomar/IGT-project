import React from 'react'
import './button.css'

const Button = (props) => {
  return (
    <button className='global-btn'>{props.text}</button>
  )
}

export default Button