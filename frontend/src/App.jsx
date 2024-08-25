import { useState } from 'react'
import Login from './pages/login/login'
import SignUp from './pages/signup/signup'
import Home from './pages/home/home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="p-4 h-screen flex items-center justify-center ">
      <Home />
    </div>
  )
}

export default App
