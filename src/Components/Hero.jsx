import React, { useEffect, useRef, useState } from "react";
import { TiLocationArrow } from "react-icons/ti";
import Button from "./Button";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
const Hero = () => {
  // States
  const [currentIndex, setCurrentIndex] = useState(1);
  const [hasClicked, setHasClicked] = useState(true);
  const [loading,setLoading] = useState()
  const [loadedVideos, setLoadedVideos] = useState(0);
  const totalVideos = 3;
  const upComingVideos = (currentIndex % totalVideos) + 1;

// setLoading-anmation if the vedio is not playing
useEffect(()=>{
if(loadedVideos === totalVideos -1){
  setLoading(false)
}
});



  // Refs for each video
  const currentVideoRef = useRef(null);
  const nextVideoRef = useRef(null);
  const backgroundVideoRef = useRef(null);

  // Functions
  const handleMiniVideo = () => {
    setHasClicked(true);
    setCurrentIndex(upComingVideos);
  };

  const handleLoadVideo = () => {
    setLoadedVideos((prevLoad) => prevLoad + 1);
  };

  const VideoSrc = (index) => `videos/hero-${index}.mp4`;

  useGSAP(() => {
    if (hasClicked) {
      gsap.set("#next-video", { visibility: "visible" });
      gsap.to("#next-video", {
        transformOrigin: "center center",
        width: "100%",
        height: "100%",
        scale: 1,
        ease: "power1.inOut",
        duration: 1,
        onStart: () => nextVideoRef.current.play(),
      });
      gsap.from("#current-video", {
        transformOrigin: "center center",
        scale: 0,
        duration: 1.5,
        ease: "power1.inOut",
      });
    }
  },{dependencies: [currentIndex],revertOnUpdate:true,});
  useGSAP(() => {
    gsap.set("#video-frame", {
      clipPath: "polygon(14% 0, 72% 0, 88% 90%, 0 95%)",
      borderRadius: "0% 0% 40% 10%",
    });
    gsap.from("#video-frame", {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      borderRadius: "0% 0% 0% 0%",
      ease: "power1.inOut",
      duration:1.5,
      scrollTrigger: {
        trigger: "#video-frame",
        start: "center center",
        end: "bottom center",
        scrub: true,
      },
    });
  });

  return (
    <div className="relative w-full h-dvh overflow-x-hidden">
      {loading && (
          <div>
<div className="flex-center absolute h-dvh w-screen overflow-hidden bg-violet-50 z-10">
<div className="three-body">
  <div className="three-body__dot"></div>
  <div className="three-body__dot"></div>
  <div className="three-body__dot"></div>
</div>

</div>


          </div>

        )}
      <div id="video-frame" className="relative z-0 h-dvh w-full overflow-hidden rounded-lg">

        
        
        {/* Small Clickable Video */}
        <div className="mask-clip-path absolute-center absolute z-50 size-64 cursor-pointer overflow-hidden rounded-lg">
          <div
            onClick={handleMiniVideo}
            className="opacity-0 transition-all scale-50 origin-center duration-500 hover:opacity-100 hover:scale-100 ease-in"
          >
            <video
              ref={currentVideoRef}
              loop
              muted
              id="current-video"
              playsInline
              autoPlay
              src={VideoSrc(upComingVideos)}
              className="origin-center object-center object-cover size-64 scale-160"
              onLoadedData={handleLoadVideo}
            />
          </div>
        </div>

        {/* Next Video Transition */}
        <video
          ref={nextVideoRef}
          src={VideoSrc(currentIndex)}
          loop
          id="next-video"
          muted
          className="absolute-center invisible absolute z-20 size-64 object-cover object-center"
          onLoadedData={handleLoadVideo}
        />

        {/* Background Full-Screen Video */}
        <video
          ref={backgroundVideoRef}
          src={VideoSrc(upComingVideos === totalVideos - 1 ? 1 : upComingVideos)}
          loop
          muted
          autoPlay
        
          playsInline
          className="absolute top-0 left-0 size-full transition-all object-cover object-center"
          onLoadedData={handleLoadVideo}
        />

        {/* Hero Content */}
        <div>
          <h1 className="absolute hero-heading z-[40] text-[7rem] md:text-[12rem]  text-blue-100 font-[zentry] bottom-5 right-5">
            G<b>a</b>ming
          </h1>
          <div className="absolute left-0 top-0 size-full z-40">
            <div className="px-5 mt-24 md:px-10">
              <h1 className="font-[zentry] font-extrabold hero-heading text-[7rem] md:text-[12rem] leading-none text-blue-100">
                Redfi<b>n</b>e
              </h1>
              <p className="font-[robert-r] max-w-64 leading-none text-blue-100">
                Enter the Metagame <br /> Unleash the Play Economy.
              </p>
              <Button
                id="watch-trailer"
                title="Watch trailer"
                leftIcon={<TiLocationArrow />}
                containerClass="bg-[#D8E371] flex-center gap-1"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Background Shadowed Text */}
      <h1 className="absolute hero-heading text-[7rem] md:text-[12rem] -z-10 text-black font-[zentry] bottom-5 right-5">
        G<b>a</b>ming
      </h1>
    </div>
  );
};

export default Hero;
