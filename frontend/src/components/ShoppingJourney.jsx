import React from 'react'
import { Link } from 'react-router-dom'
import Title from './Title'

const ShoppingJourney = () => {
  const steps = [
    {
      id: '01',
      title: 'Dekhein',
      text: 'Surah, Naqsh, Taveez, Istikhara, Loh, Cara, rings aur stones categories ko araam se dekhein aur apni zaroorat ke mutabiq intikhab karein.'
    },
    {
      id: '02',
      title: 'Intikhab Karein',
      text: 'Tasveerain aur tafseel dekh kar faisla karein; agar rehnumai chahiye ho to WhatsApp par hum se seedha rabta karein.'
    },
    {
      id: '03',
      title: 'Order Confirm Karein',
      text: 'Secure payment ke sath order confirm karein. Confirmation se dispatch tak aap ko updates milti rahengi.'
    },
    {
      id: '04',
      title: 'Receive Karein',
      text: 'Aap ka parcel ehtimaam aur hifazat ke sath deliver hota hai. Delivery ke baad bhi humari support team dastiyab rehti hai.'
    }
  ]

  return (
    <div className='my-20 rounded-[2.5rem] bg-gradient-to-br from-white to-gray-50 p-6 sm:p-10 shadow-inner'>
      <div className='text-center mb-10'>
        <Title text1={'YOUR JOURNEY'} text2={'WITH KAMAYABI ROHANI MARKAZ'} />
        <p className='max-w-2xl mx-auto text-sm sm:text-base text-gray-600'>
          Pehli visit se parcel receive hone tak har qadam par saaf maloomat aur rehnumai
          ke sath asaan, pur-itminan safar.
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
            VIEW ROHANI COLLECTION
          </button>
        </Link>
      </div>
    </div>
  )
}

export default ShoppingJourney
