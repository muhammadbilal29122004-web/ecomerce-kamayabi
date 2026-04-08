import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import clothImg from '../assets/modern_hero.png'
import jewelryImg from '../assets/jewelry.png'
import cosmeticsImg from '../assets/cosmetics.png'
import medicineImg from '../assets/medicine.png'
import { normalizeCategory } from '../utils/category'

const Hero = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const slides = [
        {
            title: "Modern Fashion",
            subtitle: "OUR BESTSELLERS",
            highlight: "Latest Arrivals",
            description: "Curated collections of premium cloth and fashion essentials. Designed for those who appreciate quality.",
            image: clothImg,
            path: `/collection?category=${encodeURIComponent(normalizeCategory("Cloth"))}`
        },
        {
            title: "Luxury Jewelry",
            subtitle: "EXQUISITE PIECES",
            highlight: "Timeless Jewelry",
            description: "Discover our wide range of elegant and luxurious jewelry designed to make you shine.",
            image: jewelryImg,
            path: `/collection?category=${encodeURIComponent(normalizeCategory("Jewelry"))}`
        },
        {
            title: "Beauty Core",
            subtitle: "BEAUTY DEFINED",
            highlight: "Nature's Palette",
            description: "Enhance your natural beauty with our exclusive collection of high-end cosmetics.",
            image: cosmeticsImg,
            path: `/collection?category=${encodeURIComponent(normalizeCategory("Cosmetics"))}`
        },
        {
            title: "Health & Care",
            subtitle: "YOUR HEALTH FIRST",
            highlight: "Trusted Medicine",
            description: "Reliable and high-quality pharmaceutical products for your family's health and wellness.",
            image: medicineImg,
            path: `/collection?category=${encodeURIComponent(normalizeCategory("Medicine"))}`
        }
    ];

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
        }, 5000);
        return () => clearInterval(timer);
    }, [slides.length]);

    return (
        <div className='relative overflow-hidden rounded-[2rem] sm:rounded-[2.5rem] bg-gray-100 my-5 shadow-2xl h-[460px] sm:h-[600px]'>
            {slides.map((slide, index) => (
                <div 
                    key={index} 
                    className={`absolute inset-0 transition-all duration-1000 ease-in-out flex flex-col sm:flex-row ${index === currentSlide ? 'opacity-100 z-10 translate-x-0' : 'opacity-0 z-0 translate-x-full'}`}
                >
                    {/* Hero Left Side */}
                    <div className='w-full sm:w-1/2 flex items-center justify-center p-5 sm:p-20 pb-16 sm:pb-40 bg-white/70 sm:bg-transparent backdrop-blur-md sm:backdrop-blur-none z-20'>
                        <div className='text-[#414141] max-w-lg text-center sm:text-left'>
                            <div className='flex items-center justify-center sm:justify-start gap-2 mb-4'>
                                <p className='w-8 md:w-11 h-[2px] bg-[#414141]'></p>
                                <p className='font-medium text-[10px] md:text-base tracking-widest uppercase'>{slide.subtitle}</p>
                            </div>
                            <h1 className='text-[2rem] lg:text-6xl leading-tight font-serif font-bold italic mb-3 sm:mb-6'>
                                {slide.title.split(' ')[0]} <br />
                                <span className='text-transparent' style={{ WebkitTextStroke: '1.2px #414141' }}>{slide.highlight}</span>
                            </h1>
                            <p className='text-gray-600 mb-5 sm:mb-8 text-xs md:text-base leading-relaxed px-3 sm:px-0'>
                                {slide.description}
                            </p>
                            <Link to={slide.path}>
                                <button className='px-8 sm:px-10 py-3 sm:py-4 bg-black text-white text-xs sm:text-sm font-bold rounded-full hover:bg-gray-800 transition-all duration-300 transform hover:-translate-y-1 shadow-lg tracking-widest'>
                                    SHOP NOW
                                </button>
                            </Link>
                        </div>
                    </div>
                    
                    {/* Hero Right Side */}
                    <div className='w-full sm:w-1/2 h-[48%] sm:h-full absolute sm:relative top-0 right-0 z-10 opacity-35 sm:opacity-100'>
                        <img 
                            className='w-full h-full object-cover' 
                            src={slide.image} 
                            alt={slide.title} 
                        />
                        <div className='absolute inset-0 bg-gradient-to-b from-white/5 via-white/35 to-white/85 sm:hidden'></div>
                    </div>
                </div>
            ))}

            {/* Slider Controls */}
            <div className='absolute bottom-6 sm:bottom-10 left-1/2 -translate-x-1/2 flex gap-3 sm:gap-4 z-30 bg-white/80 backdrop-blur-md px-3 py-2 rounded-full shadow-md'>
                {slides.map((_, index) => (
                    <button 
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${index === currentSlide ? 'bg-black w-6 sm:w-8' : 'bg-gray-400'}`}
                    />
                ))}
            </div>
        </div>
    )
}

export default Hero
