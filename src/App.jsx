import React from 'react'
import './App.css'
import Hero from './Components/Hero'
import About from './Components/About'
import NavBar from './Components/NavBar'
import Featres from './Components/Featres'
import Story from './Components/Story'
import Contact from './Components/Contact'
import Footer from './Components/Footer'
const App = () => {
  return (
    <>
    <main className='w-full relative overflow-x-hidden min-h-screen'>
<NavBar/>
<Hero/>
<About/>
<Featres/>
<Story/>
<Contact/>
<Footer/>
    </main>

    </>
  )
}

export default App
