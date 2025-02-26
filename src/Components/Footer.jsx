import React from 'react'

const Footer = () => {
  return (
    <footer className='w-screen bg-[#5542FF] px-5 md:px-10 '>
      <div className="w-full overflow-hidden container mx-auto text-center">
        <h1 className='font-[zentry]    text-[30vw]  special-font'><b>Zentry</b></h1>
      </div>
      
<div className="flex flex-wrap items-center  justify-around">

<div className="flex flex-col justify-center md:justify-start">

  <h1 className='text-black text-sm '>Explore</h1>

  <ul className='flex flex-col gap-3 text-[1.5rem] font-[robert-r]  cursor-pointer mt-5'>

    <li className='hover:bg-black hover:px-5 hover:py-1 transition-all duration-500 hover:text-white rounded-lg'>Home</li>
    <li className='hover:bg-black hover:px-5 hover:py-1 transition-all duration-500 hover:text-white rounded-lg'>Prolouge</li>
    <li className='hover:bg-black hover:px-5 hover:py-1 transition-all duration-500 hover:text-white rounded-lg'>About</li>
    <li className='hover:bg-black hover:px-5 hover:py-1 transition-all duration-500 hover:text-white rounded-lg'>Contact</li>
  </ul>
</div>


<div className="flex flex-col justify-center md:justify-start">

  <h1 className='text-black text-sm '>Product</h1>

  <ul className='flex flex-col gap-3 text-[1.5rem] font-[robert-r]  mt-5 cursor-pointer'>

    <li className='hover:bg-black hover:px-5 hover:py-1 transition-all duration-500 hover:text-white rounded-lg'>Radient</li>
    <li className='hover:bg-black hover:px-5 hover:py-1 transition-all duration-500 hover:text-white rounded-lg'>Nexus</li>
    <li className='hover:bg-black hover:px-5 hover:py-1 transition-all duration-500 hover:text-white rounded-lg'>Zigma</li>
    <li className='hover:bg-black hover:px-5 hover:py-1 transition-all duration-500 hover:text-white rounded-lg'>Azul</li>
  </ul>
</div>


<div className="flex flex-col justify-center md:justify-start">

  <h1 className='text-black text-sm '>Follow us</h1>

  <ul className='flex flex-col gap-3 text-[1.5rem] font-[robert-r]  mt-5 cursor-pointer'>

    <li className='hover:bg-black hover:px-5 hover:py-1 transition-all duration-500 hover:text-white rounded-lg'>Discord</li>
    <li className='hover:bg-black hover:px-5 hover:py-1 transition-all duration-500 hover:text-white rounded-lg'>X</li>
    <li className='hover:bg-black hover:px-5 hover:py-1 transition-all duration-500 hover:text-white rounded-lg'>Youtube</li>
    <li className='hover:bg-black hover:px-5 hover:py-1 transition-all duration-500 hover:text-white rounded-lg'>Medium</li>
  </ul>
</div>

</div>
      
    </footer>
  )
}

export default Footer
