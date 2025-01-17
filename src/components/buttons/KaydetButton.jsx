/* eslint-disable */
import React from 'react'

import BaseButton from './TemelButton'

import { FaSave } from 'react-icons/fa'

const KaydetButton = ({
  disabled,
  onClick,
  styles = 'bg-green-500 hover:bg-green-600 focus:ring-2 focus:ring-green-400 hover:cursor-pointer'
}) => {
  return (
    <BaseButton
      icon={<FaSave className='w-4 h-4 relative top-0.5' />} // Adjust `top` to control vertical position
      styles={styles}
      onClick={onClick}
      disabled={disabled}
      text='Kaydet'
    ></BaseButton>
  )
}

export default KaydetButton
