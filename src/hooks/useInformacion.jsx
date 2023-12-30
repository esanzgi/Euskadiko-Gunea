import { useEffect, useState } from 'react'
import { useEuskadiData } from './useEuskadiData'

export function useInformacion ({ entorno }) {
  const { euskadiData } = useEuskadiData()
  const [informacion, setInformacion] = useState({})

  useEffect(() => {
    const entornoFiltrado = getEntorno({ entorno, euskadiData })
    setInformacion(entornoFiltrado)
  }, [entorno, euskadiData])

  return { informacion }
}

const getEntorno = ({ entorno, euskadiData }) => {
  if (!entorno) return {}
  const entornoFiltrado = euskadiData
    .find((item) => {
      return item.documentName === entorno
    })

  return entornoFiltrado
}
