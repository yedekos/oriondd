/* eslint-disable */

import React from 'react'

import BaseButton from './TemelButton'

import { MdDelete } from 'react-icons/md'

const KayitSilButton = ({
  disabled,
  onClick,
  styles = 'bg-red-500 hover:bg-red-600 focus:ring-2 focus:ring-red-400 hover:cursor-pointer'
}) => {
  return (
    <BaseButton
      icon={<MdDelete className='w-4 h-4 relative top-0.5' />}
      styles={styles}
      onClick={onClick}
      disabled={disabled}
      text='Kayıt Sil'
    ></BaseButton>
  )
}

export default KayitSilButton
