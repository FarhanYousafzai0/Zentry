import React from 'react'
import './App.css'
import Hero from './Components/Hero'
import About from './Components/About'
import NavBar from './Components/NavBar'
import Featres from './Components/Featres'
const App = () => {
  return (
    <>
    <main className='w-full relative overflow-x-hidden min-h-screen'>
<NavBar/>
<Hero/>
<About/>
<Featres/>
    </main>

    </>
  )
}

export default App
