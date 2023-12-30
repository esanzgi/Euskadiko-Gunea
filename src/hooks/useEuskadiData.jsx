import { useEffect, useState } from 'react'
import { getDataEuskadi } from '../services/openDataEuskadi'

export function useEuskadiData () {
  const [euskadiData, setEuskadiData] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getDataEuskadi()
        setEuskadiData(data)
      } catch (error) {
        console.error('Error al obtener datos:', error.message)
      }
    }

    fetchData()
  }, [])

  return { euskadiData }
}
