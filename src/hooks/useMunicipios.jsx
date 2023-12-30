import { useEffect, useState } from 'react'
import { useEuskadiData } from './useEuskadiData'

export function useMunicipios ({ provincia }) {
  const { euskadiData } = useEuskadiData()
  const [municipios, setMunicipios] = useState([])

  useEffect(() => {
    const municipiosFiltrados = getMunicipiosFiltrados({ provincia, euskadiData })
    setMunicipios(municipiosFiltrados)
  }, [provincia, euskadiData])
  return { municipios }
}

const getMunicipiosFiltrados = ({ provincia, euskadiData }) => {
  if (!provincia) return []

  const municipiosFilrados = euskadiData
    .filter(item => {
      return item.territory.includes(provincia)
    })
    .map(item => {
      return item.municipality
    })
  return municipiosFilrados
}
