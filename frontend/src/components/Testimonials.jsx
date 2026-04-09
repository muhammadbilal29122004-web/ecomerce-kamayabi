import React from 'react'
import Title from './Title'

const Testimonials = () => {
    const testimonials = [
        {
            name: "Sarah Ahmed",
            role: "Entrepreneur",
            text: "The quality of products at ANMOOL is truly unmatched. I've bought jewellery and cosmetics here, and both were beyond my expectations. Highly recommended!",
            rating: 5
        },
        {
            name: "Zoya Malik",
            role: "Dermatologist",
            text: "As a professional, I'm very picky about cosmetics. ANMOOL's collection is authentic and effective. Their service is top-notch too.",
            rating: 5
        },
        {
            name: "Hamza Khan",
            role: "Student",
            text: "Fast delivery and great customer support! I love how easy it is to find what I need across so many different categories. Great job!",
            rating: 4
        }
    ]

    return (
        <div className='my-20 bg-gray-50 rounded-[4rem] p-10 sm:p-20 shadow-inner'>
            <div className='text-3xl text-center py-12'>
                <Title text1={'WHAT OUR'} text2={'CUSTOMERS SAY'} />
                <p className='w-3/4 m-auto text-xs text-gray-600 sm:text-sm md:text-base'>
                    Don't just take our word for it. Here's what some of our valued customers have to say about their experience with ANMOOL.
                </p>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-3 gap-10'>
                {testimonials.map((item, index) => (
                    <div key={index} className='bg-white p-8 rounded-3xl shadow-xl hover:-translate-y-2 transition-transform duration-500 border border-gray-100 flex flex-col justify-between'>
                        <div>
                            <div className='flex gap-1 text-yellow-400 mb-6'>
                                {[...Array(item.rating)].map((_, i) => (
                                    <span key={i} className='text-lg'>★</span>
                                ))}
                            </div>
                            <p className='text-gray-600 italic leading-loose text-lg mb-8'>"{item.text}"</p>
                        </div>
                        <div className='flex items-center gap-4 border-t pt-6 border-gray-100'>
                            <div className='w-12 h-12 bg-black text-white flex items-center justify-center rounded-full font-bold text-xl'>
                                {item.name.charAt(0)}
                            </div>
                            <div>
                                <h5 className='text-gray-900 font-bold'>{item.name}</h5>
                                <p className='text-gray-400 text-xs tracking-widest'>{item.role}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            
            <div className='mt-16 flex flex-col items-center justify-center gap-4 text-center'>
                <p className='text-gray-400 text-sm'>Join over 10,000+ happy customers</p>
                <div className='flex -space-x-4'>
                    {[...Array(6)].map((_, i) => (
                        <div key={i} className={`w-12 h-12 rounded-full border-4 border-gray-50 flex items-center justify-center text-white font-bold text-xs bg-slate-${(i + 1) * 100}`}>
                            {i + 1}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Testimonials
