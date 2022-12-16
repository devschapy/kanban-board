import React from 'react'

const Button = ({text, type, Style, onClick}) => {
  return (
    <>
      <button onClick={onClick} type={type} className={`btn ${Style}`}>{text}</button>
    </>
  )
}

export default Button;