import React from 'react'

const NewsLetterBox = () => {

    const onSubmitHandler = (event) => {
        event.preventDefault();
        
    }
    
  return (
    <div className='mt-10 text-center '>
        <p className='text-2xl font-medium text-emerald-900'>Unlock 20% Off | Subscribe Today!</p>
        <p className='mt-3 text-gray-400'>Don't miss out—unlock your savings now by subscribing below!</p>
        <form onClick={onSubmitHandler} className='mx-auto my-6 flex w-full max-w-lg items-center gap-3 overflow-hidden rounded-full bg-white pl-4 shadow-md sm:w-1/2'>
            <input 
                className='w-full outline-none sm:flex-1' 
                type="email" 
                placeholder='hello@gmail.com'
                required 
            />
            <button type='submit' className='bg-emerald-700 px-10 py-4 text-xs text-white hover:bg-emerald-800'>SUBSCRIBE</button>
        </form>
    </div>
  )
}

export default NewsLetterBox
