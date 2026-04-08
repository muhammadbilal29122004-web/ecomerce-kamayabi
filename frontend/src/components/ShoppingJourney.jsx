import React from 'react'
import { Link } from 'react-router-dom'
import Title from './Title'

const ShoppingJourney = () => {
  const steps = [
    { id: '01', title: 'Discover', text: 'Browse curated collections across Health, Beauty, Fashion, and Jewelry.' },
    { id: '02', title: 'Choose', text: 'Compare trusted options, check details, and select what fits your lifestyle.' },
    { id: '03', title: 'Order', text: 'Secure checkout with smooth order flow and transparent delivery updates.' },
    { id: '04', title: 'Enjoy', text: 'Receive premium products with confidence backed by responsive support.' }
  ]

  return (
    <div className='my-20 rounded-[2.5rem] border border-gray-100 bg-gradient-to-br from-white to-gray-50 p-6 sm:p-10 shadow-inner'>
      <div className='text-center mb-10'>
        <Title text1={'A BETTER'} text2={'SHOPPING JOURNEY'} />
        <p className='max-w-2xl mx-auto text-sm sm:text-base text-gray-600'>
          Designed to be seamless from first click to final delivery.
        </p>
      </div>

      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6'>
        {steps.map((step) => (
          <div key={step.id} className='bg-white rounded-2xl border border-gray-100 p-5 shadow-sm'>
            <p className='text-xs font-bold tracking-[0.25em] text-gray-400 mb-3'>{step.id}</p>
            <h4 className='text-lg font-bold text-gray-900 mb-2'>{step.title}</h4>
            <p className='text-sm text-gray-600 leading-relaxed'>{step.text}</p>
          </div>
        ))}
      </div>

      <div className='mt-8 flex items-center justify-center'>
        <Link to='/collection'>
          <button className='px-8 py-3 rounded-full bg-black text-white text-sm font-semibold hover:bg-gray-800 transition-colors duration-300'>
            START SHOPPING
          </button>
        </Link>
      </div>
    </div>
  )
}

export default ShoppingJourney
