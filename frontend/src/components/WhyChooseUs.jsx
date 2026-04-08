import React from 'react'
import Title from './Title'

const WhyChooseUs = () => {
  const points = [
    {
      title: 'Authentic Products',
      description: 'Every item is sourced from verified suppliers and reviewed before listing.'
    },
    {
      title: 'Fast, Reliable Delivery',
      description: 'Smart dispatch process ensures safe packaging and on-time doorstep delivery.'
    },
    {
      title: 'Dedicated Support',
      description: 'Friendly support team helps you with orders, returns, and product guidance.'
    }
  ]

  return (
    <div className='my-20'>
      <div className='text-center mb-10'>
        <Title text1={'WHY CHOOSE'} text2={'ANMOOL'} />
        <p className='max-w-2xl mx-auto text-sm sm:text-base text-gray-600'>
          We combine premium quality, transparent service, and modern convenience so your shopping
          experience feels simple, reliable, and refined.
        </p>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-7'>
        {points.map((point, index) => (
          <div
            key={index}
            className='rounded-3xl border border-gray-100 bg-white p-6 sm:p-8 shadow-[0_12px_30px_rgba(17,24,39,0.07)] hover:shadow-[0_18px_40px_rgba(17,24,39,0.12)] transition-all duration-300'
          >
            <div className='w-10 h-1 bg-black rounded-full mb-5'></div>
            <h3 className='text-xl font-bold text-gray-900 mb-3'>{point.title}</h3>
            <p className='text-gray-600 leading-relaxed'>{point.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default WhyChooseUs
