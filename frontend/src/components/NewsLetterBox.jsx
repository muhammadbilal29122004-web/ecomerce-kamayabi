import React from 'react'

const NewsLetterBox = () => {

    const onSubmitHandler = (event) => {
        event.preventDefault();
        
    }
    
  return (
    <div className='mt-10 text-center '>
        <p className='text-2xl font-medium text-emerald-900'>KAMAYABI ROHANI MARKAZ Updates</p>
        <p className='mt-3 text-gray-400'>Nayi rohani products, offers, aur important updates ke liye subscribe karein.</p>
        <form onSubmit={onSubmitHandler} className='mx-auto my-6 flex w-full max-w-lg items-center gap-3 overflow-hidden rounded-full bg-white pl-4 shadow-md sm:w-1/2'>
            <input 
                className='w-full outline-none sm:flex-1' 
                type="email" 
                placeholder='Apna email address likhein'
                required 
            />
            <button type='submit' className='bg-emerald-700 px-10 py-4 text-xs text-white hover:bg-emerald-800'>JOIN NOW</button>
        </form>
    </div>
  )
}

export default NewsLetterBox
