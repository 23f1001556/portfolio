import React from 'react'
import { assets } from '@/assets/assets'
import Image from 'next/image'

const Header = () => {
  return (
    <div className='w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4'>
      <div className='w-48 h-48 rounded-full overflow-hidden'>
        <Image 
          src={assets.myphoto} 
          alt='My Photo' 
          className='object-cover w-full h-full'
          priority
        />
      </div>
      <h3 className='flex items-end gap-2 text-xl md:text-2xl mb-3 font-Ovo'>
        Hi! I'm Sidhant <Image src={assets.hand_icon} alt='Hand Icon' className='w-6' />
      </h3>
      <h1 className='text-3xl sm:text-6xl lg:text-[66px] font-Ovo'> 
        Full Stack Developer
      </h1>
      <p className='max-w-2xl mx-auto font-Ovo'>
        I am a passionate full stack developer with expertise in building dynamic and responsive web applications. I love creating seamless user experiences and bringing innovative ideas to life through code.
      </p>
      <p className='max-w-2xl mx-auto font-Ovo mt-4'>
        Currently, I’m learning AI and Data Science but mostly focus on Flask/Django backend and Vue.js/Next.js frontend projects. Python is my specialty!
      </p>

      {/* Buttons container */}
      <div className='flex gap-6 mt-6'>
        <a 
          href="#contact" 
          className="px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition"
        >
          Contact Me
        </a>
        <a 
          href="/resume.pdf" 
          download 
          className="px-6 py-3 border-2 border-blue-600 text-blue-600 rounded-full hover:bg-blue-600 hover:text-white transition"
        >
          Download Reume
        </a>
      </div>

    </div>
  )
}

export default Header
