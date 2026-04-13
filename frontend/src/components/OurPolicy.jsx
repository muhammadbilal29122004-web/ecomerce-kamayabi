import React from 'react'

const OurPolicy = () => {
  return (
    <div className='flex flex-col justify-around gap-12 py-8 text-center text-xs text-emerald-900/80 sm:flex-row sm:gap-2 sm:text-sm md:text-base'>
        <div>
            <span className='m-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100 text-emerald-800'>
                <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' className='h-6 w-6' fill='none' stroke='currentColor' strokeWidth='2'>
                    <path d='M4 7h11a4 4 0 1 1 0 8H7' />
                    <path d='m8 4-4 3 4 3' />
                    <path d='m16 14 4 3-4 3' />
                </svg>
            </span>
            <p className='mb-2 font-semibold'>Advance Payment Confirmation</p>
            <p className='text-gray-400'>
                Orders are confirmed after secure advance payment verification.
            </p>
        </div>
        <div>
            <span className='m-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100 text-emerald-800'>
                <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' className='h-6 w-6' fill='none' stroke='currentColor' strokeWidth='2'>
                    <path d='M12 3 4 7v6c0 5 3.5 8.5 8 10 4.5-1.5 8-5 8-10V7z' />
                    <path d='m9 12 2 2 4-4' />
                </svg>
            </span>
            <p className='mb-2 font-semibold'>Asal Rohani Quality</p>
            <p className='text-gray-400'>
                KAMAYABI ROHANI MARKAZ ensures authentic and carefully selected items.
            </p>
        </div>
        <div>
            <span className='m-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100 text-emerald-800'>
                <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' className='h-6 w-6' fill='none' stroke='currentColor' strokeWidth='2'>
                    <path d='M21 15a4 4 0 0 1-4 4H8l-5 3V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4z' />
                    <path d='M8 10h8M8 14h5' />
                </svg>
            </span>
            <p className='mb-2 font-semibold'>WhatsApp Rehnumai</p>
            <p className='text-gray-400'>
                Fast support on WhatsApp for product guidance and order help.
            </p>
        </div>
    </div>
  )
}

export default OurPolicy
