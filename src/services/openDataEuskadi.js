// const DATOS_EUSKADI_API = '../mocks/espacios.php'
// const DATOS_EUSKADI_API = '../mocks/espacios-naturales.json'
const DATOS_EUSKADI_API = 'https://opendata.euskadi.eus/contenidos/ds_recursos_turisticos/espacios_naturales_euskadi/opendata/espacios-naturales.json'

export const getDataEuskadi = async () => {
  try {
    const res = await fetch(DATOS_EUSKADI_API)

    if (!res.ok) {
      throw new Error(`Error al obtener datos: ${res.status} ${res.statusText}`)
    }

    const data = await res.json()
    return data
  } catch (error) {
    console.error('Error al obtener datos:', error.message)
    throw error
  }
}
