import React from 'react'
import { assets } from '../assets/assets'
import { useHomeContent } from '../context/HomeContentContext'

const OurPolicy = () => {
  const { policyUrls } = useHomeContent()
  return (
    <div className='flex flex-col justify-around gap-12 py-8 text-center text-xs text-emerald-900/80 sm:flex-row sm:gap-2 sm:text-sm md:text-base'>
        <div>
            <img src={policyUrls.exchange || assets.exchange_icon} className='w-12 m-auto mb-3' alt="Exchange" />
            <p className='mb-2 font-semibold'>Easy Return & Exchange Policy</p>
            <p className='text-gray-400'>
                Easy Returns/exchanges within 10 days.
            </p>
        </div>
        <div>
            <img src={policyUrls.quality || assets.quality_icon} className='w-12 m-auto mb-3' alt="Quality" />
            <p className='mb-2 font-semibold'>Our Quality Policy</p>
            <p className='text-gray-400'>
                KAMAYABI ensures top-quality products.
            </p>
        </div>
        <div>
            <img src={policyUrls.support || assets.support_img} className='w-12 m-auto mb-3' alt="Support" />
            <p className='mb-2 font-semibold'>Best Customer Support</p>
            <p className='text-gray-400'>
                We support via email, phone, or chat.
            </p>
        </div>
    </div>
  )
}

export default OurPolicy
