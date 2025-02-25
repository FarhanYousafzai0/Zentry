import React, { useEffect, useRef, useState } from "react";
import Button from "./Button";
import { TiLocationArrow } from "react-icons/ti";
import { useWindowScroll } from "react-use";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";

// Nav-items
const navItems = ["Nexus", "Vault", "Proluge", "Contact", "About"];

const NavBar = () => {
  // Ref and states for handling the navigation bar
  const navContainerRef = useRef();
  const [isNavVisible, setIsNavVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const { y: currentScrollY } = useWindowScroll();

  // Scroll event listener to show/hide nav bar
  useEffect(() => {
    if (currentScrollY === 0) {
      setIsNavVisible(true);
      navContainerRef.current?.classList.remove("floating-nav");
    } else if (currentScrollY > lastScrollY) {
      // Scrolling down -> Hide navbar
      setIsNavVisible(false);
    } else if (currentScrollY < lastScrollY) {
      // Scrolling up -> Show navbar
      setIsNavVisible(true);
      navContainerRef.current?.classList.add("floating-nav");
    }

    setLastScrollY(currentScrollY); // Update last scroll position
  }, [currentScrollY, lastScrollY]);

  // GSAP animation for smooth transitions
  useGSAP(() => {
    gsap.to(navContainerRef.current, {
      opacity: isNavVisible ? 1 : 0,
      y: isNavVisible ? 0 : -100,
      duration: 0.3,
     ease:'bounce.out'
    });
  }, [isNavVisible]);

  // Audio states and refs
  const [isAudioPlaying, setAudioPlaying] = useState(false);
  const [isIndicatorActive, setIndicatorActive] = useState(false);
  const audioRef = useRef();

  const handleAudioIndicator = () => {
    setAudioPlaying((prev) => !prev);
    setIndicatorActive((prev) => !prev);
  };

  // Handle audio play/pause
  useEffect(() => {
    if (isAudioPlaying) {
      audioRef.current?.play();
    } else {
      audioRef.current?.pause();
    }
  }, [isAudioPlaying]);

  return (
    <div
      ref={navContainerRef}
      className="fixed top-4 inset-x-0 md:inset-x-6 z-20 h-16 border-0 transition-all duration-700"
    >
      <header className="top-1/2 absolute w-full -translate-y-1/2">
        <nav className="flex items-center justify-between p-4">
          <div className="flex items-center gap-5">
            <div className="logo">
              <img width={60} src="img/logo.png" alt="Logo" />
            </div>
          </div>

          <div className="flex items-center h-full">
            <div className="hidden md:block">
              {navItems.map((item, index) => (
                <a key={index} className="nav-hover-btn" href={`#${item.toLowerCase()}`}>
                  {item}
                </a>
              ))}
            </div>

            <button onClick={handleAudioIndicator} className="flex items-center cursor-pointer ml-10 space-x-0.5">
              <audio ref={audioRef} src="/audio/loop.mp3" loop />
              {[1, 2, 3, 4].map((bars) => (
                <div
                  key={bars}
                  className={`indicator-line ${isIndicatorActive ? "active" : ""}`}
                  style={{ animationDelay: `${bars * 0.1}s` }}
                ></div>
              ))}
            </button>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default NavBar;
