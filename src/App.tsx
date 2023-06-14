import { useState } from 'react'
import hacker from './assets/undraw_hacker_mind_-6-y85.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <img src={hacker} className="logo react" alt="React logo" />
      </div>
      <h1>NetDefender</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Are you ready for the challenge?
      </p>
    </>
  )
}

export default App
