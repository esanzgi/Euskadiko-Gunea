import { useState } from 'react'
import { useEntornos } from '../../hooks/useEntornos'
import { useMunicipios } from '../../hooks/useMunicipios'
import { Informacion } from './Informacion'

export function Municipio ({ provincia }) {
  const [selectedMunicipio, setSelectedMunicipio] = useState('')
  const [selectedEntorno, setSelectedEntorno] = useState('')

  const { municipios } = useMunicipios({ provincia })
  const { entornos } = useEntornos({ municipio: selectedMunicipio })

  const handleMunicipioChange = (event) => {
    setSelectedMunicipio(event.target.value)
    setSelectedEntorno('')
  }
  const handleEntornoChange = (event) => setSelectedEntorno(event.target.value)

  return (
    <div style={{ border: '1px solid black', padding: '16px', marginTop: '40px' }}>
      <label htmlFor='municipio'>Municipio</label>
      <select name='municipio' onChange={handleMunicipioChange}>
        <option value=''>Selecciona provincia</option>
        {municipios.map((municipio, index) => (
          <option key={index} value={municipio}>
            {municipio}
          </option>
        ))}
      </select>

      <label htmlFor='entorno'>Entorno natural</label>
      <select name='entorno' onChange={handleEntornoChange}>
        <option value=''>Selecciona entorno</option>
        {entornos.map((entorno, index) => (
          <option key={index} value={entorno}>
            {entorno}
          </option>
        ))}
      </select>

      <Informacion entorno={selectedEntorno} />
    </div>
  )
}
