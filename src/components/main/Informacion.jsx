export function Informacion () {
  return (
    <div style={{ border: '1px solid black', padding: '10px', marginTop: '20px' }}>
      <h3>Información del local seleccionado</h3>
      <label>Nombre: <input type='text' /></label>
      <label> Localidad: <input type='text' /></label>

      <h3>Información adicional</h3>
      <label> Tipo: <input type='text' /></label>
      <br />
      <br />
      <label> Turismo euskadi: <input type='text' /></label>
      <br /><br />
      <label> Descripción: <textarea /></label>
    </div>
  )
}
