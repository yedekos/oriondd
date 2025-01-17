/* eslint-disable */
import React from 'react'

import BaseButton from './TemelButton'

import { BiSolidFileExport } from 'react-icons/bi'

const YeniKayitButton = ({
  disabled,
  onClick,
  styles = 'bg-blue-500 hover:bg-blue-600 focus:ring-2 focus:ring-blue-400 hover:cursor-pointer'
}) => {
  return (
    <BaseButton
      icon={<BiSolidFileExport className='w-4 h-4 relative top-0.5' />}
      styles={styles}
      onClick={onClick}
      disabled={disabled}
      text='Yeni Kayıt'
    ></BaseButton>
  )
}

export default YeniKayitButton
