import React from 'react';

const Input = ({ divStyle, inputStyle, label, id, type, placeholder, onChange , value}) => {
  return (
    <div className={`${divStyle}`}>
      <label htmlFor='' className='text-gray-700'>{label}</label>
      <input id={id} type={type} className={`${inputStyle} inputStyle`} placeholder={placeholder}  onChange={onChange} value={value}/>
    </div>
  )
}

export default Input;