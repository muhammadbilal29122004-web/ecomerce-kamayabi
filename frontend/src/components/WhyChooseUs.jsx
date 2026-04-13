import React from 'react'
import Title from './Title'

const WhyChooseUs = () => {
  const points = [
    {
      title: 'Asal Rohani Items',
      description: 'Har item ehtimaam se intikhab kiya jata hai taake aap tak asaliyat aur aitbaar ke sath pohanche.'
    },
    {
      title: 'Mehfooz Delivery',
      description: 'Aap ka order hifazati packing ke sath bheja jata hai, taake cheez salamat aur behtareen halat mein mile.'
    },
    {
      title: 'Rehnumai Aur Support',
      description: 'Humari team WhatsApp aur direct rabtay par aap ki zaroorat ke mutabiq mashwara aur support deti hai.'
    }
  ]

  return (
    <div className='my-20'>
      <div className='text-center mb-10'>
        <Title text1={'WHY CHOOSE'} text2={'KAMAYABI ROHANI MARKAZ'} />
        <p className='max-w-2xl mx-auto text-sm sm:text-base text-gray-600'>
          KAMAYABI ROHANI MARKAZ mein hum asaliyat, khuloos, aur behtareen khidmat ko
          pehli tarjeeh dete hain taake aap ka tajurba pur-itminan rahe.
        </p>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-7'>
        {points.map((point, index) => (
          <div
            key={index}
            className='rounded-3xl bg-white p-6 sm:p-8 shadow-[0_12px_30px_rgba(17,24,39,0.07)] hover:shadow-[0_18px_40px_rgba(17,24,39,0.12)] transition-all duration-300'
          >
            <div className='mb-5 h-1 w-10 rounded-full bg-emerald-600'></div>
            <h3 className='mb-3 text-xl font-bold text-emerald-900'>{point.title}</h3>
            <p className='text-gray-600 leading-relaxed'>{point.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default WhyChooseUs
