/* eslint-disable */
'use client'

import { useState } from 'react'

import Grid from '@mui/material/Grid'

import MenuItem from '@mui/material/MenuItem'

import TemelCard from './TemelCard'

import HeaderWithButtonsCard from './HeaderWithButtonsCard'

import CustomTextField from '@core/components/mui/TextField'

import birim_kodu from '../views/birim-kodlari/birim_kodu'

import paket_kodu from '../views/birim-kodlari/paket_kodu'

const FormLayoutsBasic = ({ formData, setFormData }) => {
  const handleBirimKoduChange = event => {
    const selectedID = event.target.value
    console.log('Selected Birim Kodu ID:', selectedID)
    setFormData({ ...formData, birimKodu: selectedID })
  }

  const handlePaketKoduChange = event => {
    const selectedID = event.target.value
    console.log('Selected Paket Kodu ID:', selectedID)
    setFormData({ ...formData, paketKodu: selectedID })
  }

  return (
    <TemelCard>
      <HeaderWithButtonsCard title='Birim Tanımları'>
        <Grid container spacing={6}>
          <Grid item xs={12}>
            <Grid item xs={12}>
              <CustomTextField
                fullWidth
                label='Birim Adı'
                placeholder='<Adet>'
                value={formData.birim || ''} // formData'daki birim değerini göster
              />
            </Grid>
          </Grid>
          <Grid item xs={12} sm={6}>
            <CustomTextField
              select
              fullWidth
              label='E-Fatura Birim Kodu'
              value={formData.birimKodu}
              onChange={handleBirimKoduChange}
            >
              <MenuItem value=''>Select Birim Kodu</MenuItem>
              {birim_kodu.map((item, index) => (
                <MenuItem key={`${item.ID}-${index}`} value={item.ID}>
                  {item.VALUE}
                </MenuItem>
              ))}
            </CustomTextField>
          </Grid>
          <Grid item xs={12} sm={6}>
            <CustomTextField
              select
              fullWidth
              label='E-Fatura Paket Kodu'
              value={formData.paketKodu}
              onChange={handlePaketKoduChange}
            >
              <MenuItem value=''>Select Paket Kodu</MenuItem>
              {paket_kodu.map((item, index) => (
                <MenuItem key={`${item.ID}-${index}`} value={item.ID}>
                  {item.VALUE}
                </MenuItem>
              ))}
            </CustomTextField>
          </Grid>
        </Grid>
      </HeaderWithButtonsCard>
    </TemelCard>
  )
}

export default FormLayoutsBasic
