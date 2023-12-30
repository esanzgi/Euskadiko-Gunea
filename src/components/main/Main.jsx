import { useState } from 'react'
import { Municipio } from './Municipio'
import { Provincia } from './Provincia'

export function Main () {
  const [provincia, setProvincia] = useState('')

  return (
    <div style={{ border: '1px solid black', padding: '20px', marginTop: '40px' }}>
      <Provincia setProvincia={setProvincia} />
      <Municipio provincia={provincia} />
    </div>
  )
}
