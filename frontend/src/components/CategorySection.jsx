import React from 'react'
import { Link } from 'react-router-dom'
import Title from './Title'
import HorizontalCardRow from './HorizontalCardRow'
import { useHomeContent } from '../context/HomeContentContext'

const CategorySection = () => {
    const { mergedShowcase } = useHomeContent()
    return (
        <div className='my-20 space-y-24 px-4 sm:px-0'>
            <div className='text-3xl text-center py-8'>
                <Title text1={'KAMAYABI'} text2={'ROOHANI ILAAJ'} />
                <p className='w-3/4 m-auto text-xs text-gray-600 sm:text-sm md:text-base leading-relaxed'>
                    Har category alag zariya hai — Surah, Naqsh, Taweez, Istikhara, Loh, Cara, ring aur pathar. Neeche
                    muntakhib tasaweer aur banner ke sath asaan tarteeb, jaisa navbar mein.
                </p>
            </div>

            {mergedShowcase.map((cat) => (
                <div key={cat.label} className='space-y-8'>
                    <div className='relative h-[min(42vw,200px)] min-h-[168px] max-h-[220px] overflow-hidden rounded-2xl shadow-lg group transition-shadow duration-700 hover:shadow-xl sm:h-[min(38vh,380px)] sm:max-h-none sm:min-h-[280px] sm:rounded-[2.5rem] md:h-[420px]'>
                        <img
                            src={cat.banner}
                            alt={cat.bannerTitle}
                            className='w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105'
                        />
                        <div className='absolute inset-0 bg-gradient-to-r from-black/80 via-black/20 to-transparent flex flex-col justify-center p-5 sm:p-12 md:p-20 text-white'>
                            <h4 className='text-white/60 text-[10px] sm:text-sm tracking-[0.35em] font-medium mb-2 sm:mb-3 uppercase'>
                                {cat.displayText}
                            </h4>
                            <h2 className='text-2xl sm:text-5xl md:text-7xl font-bold mb-4 sm:mb-8 italic tracking-tight leading-tight'>
                                {cat.bannerTitle}
                            </h2>
                            <Link to={cat.path}>
                                <button className='w-fit px-6 py-2.5 sm:px-10 sm:py-4 bg-white text-black text-xs sm:text-sm font-bold rounded-full hover:bg-gray-200 transition-all duration-300 transform hover:-translate-y-1 shadow-md sm:shadow-lg tracking-widest'>
                                    EXPLORE MORE
                                </button>
                            </Link>
                        </div>
                    </div>

                    <HorizontalCardRow gridClassName='md:grid md:grid-cols-2 lg:grid-cols-4 md:gap-4 md:gap-y-6'>
                        {cat.images.map((img, i) => (
                            <div
                                key={`${cat.label}-${i}`}
                                className='group relative aspect-[3/4] overflow-hidden rounded-2xl bg-gray-100 shadow-md sm:rounded-3xl sm:shadow-lg'
                            >
                                <img
                                    src={img}
                                    alt={`${cat.bannerTitle} ${i + 1}`}
                                    className='h-full w-full object-cover transition-transform duration-700 group-hover:scale-110'
                                />
                                <div className='absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100'>
                                    <Link to={cat.path}>
                                        <button className='rounded-full bg-white/90 px-6 py-2 text-[10px] font-bold tracking-widest text-black shadow-xl backdrop-blur-md'>
                                            QUICK VIEW
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </HorizontalCardRow>
                </div>
            ))}
        </div>
    )
}

export default CategorySection
