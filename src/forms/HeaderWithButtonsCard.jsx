// HeaderWithButtonsCard.jsx
import React from 'react'

import CardHeader from '@mui/material/CardHeader'

import CardContent from '@mui/material/CardContent'

import { Grid } from '@mui/material'

import YeniKayitButton from '@components/buttons/YeniKayitButton'

import KaydetButton from '@components/buttons/KaydetButton'

import KayitSilButton from '@components/buttons/KayitSilButton'

const HeaderWithButtonsCard = ({ title, children }) => {
  return (
    <>
      <CardHeader title={title} />
      <CardContent>
        <Grid className='mt-1 ml-1' container spacing={6}>
          {children}
        </Grid>
        <div className='flex gap-x-4 mt-8 '>
          <YeniKayitButton onClick={() => alert('Yeni Kayıt')} />
          <KaydetButton onClick={() => alert('Kaydet')} />
          <KayitSilButton onClick={() => alert('Kaydı Sil')} />
        </div>
      </CardContent>
    </>
  )
}

export default HeaderWithButtonsCard
