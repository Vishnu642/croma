import { useState } from 'react'

import './App.css'

import { Navbar } from './components/Navbar'
import {Footer} from "./components/Footer"
import { DemoCarousel } from './components/Slider'
import { NewAtCroma } from './components/NewAtCroma'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Navbar/>
      <DemoCarousel/>
      <NewAtCroma/>
    <Footer/>
    </div>
  )
}

export default App
