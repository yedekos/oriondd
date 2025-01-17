/* eslint-disable */
// TanimGridView.jsx
import React, { useState, useEffect, useMemo } from 'react'

import {
  useReactTable,
  getCoreRowModel,
  getFilteredRowModel,
  getSortedRowModel,
  getPaginationRowModel,
  createColumnHelper
} from '@tanstack/react-table'

import TemelGridView from './TemelGridView'

import birim_kodu from '@/views/birim-kodlari/birim_kodu'

import paket_kodu from '@/views/birim-kodlari/paket_kodu'

const columnHelper = createColumnHelper()

const TanimGridView = ({ formData, setFormData }) => {
  const [gridData, setGridData] = useState([]) // Grid verileri için state
  const [loading, setLoading] = useState(true) // Yükleme durumu için state
  const [globalFilter, setGlobalFilter] = useState('')

  // Kolonları tanımlıyoruz
  const columns = useMemo(
    () => [
      columnHelper.accessor('id', {
        header: 'Id',
        cell: info => info.getValue() ?? 'BOŞ'
      }),
      columnHelper.accessor('birim', {
        header: 'Birim',
        cell: info => info.getValue() ?? 'BOŞ'
      }),
      columnHelper.accessor('efaturakodu', {
        header: 'E-FATURA KODU',
        cell: info => info.getValue() ?? 'BOŞ'
      }),
      columnHelper.accessor('paketkodu', {
        header: 'PAKET KODU',
        cell: info => info.getValue() ?? 'BOŞ'
      })
    ],
    []
  )

  // API'den veri çekme
  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem('authToken')

        if (!token) {
          alert('Token bulunamadı. Lütfen giriş yapın.')
          return
        }

        const response = await fetch('https://localhost:7082/api/Tanim/BirimList', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
          }
        })

        if (response.ok) {
          const data = await response.json()
          console.log('API Yanıtı:', data) // Veriyi kontrol edin
          setGridData(data) // Veriyi grid'e aktar
        } else {
          const errorMessage = await response.text()
          console.error('API isteği başarısız:', errorMessage)
        }
      } catch (error) {
        console.error('API çağrısı sırasında hata oluştu:', error)
      } finally {
        setLoading(false) // Veriler yüklendikten sonra loading state'i false yapılmalı
      }
    }

    fetchData()
  }, [])

  // Satıra tıklanıldığında çağrılacak fonksiyon
  const handleRowClick = row => {
    const { efaturakodu, paketkodu, birim } = row.original

    const matchedBirim = birim_kodu.find(item => item.ID === efaturakodu)
    const matchedPaket = paket_kodu.find(item => item.ID === paketkodu)

    if (matchedBirim) {
      console.log('E-FATURA BİRİM KODU:', efaturakodu, 'VALUE:', matchedBirim.VALUE)
    } else {
      console.log('E-FATURA BİRİM KODU:', efaturakodu, 'VALUE: Bulunamadı')
    }

    if (matchedPaket) {
      console.log('E-FATURA PAKET KODU:', paketkodu, 'VALUE:', matchedPaket.VALUE)
    } else {
      console.log('E-FATURA PAKET KODU:', paketkodu, 'VALUE: Bulunamadı')
    }

    // formData'yı güncelle
    setFormData(prevData => ({
      ...prevData,
      birim, // Tıklanan satırdaki birim değerini ekle
      birimKodu: matchedBirim ? matchedBirim.ID : prevData.birimKodu,
      birimKoduValue: matchedBirim ? matchedBirim.VALUE : prevData.birimKoduValue,
      paketKodu: matchedPaket ? matchedPaket.ID : prevData.paketKodu,
      paketKoduValue: matchedPaket ? matchedPaket.VALUE : prevData.paketKoduValue
    }))
  }

  const table = useReactTable({
    data: gridData,
    columns,
    state: { globalFilter },
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    globalFilterFn: 'includesString' // Basit bir filtreleme yöntemi
  })

  // Yükleme durumunu kontrol etme
  if (loading) {
    return <div>Veriler yükleniyor...</div>
  }

  return (
    <TemelGridView
      globalFilter={globalFilter}
      setGlobalFilter={setGlobalFilter}
      table={table}
      onRowClick={handleRowClick} // Satır tıklama işlevi aktarılıyor
    />
  )
}

export default TanimGridView
