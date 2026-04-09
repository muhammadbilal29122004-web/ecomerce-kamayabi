import React from 'react'
import { Link } from 'react-router-dom'
import Title from './Title'
import { encodeCategoryPath } from '../utils/category'
import cosmeticsBanner from '../assets/cosmetics.png'
import jewelryBanner from '../assets/jewelry.png'
import medicineBanner from '../assets/medicine.png'
import clothBanner from '../assets/modern_hero.png'

const CategorySection = () => {
    const categories = [
        {
            name: 'Health & Care',
            banner: medicineBanner,
            path: encodeCategoryPath('Health & Care'),
            displayText: 'Trusted Health & Pharmacy',
            images: ['/medicine1.jpg', '/medicine2.jpg', '/medicine3.jpg', '/medicine 4.jpg']
        },
        {
            name: 'Beauty & Care',
            banner: cosmeticsBanner,
            path: encodeCategoryPath('Beauty & Care'),
            displayText: 'Modern Cosmetics & Beauty',
            images: ['/cosmetic1.jpg', '/cosmetic2.jpg', '/cosmetic3.jpg', '/cosmetic4.jpg']
        },
        {
            name: 'Fashion & Design',
            banner: clothBanner,
            path: encodeCategoryPath('Fashion & Design'),
            displayText: 'Premium Cloth Collection',
            images: ['/cloth1.jpg', '/cloth2.jpg', '/cloth3.jpg', '/cloth4.jpg']
        },
        {
            name: 'Jewellery',
            banner: jewelryBanner,
            path: encodeCategoryPath('Jewellery'),
            displayText: 'Exclusive Jewellery Collection',
            images: ['/jwelry1.jpg', '/jwelry2.jpg', '/jwelry3.jpg', '/jwelry4.jpg']
        }
    ]

    return (
        <div className='my-20 space-y-24 px-4 sm:px-0'>
            <div className='text-3xl text-center py-8'>
                <Title text1={'SHOP BY'} text2={'CATEGORY'} />
                <p className='w-3/4 m-auto text-xs text-gray-600 sm:text-sm md:text-base'>
                    Explore our wide variety of premium products across all categories.
                </p>
            </div>

            {categories.map((cat, index) => (
                <div key={index} className='space-y-8'>
                    {/* Category Banner */}
                    <div className='relative h-[250px] sm:h-[450px] overflow-hidden rounded-[2.5rem] shadow-2xl group transition-all duration-700 hover:shadow-black/20'>
                        <img 
                            src={cat.banner} 
                            alt={cat.name} 
                            className='w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105'
                        />
                        <div className='absolute inset-0 bg-gradient-to-r from-black/80 via-black/20 to-transparent flex flex-col justify-center p-8 sm:p-20 text-white'>
                            <h4 className='text-white/60 text-xs sm:text-sm tracking-[0.4em] font-medium mb-3 uppercase'>{cat.displayText}</h4>
                            <h2 className='text-4xl sm:text-7xl font-bold mb-8 italic tracking-tight'>
                                {cat.name}
                            </h2>
                            <Link to={cat.path}>
                                <button className='w-fit px-10 py-4 bg-white text-black text-sm font-bold rounded-full hover:bg-gray-200 transition-all duration-300 transform hover:-translate-y-1 shadow-lg tracking-widest'>
                                    EXPLORE MORE
                                </button>
                            </Link>
                        </div>
                    </div>

                    {/* Category Product Grid (Manual Images) */}
                    <div className='grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6'>
                        {cat.images.map((img, i) => (
                            <div key={i} className='group overflow-hidden rounded-3xl shadow-lg aspect-[3/4] relative bg-gray-100'>
                                <img 
                                    src={img} 
                                    alt={`${cat.name} product ${i+1}`} 
                                    className='w-full h-full object-cover transition-transform duration-700 group-hover:scale-110'
                                />
                                <div className='absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center'>
                                    <Link to={cat.path}>
                                        <button className='px-6 py-2 bg-white/90 backdrop-blur-md text-black text-[10px] font-bold rounded-full shadow-xl tracking-widest'>
                                            QUICK VIEW
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    )
}

export default CategorySection
