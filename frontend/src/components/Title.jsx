import React from 'react'

const Title = ({text1, text2}) => {
  return (
    <div className='flex items-center gap-3 mb-6 justify-center uppercase tracking-widest'>
        <p className='text-gray-400 font-light text-2xl sm:text-4xl'>
            {text1}
            &nbsp;
            <span className='font-bold text-gray-800 border-b-4 border-black pb-1'>{text2}</span>
        </p>
        <span className='w-12 h-[2px] bg-gray-300 hidden sm:block'></span>
    </div>
  )
}

export default Title
