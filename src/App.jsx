import './App.css'
import { Header } from './components/header/Header'
import { Main } from './components/main/Main'

function App () {
  return (
    <div style={{ border: '1px solid black', padding: '25px' }}>
      <Header />
      <Main />
    </div>
  )
}

export default App
