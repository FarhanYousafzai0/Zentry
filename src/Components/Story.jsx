import React, { useState,useRef } from 'react'
import AnimatedTitle from './AnimtatedTitle'
import {gsap} from 'gsap'
import RoundedImage from '../RoudedImage'
import Button from './Button'

const Story = () => {

    const frameRef = useRef()


    const handleMouseLeave = ()=>{

        const element = frameRef.current;
        gsap.to(element,{
            duration: 0.3,
            rotateX:0,
            rotateY:0,
           
            ease: "power1.inOut",
        })
    }
const handleMouseMove = (e)=>{

    const element = frameRef.current;
    const {clientX,clientY} = e;

    if(!element) return;


    const rect = element.getBoundingClientRect()
    const xpos = clientX - rect.left;
    const ypos = clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((xpos - centerX) / centerX) * -10;
    const rotateY = ((ypos - centerY) / centerY) * 10;

    gsap.to(element,{
        duration: 0.3,
        rotateX,
        rotateY,
        transformPerspective: 500,
        ease: "power1.inOut",
    })

}
  return (
    <div className='w-full h-dvh bg-black overflow-hidden relative'>
        <div className="flex flex-col items-center py-10">
            <p className='font-[general]  uppercase text-base text-blue-50'>The open ip universe</p>
            <div className="relative w-full">
            <AnimatedTitle
            sectionId='#story'
            title="the st<b>o</b>ry of <br /> a hidden real<b>m</b>"
            containerClass="mt-5 font-[zentry] text-white text-[5rem] pointer-events-none mix-blend-difference relative z-10"
          />

<div className="relative md:h-dvh h-[90vh] w-full">
            <div style={{clipPath:'polygon(4% 0, 83% 21%, 100% 73%, 0% 100%)'}} className="absolute left-0 top-0 size-full overflow-hidden md:left-[20%] md:top-[-10%] md:size-4/5">
              <div style={{transform:'translate3d(0, 0, 0) rotateX(0) rotateY(0) rotateZ(0) scale(1)'}} className=" absolute w-full md:h-dvh h-[50dvh] opacity-100 left-10 top-16 md:left-0 md:top-10 lg:left-[-300px] lg:top-[-100px]">
                <img
                  ref={frameRef}
                  onMouseMove={handleMouseMove}
                  onMouseLeave={handleMouseLeave}
                  onMouseUp={handleMouseLeave}
                  onMouseEnter={handleMouseLeave}
                  src="/img/entrance.webp"
                  alt="entrance.webp"
                  className="object-contain"
                />
              </div>
            </div>
            </div>
            </div>
            
        </div>
       
    </div>
  )
}

export default Story
