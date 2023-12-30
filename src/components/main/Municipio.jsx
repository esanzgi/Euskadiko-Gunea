import { useMunicipios } from '../../hooks/useMunicipios'
import { Informacion } from './Informacion'

export function Municipio ({ provincia }) {
  const { municipios } = useMunicipios({ provincia })

  return (
    <div style={{ border: '1px solid black', padding: '16px', marginTop: '40px' }}>
      <label htmlFor='municipio'>Municipio</label>
      <select name='municipio'>
        <option value=''>Selecciona provincia</option>
        {municipios.map((municipio, index) => (
          <option key={index} value={municipio}>
            {municipio}
          </option>
        ))}
      </select>

      <label htmlFor='entorno'>Entorno natural</label>
      <select name='entorno'>
        <option value=''>Selecciona entorno</option>
      </select>

      <Informacion />
    </div>
  )
}
