import { useEffect, useState } from 'react'
import { useEuskadiData } from './useEuskadiData'

export function useEntornos ({ municipio }) {
  const { euskadiData } = useEuskadiData()
  const [entornos, setEntornos] = useState([])

  useEffect(() => {
    const entornosFiltrados = getEntornosFiltrados({ municipio, euskadiData })
    setEntornos(entornosFiltrados)
  }, [municipio, euskadiData])

  return { entornos }
}

const getEntornosFiltrados = ({ municipio, euskadiData }) => {
  if (!municipio) return []

  const entornosFiltrados = euskadiData
    .filter(item => {
      return item.municipality.includes(municipio)
    })
    .map(item => {
      return item.documentName
    })
  return entornosFiltrados
}
