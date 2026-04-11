import React from 'react'

const Title = ({text1, text2}) => {
  return (
    <div className='flex items-center gap-3 mb-6 justify-center uppercase tracking-widest'>
        <p className='text-2xl font-light text-emerald-600/70 sm:text-4xl'>
            {text1}
            &nbsp;
            <span className='border-b-4 border-emerald-600 pb-1 font-bold text-emerald-900'>{text2}</span>
        </p>
        <span className='hidden h-[2px] w-12 bg-emerald-200 sm:block'></span>
    </div>
  )
}

export default Title
