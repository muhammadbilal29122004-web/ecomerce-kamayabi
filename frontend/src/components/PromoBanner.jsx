import React from 'react'
import promoImg from '../assets/promo_banner.png'
import { useHomeContent } from '../context/HomeContentContext'

const PromoBanner = () => {
    const { promoBannerUrl } = useHomeContent()
    const src = promoBannerUrl || promoImg
    return (
        <div className='relative my-12 sm:my-20 h-[min(58vw,280px)] min-h-[240px] max-h-[320px] w-full overflow-hidden rounded-2xl bg-gradient-to-br from-emerald-900 via-emerald-800 to-emerald-950 sm:h-[min(42vh,420px)] sm:max-h-none sm:min-h-[360px] md:rounded-3xl lg:h-[460px]'>
            <img 
                src={src} 
                alt="Promo Banner" 
                className='w-full h-full object-cover opacity-60 hover:scale-105 transition-transform duration-[2000ms]'
            />
            <div className='absolute inset-0 flex flex-col items-center justify-center p-10 text-center text-white'>
                <h4 className='text-sm sm:text-lg tracking-[0.4em] font-medium mb-4 animate-pulse'>ROHANI COLLECTION</h4>
                <h1 className='text-4xl sm:text-7xl font-bold uppercase tracking-tight mb-8'>
                    KAMAYABI <br /> <span className='text-transparent border-b-2 border-white' style={{ WebkitTextStroke: '1px white' }}>ROHANI MARKAZ</span>
                </h1>
                <p className='max-w-2xl text-gray-300 text-lg sm:text-xl mb-12 hidden sm:block'>
                    Paak Surah, Naqsh, Taveez, Loh aur rohani items ka khaas intikhab.
                    Asaliyat, adab, aur khuloos ke sath aap tak pohanchaya jata hai.
                </p>
            </div>
            <div className='absolute top-10 right-10 flex gap-4 text-white opacity-40 text-xs tracking-widest uppercase hidden lg:flex'>
                <span>SINCE 2026</span>
                <span>•</span>
                <span>KAMAYABI ROHANI MARKAZ</span>
            </div>
        </div>
    )
}

export default PromoBanner
