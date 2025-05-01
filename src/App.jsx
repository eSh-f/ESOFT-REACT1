import { useState } from 'react'
import './App.css'

function App(props) {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          name {props.name} count is {count}
        </button>
      </div>
    </>
  )
}

export default App
