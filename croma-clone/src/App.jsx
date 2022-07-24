import { useState } from 'react'

import './App.css'

import { Navbar } from './components/Navbar'
import {Footer} from "./components/Footer"
import { AllRoutes } from './Pages/AllRoutes'
import { AuthProvider } from './components/auth'








function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <AuthProvider>
      <Navbar/>
    <AllRoutes/>
    <Footer/>
    </AuthProvider>
    </div>
  )
}

export default App
