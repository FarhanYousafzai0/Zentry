import { useRef, useState } from "react"
import { FaLocationArrow } from "react-icons/fa"

const BentoTilt = ({ children, className = '' }) => {
  const [transformStyle, setTransformStyle] = useState('')
  const cardRef = useRef()

  const handleMouseMove = (e) => {
    const card = cardRef.current
    if (!card) return

    const rect = card.getBoundingClientRect()
    const mouseX = e.clientX - rect.left
    const mouseY = e.clientY - rect.top

    const centerX = rect.width / 2
    const centerY = rect.height / 2

    const rotateY = ((mouseX - centerX) / centerX) * 10
    const rotateX = -((mouseY - centerY) / centerY) * 10

    setTransformStyle(`
      perspective(1000px)
      rotateX(${rotateX}deg)
      rotateY(${rotateY}deg)
      scale(1.05)
    `)
  }

  const handleMouseLeave = () => {
    setTransformStyle('')
  }

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`${className} transition-[transform] cursor-grab duration-300 ease-out will-change-transform`}
      style={{ transform: transformStyle }}
    >
      {children}
    </div>
  )
}

const BentoCard = ({ title, description, src, isComingSoon }) => {
  return (
    <div className="relative size-full">
      <video 
        className="absolute top-0 left-0 size-full object-cover object-center"
        src={src}
        loop
        autoPlay
        playsInline
        muted
      />
      <div className="flex flex-col justify-between relative z-10 w-full size-full p-5 text-blue-50">
        <div>
          <h1 className="special-font bento-title text-[4rem]">{title}</h1>
          {description && (
            <p className="text-blue-50 max-w-sm text-xs md:text-base">{description}</p>
          )}
        </div>
      </div>
    </div>
  )
}

const Features = () => {
  return (
    <section className='bg-black pb-52'>
      <div className="px-5 md:px-10 container mx-auto">
        <div className="px-5 py-32">
          <p className="font-[circular-web] text-lg text-blue-50">
            Explore the Zentry Universe
          </p>
          <p className="max-w-md font-[circular-web] text-lg text-blue-50 opacity-50">
            Immerse yourself in a rich and ever-expanding universe where a vibrant
            array of products converge into an interconnected overlay experience
            on your world.
          </p>
        </div>
      </div>

      <div className="px-5 md:px-10">
        <BentoTilt className="border-hsla container mx-auto h-96 mt-10 md:h-[80vh] overflow-hidden rounded-md">
          <BentoCard
            title={<><b>radia</b>nt</>}
            description='The games of games transforming your in-game action across Web2 & Web3 titles into a rewarding adventure.'
            src='/videos/feature-1.mp4'
          />
        </BentoTilt>

        <div className="h-[130vh] grid grid-cols-1 md:grid-cols-2 gap-7 mt-10">
          <BentoTilt className="row-span-2 col-span-1 overflow-hidden">
            <BentoCard
              src="videos/feature-2.mp4"
              title={<><b>zig</b>ma</>}
              description="An anime and gaming-inspired NFT collection - the IP primed for expansion."
            />
          </BentoTilt>

          <BentoTilt className="col-span-1 row-span-1 overflow-hidden">
            <BentoCard
              src='videos/feature-3.mp4'
              description="The player portals uniting humans & AI to play, compete, earn, and showcase—gamifying social & Web3 experiences."
              title={<><b>nex</b>us</>}
            />
          </BentoTilt>

          <BentoTilt className="col-span-1 row-span-1 overflow-hidden">
            <BentoCard
              src='videos/feature-4.mp4'
              description="The agent of agents elevating agentic AI experience to be more fun and productive."
              title={<><b>Az</b>ul</>}
            />
          </BentoTilt>

          <BentoTilt className="overflow-hidden">
            <div className="flex flex-col justify-between size-full p-10 bg-[#5724FF]">
              <h1 className="bento-title text-[4rem] special-font max-w-64 leading-[0.8] text-black">
                M<b>o</b>re co<b>m</b>ing s<b>o</b>on.
              </h1>
              <FaLocationArrow className="scale-200 cursor-pointer self-end m-5"/>
            </div>
          </BentoTilt>

          <BentoTilt className="overflow-hidden">
            <video
              src="videos/feature-5.mp4"
              loop
              autoPlay
              muted
              className="size-full object-cover object-center"
            />
          </BentoTilt>
        </div>
      </div>
    </section>
  )
}

export default Features