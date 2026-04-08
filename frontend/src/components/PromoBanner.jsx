import React from 'react'
import promoImg from '../assets/promo_banner.png'

const PromoBanner = () => {
    return (
        <div className='relative w-full h-[500px] my-20 overflow-hidden bg-black rounded-3xl'>
            <img 
                src={promoImg} 
                alt="Promo Banner" 
                className='w-full h-full object-cover opacity-60 hover:scale-105 transition-transform duration-[2000ms]'
            />
            <div className='absolute inset-0 flex flex-col items-center justify-center p-10 text-center text-white'>
                <h4 className='text-sm sm:text-lg tracking-[0.4em] font-medium mb-4 animate-pulse'>NEW ARRIVALS</h4>
                <h1 className='text-4xl sm:text-7xl font-bold uppercase tracking-tight mb-8'>
                    The Summer <br /> <span className='text-transparent border-b-2 border-white' style={{ WebkitTextStroke: '1px white' }}>Collection</span>
                </h1>
                <p className='max-w-2xl text-gray-300 text-lg sm:text-xl mb-12 hidden sm:block'>
                    Discover our most anticipated release of the year. 
                    Meticulously crafted for the highest standards of luxury and performance.
                </p>
                <div className='flex gap-4 flex-col sm:flex-row'>
                    <button className='px-12 py-4 bg-white text-black text-sm font-bold rounded-full hover:bg-gray-200 transition-all duration-300 transform hover:scale-105'>
                        SHOP THE COLLECTION
                    </button>
                    <button className='px-12 py-4 border border-white text-white text-sm font-bold rounded-full hover:bg-white/10 transition-all duration-300 transform hover:scale-105'>
                        EXPLORE LOOKBOOK
                    </button>
                </div>
            </div>
            <div className='absolute top-10 right-10 flex gap-4 text-white opacity-40 text-xs tracking-widest uppercase hidden lg:flex'>
                <span>SINCE 2026</span>
                <span>•</span>
                <span>ANMOOL ORIGINAL</span>
            </div>
        </div>
    )
}

export default PromoBanner
