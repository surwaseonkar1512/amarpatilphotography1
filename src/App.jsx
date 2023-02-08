import { useState } from 'react'

import './App.css'





import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home1 from './components/Home1'
import Baby from './Pages/Baby'
import Gallery from './Pages/Gallery'
import Nav from './components/Nav'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="">
    <BrowserRouter>
    <Nav/>
       <Routes>
       <Route index element={<Home1/>}/>
       <Route path='/baby1' element={<Gallery/>}/>
       <Route path='/baby' element={<Baby/>}/>
       </Routes>
    </BrowserRouter>
        
      
   
    </div>
  )
}

export default App
