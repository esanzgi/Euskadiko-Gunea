import { useInformacion } from '../../hooks/useInformacion'

export function Informacion ({ entorno }) {
  const { informacion } = useInformacion({ entorno })

  return (
    <div style={{ border: '1px solid black', padding: '10px', marginTop: '20px' }}>
      <h3>Información del local seleccionado</h3>
      <label>Nombre: <input type='text' value={informacion.documentName || ''} readOnly /></label>
      <label> Localidad: <input type='text' value={informacion.municipality || ''} readOnly /></label>

      <h3>Información adicional</h3>
      <label> Tipo: <input type='text' value={informacion.templateType || ''} readOnly /></label>
      <br />
      <br />
      <label> Turismo euskadi: <input type='text' value={informacion.friendlyUrl || ''} readOnly /></label>
      <br /><br />
      <label> Descripción: <textarea value={informacion.documentDescription || ''} readOnly /></label>
    </div>
  )
}
