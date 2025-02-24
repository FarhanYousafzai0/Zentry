import React from 'react'
import {gsap} from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from '@gsap/react';
import AnimatedTitle from './AnimtatedTitle';
gsap.registerPlugin(ScrollTrigger);
const About = () => {

    useGSAP(() => {
        const clipAnimation = gsap.timeline({
          scrollTrigger: {
            trigger: "#clip",
            start: "center center",
            end: "bottom center",
            scrub: 0.5,
            pin: true,
            pinSpacing: true,
          },
        });
    
        clipAnimation.to(".mask-clip-path", {
          width: "100vw",
          height: "100vh",
          borderRadius: 0,
        });
      });
    
  return (
    <div  className='min-h-screen w-screen '>
      <div className="relative mb-10 mt-36 flex flex-col text-center gap-5 overflow-hidden">

<h1 className='font-[general] text-normal md:text-10'>Wellcome to Zentry</h1>

<AnimatedTitle
          title="Disc<b>o</b>ver the world's <br /> largest shared <b>a</b>dventure"
          containerClass="mt-5 !text-black text-center"
        />


      </div>

<div className="h-dvh w-screen" id='clip' >
    <div className="mask-clip-path  about-image absolute left-1/2 top-0 z-20 h-[60vh] w-70 md:w-96 origin-center -translate-x-1/2 overflow-hidden rounded-3xl md:w-[30vw];">
<img className='absolute top-0 left-0 size-full object-cover object-center ' src='img/about.webp' alt="Background" />

    </div>
</div>


    </div>


 
  )
}

export default About
