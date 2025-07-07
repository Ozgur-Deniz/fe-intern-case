import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='text-red-600 bg-teal-400'>
      <h1 className='bg-yellow-500'>Fener</h1>
    </div>
  )
}

export default App
