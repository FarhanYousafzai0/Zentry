import React, { useRef, useState } from 'react'
const Hero = () => {

  // States
const [currentIndex,setCurrentIndex] = useState(1);
const [hasClicked,setHasClicked] = useState(false);
const [isLoading,setIsLoading] = useState(true);
const [loadedVideos,setLoadedVideos] = useState(0)


const totalVideos = 3;
const upComingVideos = (currentIndex % totalVideos) + 1;
const nextVideoRef = useRef();



// Functions:-
const handleMiniVideo = ()=>{
setHasClicked(true);
setCurrentIndex(upComingVideos);
}

const handleLoadVideo = ()=>{
  setLoadedVideos((prevLoad) => prevLoad + 1)
}

  

const VideoSrc = index => `videos/hero-${index}.mp4`;



  return (
    <>
      <div className='relative w-full h-dvh overflow-x-hidden '>
 <div id='video-frame' className='relative z-0 h-dvh w-full overflow-hidden rounded-lg'>
 <div  className=" mask-clip-path absolute-center absolute  z-50 size-64 cursor-pointer  overflow-hidden rounded-lg ">
<div
onClick={()=>handleMiniVideo()}
className=' opacity-0 transition-all scale-50   origin-center duration-500  hover:opacity-100 hover:scale-100 ease-in'
>
<video
ref={nextVideoRef}
loop
muted
playsInline
autoPlay
src={VideoSrc(upComingVideos)}
className='origin-center object-center object-cover size-64 scale-160'
onLoadedData={()=>handleLoadVideo()}
/>
</div>
    </div>
    

    <video
    ref={nextVideoRef}
    src={VideoSrc(currentIndex)}
    loop
    muted
    className='absolute-center invisible absolute z-20 size-64 object-cover object-center'
    onLoadedData={()=>handleLoadVideo}
    />


  <video 
  ref={nextVideoRef}
  src={VideoSrc(upComingVideos === totalVideos - 1 ? 1 : upComingVideos)}
  loop
  muted
  autoPlay
  playsInline

className="absolut top-0 left-0 size-full transition-all object-cover object-center"
onLoadedData={()=>handleLoadVideo}
  />
<div>
    {/*  */}
  <h1 className='absolute hero-heading z-40 text-blue-100  font-[zentry] bottom-5 right-5'>G<b>a</b>ming</h1> 
  <div className='absolute left-0 top-0 size-full z-40'>
    <div className='px-5 mt-24  md:px-10'>
<h1 className='font-[zentry] font-extrabold hero-heading leading-none text-blue-100'>Redfi<b>n</b>e</h1>
<p className='font-[robert-r] max-w-64 leading-none  text-blue-100'>Enter the Metagame <br />Unleash the Play Economy.</p>
    </div>
    
    

    </div> 


</div>

 </div>

      </div>
    </>
  )
}

export default Hero
