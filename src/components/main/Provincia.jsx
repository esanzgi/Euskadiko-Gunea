export function Provincia ({ setProvincia }) {
  const handleChangeProvincia = (event) => {
    setProvincia(event.target.value)
  }

  return (
    <div style={{ border: '1px solid black', padding: '8px' }}>
      <p>Provincia</p>

      <label>
        <input
          type='radio'
          value='Araba/Álava'
          onChange={handleChangeProvincia}
          name='provincia'
        />
        Araba/Álava
      </label>
      <br />
      <label>
        <input
          type='radio'
          value='Bizkaia'
          onChange={handleChangeProvincia}
          name='provincia'
        />
        Bizkaia
      </label>
      <br />
      <label>
        <input
          type='radio'
          value='Gipuzkoa'
          onChange={handleChangeProvincia}
          name='provincia'
        />
        Gipuzkoa
      </label>
    </div>
  )
}
