import { useState } from 'react'

import './App.css'

import { Navbar } from './components/Navbar'
import {Footer} from "./components/Footer"
import { Products } from './Pages/Products'
// import { DemoCarousel } from './components/Slider'
// import { NewAtCroma } from './components/NewAtCroma'
// import { Highlights } from './components/Highlights'






function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Navbar/>
      {/* <DemoCarousel/>
    <Highlights/>
      <NewAtCroma/> */}
      <Products/>
    <Footer/>
    </div>
  )
}

export default App
