import React from 'react'

const Button = ({id, title, rightIcon, leftIcon, containerClass }) => {
  return (
    <>
      <button id={id} className={`group overflow-hidden z-10 mt-5 w-fit text-black  rounded-full cursor-pointer px-6 py-3 ${containerClass}`}>
{leftIcon}
        <span className='relative inline-flex overflow-hidden font-[general] text-xs '>{title}</span> {rightIcon}
      </button>
    </>
  )
}

export default Button
