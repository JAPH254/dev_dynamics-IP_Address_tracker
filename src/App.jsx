import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Map from './componets/Map'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
     <Map />
    </div>
  )
}

export default App
