import React from 'react'
import { Link } from 'react-router-dom'
import Title from './Title'

const ShoppingJourney = () => {
  const steps = [
    {
      id: '01',
      title: 'Explore',
      text: 'Browse Surah, Naqsh, Taveez, Istikhara, Loh, Cara, rings, and stones — each category described clearly and curated for KAMAYABI.'
    },
    {
      id: '02',
      title: 'Select',
      text: 'Compare options, read photos and details, and message us on WhatsApp anytime you want a second opinion before you decide.'
    },
    {
      id: '03',
      title: 'Checkout',
      text: 'Complete your order with secure payment and stay informed with updates from confirmation through dispatch.'
    },
    {
      id: '04',
      title: 'Receive',
      text: 'Your pieces arrive carefully packed. Our team stays reachable after delivery if you have follow-up questions.'
    }
  ]

  return (
    <div className='my-20 rounded-[2.5rem] bg-gradient-to-br from-white to-gray-50 p-6 sm:p-10 shadow-inner'>
      <div className='text-center mb-10'>
        <Title text1={'YOUR JOURNEY'} text2={'WITH KAMAYABI'} />
        <p className='max-w-2xl mx-auto text-sm sm:text-base text-gray-600'>
          From your first visit to delivery at your door — a straightforward, transparent path with guidance when you need it.
        </p>
      </div>

      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6'>
        {steps.map((step) => (
          <div key={step.id} className='bg-white rounded-2xl p-5 shadow-sm'>
            <p className='text-xs font-bold tracking-[0.25em] text-gray-400 mb-3'>{step.id}</p>
            <h4 className='mb-2 text-lg font-bold text-emerald-900'>{step.title}</h4>
            <p className='text-sm text-gray-600 leading-relaxed'>{step.text}</p>
          </div>
        ))}
      </div>

      <div className='mt-8 flex items-center justify-center'>
        <Link to='/collection'>
          <button className='rounded-full bg-emerald-700 px-8 py-3 text-sm font-semibold text-white transition-colors duration-300 hover:bg-emerald-800'>
            BROWSE COLLECTION
          </button>
        </Link>
      </div>
    </div>
  )
}

export default ShoppingJourney
