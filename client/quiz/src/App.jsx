import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import QuizDashboard from './Components/QuizDashboard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <QuizDashboard/>
    </>
  )
}

export default App
