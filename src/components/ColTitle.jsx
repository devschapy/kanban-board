import React from 'react';

const ColTitle = ({ children, Style }) => {
  return (
    <div className={`colTitle 
    ${Style === 'open' ? 'bg-blue-100' : '' ||
        Style === 'in progress' ? 'bg-yellow-100' : '' ||
          Style === 'done' ? 'bg-green-100' : ''}`}>
      {children}
    </div>
  )
}

export default ColTitle;