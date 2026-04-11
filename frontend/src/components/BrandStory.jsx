import React from 'react'
import { Link } from 'react-router-dom'
import brandStoryImg from '../assets/brand_story.png'
import { useHomeContent } from '../context/HomeContentContext'

const BrandStory = () => {
    const { brandStoryUrl } = useHomeContent()
    const src = brandStoryUrl || brandStoryImg
    return (
        <div className='flex flex-col md:flex-row items-center justify-between gap-10 my-20 px-4 sm:px-0'>
            <div className='w-full md:w-1/2 overflow-hidden rounded-2xl shadow-2xl'>
                <img 
                    src={src} 
                    alt="Our Brand Story" 
                    className='w-full h-full object-cover hover:scale-105 transition-transform duration-1000'
                />
            </div>
            <div className='w-full md:w-1/2 flex flex-col gap-6'>
                <h4 className='text-gray-400 text-sm tracking-[0.3em] font-medium'>THE KAMAYABI LEGACY</h4>
                <h2 className='text-3xl sm:text-5xl font-bold text-gray-800 leading-tight'>
                    Redefining Elegance <br /> For The Modern World
                </h2>
                <div className='h-1 w-20 bg-emerald-600'></div>
                <p className='text-gray-600 leading-relaxed text-lg'>
                    Founded on the principles of quality and timeless style, KAMAYABI has been a
                    pioneer in bringing the finest collections to our customers. Our journey 
                    started with a simple vision: to provide premium products that blend tradition 
                    with modern craftsmanship. 
                </p>
                <p className='text-gray-500 leading-relaxed'>
                    Every piece we curate tells a story of passion and dedication. Whether it's 
                    our exquisite jewelry, premium cosmetics, or essential medicine, each item 
                    undergoes rigorous quality checks to ensure you receive nothing but the best.
                </p>
                <Link to='/our-story'>
                    <button className='w-fit transform rounded-full bg-emerald-700 px-10 py-4 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-emerald-800'>
                        READ OUR FULL STORY
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default BrandStory
