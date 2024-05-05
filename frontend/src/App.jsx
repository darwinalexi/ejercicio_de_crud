import { useState } from 'react'
import Formulario from './pages/Formulario'
import './App.css'
import Usuarios from './pages/Usuarios'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <h1 className='text-red-500'>Crud</h1>
        <Formulario/>
        <Usuarios/>
       </div>
    </>
  )
}

export default App
