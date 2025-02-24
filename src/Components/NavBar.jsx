import React from 'react'
import Button from './Button'
import { TiLocationArrow } from 'react-icons/ti'



const navItems = ['Nexus','Vault','Proluge','Contact','About'];
const NavBar = () => {
  return (
    <div className='fixed top-4 inset-x-0 md:inset-x-6 z-20 h-16 border-0 transition-all duration-700 '>
<header className='top-1/2 absolute w-full -translate-y-1/2 '>
<nav className='flex items-center justify-between p-4'>
<div className="flex items-center gap-5">
    <div className="logo"><img src="img/logo.png" alt="" /></div>
    <Button
                id="watch-trailer"
                title="Products"
                rightIcon={<TiLocationArrow />}
                containerClass="bg-blue-50 flex-center gap-1"
              />
</div>

<div className="flex items-center h-full"><div className="hidden md:block">
    
    {navItems.map((item,index)=>(
        <a key={index} className='nav-hover-btn'   href={`#${item.toLowerCase()}`}>{item}</a>
    ))}
    
    </div></div>



</nav>

</header>
      
    </div>
  )
}

export default NavBar
