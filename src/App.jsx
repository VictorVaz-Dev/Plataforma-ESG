import { useState } from 'react'
import Header  from './components/header/header.jsx'
import Rotas from "./rotas/Rotas"
import './App.css'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Header/>
      <Rotas/>
    </div>
  )
}

export default App
