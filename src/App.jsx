import React from 'react'
import './App.css'
import Hero from './Components/Hero'
import About from './Components/About'
import NavBar from './Components/NavBar'
const App = () => {
  return (
    <>
    <main className='w-full relative overflow-x-hidden min-h-screen'>
<NavBar/>
<Hero/>
<About/>
    </main>

    </>
  )
}

export default App
