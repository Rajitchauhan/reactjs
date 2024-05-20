import { useState } from 'react'
import Read from './component/Read'

function App() {
  const [count, setCount] = useState(0)
  
  return (
    <>
      <div className="containter">
        <Read />
      </div>
    </>
  )
}

export default App
