'use client'

import { useEffect, useState } from 'react'

import FormLayoutsBasic from '@/forms/FormLayoutsBasic'

import TanimGridView from '@/components/gridview/TanimGridView'

const Page = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const [formData, setFormData] = useState({
    paketKodu: '',
    birimKodu: ''
  })

  const handleLogin = async (usercode, password) => {
    try {
      const response = await fetch('https://localhost:7082/api/Login/Login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          usercode,
          password
        })
      })

      if (response.ok) {
        const result = await response.json()

        // Token'ı aldıktan sonra localStorage'a kaydediyoruz
        if (result.token) {
          localStorage.setItem('authToken', result.token)
          setIsLoggedIn(true)
          console.log('Giriş başarılı:', result)
        } else {
          alert('Giriş başarısız. Lütfen bilgilerinizi kontrol edin.')
        }
      } else {
        alert('API isteğinde hata oluştu. Lütfen tekrar deneyin.')
      }
    } catch (error) {
      console.error('Giriş sırasında bir hata oluştu:', error)
      alert('Bir hata oluştu. Lütfen tekrar deneyin.')
    }
  }

  useEffect(() => {
    // Sayfa yüklendiğinde otomatik giriş yap
    handleLogin('0001', '1')
  }, [])

  return (
    <div>
      <div>
        <FormLayoutsBasic formData={formData} setFormData={setFormData} />
      </div>
      <br />
      <div>
        <TanimGridView formData={formData} setFormData={setFormData} />
      </div>
    </div>
  )
}

export default Page
