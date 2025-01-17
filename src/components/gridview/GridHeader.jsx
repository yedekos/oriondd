'use client'

import CardHeader from '@mui/material/CardHeader'

import DebouncedInput from './DebouncedInput'

const GridHeader = ({ globalFilter, setGlobalFilter, table }) => {
  return (
    <CardHeader
      title='Liste'
      action={
        <DebouncedInput value={globalFilter} onChange={value => setGlobalFilter(value)} placeholder='Tümünü Ara...' />
      }
    />
  )
}

export default GridHeader
