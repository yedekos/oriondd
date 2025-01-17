import React from 'react'

const TemelButton = ({ icon, text, styles, onClick, disabled }) => {
  const baseStyles = 'px-4 py-2 font-semibold text-white rounded focus:outline-none'

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyles} ${styles} ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
    >
      {icon && <span className='mr-2'>{icon}</span>}
      {text}
    </button>
  )
}

export default TemelButton
