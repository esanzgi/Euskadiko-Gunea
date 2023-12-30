import { Nombre } from './Nombre'
import { Titulo } from './Titulo'

export function Header () {
  return (
    <div style={{ border: '1px solid black', padding: '25px' }}>
      <Titulo />
      <Nombre />
    </div>
  )
}
