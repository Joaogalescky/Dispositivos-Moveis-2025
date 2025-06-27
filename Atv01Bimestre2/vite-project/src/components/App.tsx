import { useState } from 'react'
import reactLogo from '../assets/react.svg'
import githubLogo from '/public/github.svg'
import '../App.css'

function App() {
  // Variável constante de 0 - contador
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://github.com/Joaogalescky/Dispositivos-Moveis-2025" target="_blank">
          <img src={githubLogo} className="logo github" alt="Github logo" />
          {/* https://icons8.com/icons/set/github */}
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Meu primeiro app React</h1>
      <div className="card">
        {/* Botão contador com arrow function */}
        <button onClick={() => setCount((count) => count + 1)}>
          contador em: {count}
        </button>
      </div>
      <p className="autor">
        João Vitor Campõe Galescky
      </p>
    </>
  )
}

// Exportação
export default App