import React from 'react'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <div className='relative w-full'>
      <img
        className='w-full object-cover'
        src='/Waniya-Awais-Banner-White.jpeg'
        alt='Anmool Collection'
      />
      <div className='absolute inset-0 flex flex-col items-center justify-end pb-10 sm:pb-16'>
        <Link to='/collection'>
          <button className='px-8 py-3 text-sm font-semibold text-white bg-black hover:bg-gray-800 transition-all duration-300 tracking-widest'>
            SHOP NOW
          </button>
        </Link>
      </div>
    </div>
  )
}

export default Hero
