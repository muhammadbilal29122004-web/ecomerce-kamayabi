import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { encodeCategoryPath } from '../utils/category'
import { useHomeContent } from '../context/HomeContentContext'
import surahImg from '../assets/KAMAYABI/surrahbanner.png'
import lohImg from '../assets/KAMAYABI/loh.jpeg'
import stoneImg from '../assets/KAMAYABI/stone.jpg'
import taweezImg from '../assets/KAMAYABI/taweez.jpg'
import naqshImg from '../assets/KAMAYABI/naqsh.webp'
import ringSurahImg from '../assets/KAMAYABI/ring surah.jpg'
import istikharaImg from '../assets/KAMAYABI/istikhara.jpg'
import caraImg from '../assets/KAMAYABI/cara.jpg'

const HERO_SLIDES = [
    {
        imageKey: 'surah',
        title: 'Surah',
        highlight: 'Qurani mubarak',
        subtitle: 'Roohani taqat aur hifazat',
        description:
            'Mukhtalif Surah — paabandi aur ehtimaam ke sath. Apne liye ya apno ke liye barkat ka zariya.',
        image: surahImg,
        path: encodeCategoryPath('Surah'),
    },
    {
        imageKey: 'naqsh',
        title: 'Naqsh',
        highlight: 'Azeem o mubarak',
        subtitle: 'Dil se dua, kaam se asar',
        description:
            'Naqsh e mubarak jo aap ki khaas zarooriyat ke mutabiq tayar kiye jaate hain — adab aur ikhlaas ke sath.',
        image: naqshImg,
        path: encodeCategoryPath('Naqsh'),
    },
    {
        imageKey: 'taweez',
        title: 'Taweez',
        highlight: 'Hifazat ka silsila',
        subtitle: 'Aman aur sukoon ki khatir',
        description:
            'Taweez jo sunnat o adab ke daaire mein — ghar, safar aur dil ke liye hifazat ka ehsaas.',
        image: taweezImg,
        path: encodeCategoryPath('Taveez'),
    },
    {
        imageKey: 'istikhara',
        title: 'Istikhara',
        highlight: 'Raah numai',
        subtitle: 'Faisla karna ho to',
        description:
            'Allah ki marzi maaloom karne ka tareeqa — mushkil faislon mein sukoon e dil ke liye.',
        image: istikharaImg,
        path: encodeCategoryPath('Istikhara'),
    },
    {
        imageKey: 'loh',
        title: 'Loh',
        highlight: 'Qadeemi asaar',
        subtitle: 'Khaas aur mehnat se tayar',
        description:
            'Loh par mukhtalif aayaat o wazaif — sahi tareeqe aur ikhlaas ke sath pesh kiya jata hai.',
        image: lohImg,
        path: encodeCategoryPath('Loh'),
    },
    {
        imageKey: 'cara',
        title: 'cara',
        highlight: 'Apki pasand',
        subtitle: 'Khaas collection',
        description:
            'Jo aap dhoondh rahe hain — cara ki range mein dekhiye, quality aur itminaan ke sath.',
        image: caraImg,
        path: encodeCategoryPath('cara'),
    },
    {
        imageKey: 'ring',
        title: 'Ring',
        highlight: 'Surah ke sath',
        subtitle: 'Pehnne wala zeenat',
        description:
            'Angoothee jisme roohani fayedah aur style dono — mukhtalif design aur Surah ke sath.',
        image: ringSurahImg,
        path: encodeCategoryPath('ring'),
    },
    {
        imageKey: 'stone',
        title: 'Stone',
        highlight: 'Naga o pathar',
        subtitle: 'Fitrat se juda hua',
        description:
            'Asal pathar aur naga — jo sadaqat aur sahi pehchaan ke sath aap tak pohanchte hain.',
        image: stoneImg,
        path: encodeCategoryPath('stone'),
    },
]

const SLIDE_INTERVAL_MS = 5500

const Hero = () => {
    const { heroUrls } = useHomeContent()
    const [currentSlide, setCurrentSlide] = useState(0)

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) =>
                prev === HERO_SLIDES.length - 1 ? 0 : prev + 1
            )
        }, SLIDE_INTERVAL_MS)
        return () => clearInterval(timer)
    }, [])

    return (
        <div className='relative my-4 h-[min(72vw,340px)] min-h-[300px] max-h-[380px] overflow-hidden rounded-2xl bg-white shadow-[0_12px_40px_rgba(6,78,59,0.1)] sm:my-5 sm:h-[min(52vh,520px)] sm:max-h-none sm:min-h-[420px] sm:rounded-[2.5rem]'>
            {HERO_SLIDES.map((slide, index) => {
                const slideSrc = heroUrls[slide.imageKey] || slide.image
                return (
                <div
                    key={slide.title + index}
                    className={`absolute inset-0 flex flex-col transition-all duration-1000 ease-in-out sm:flex-row ${
                        index === currentSlide
                            ? 'z-10 translate-x-0 opacity-100'
                            : 'z-0 translate-x-full opacity-0'
                    }`}
                >
                    <div className='z-20 flex w-full items-center justify-center bg-white/70 p-4 pb-10 backdrop-blur-md sm:w-1/2 sm:bg-transparent sm:p-20 sm:pb-40 sm:backdrop-blur-none'>
                        <div className='max-w-lg text-center text-emerald-950 sm:text-left'>
                            <div className='mb-4 flex items-center justify-center gap-2 sm:justify-start'>
                                <p className='h-[2px] w-8 bg-emerald-700 md:w-11'></p>
                                <p className='text-[10px] font-medium tracking-wide md:text-sm'>
                                    {slide.subtitle}
                                </p>
                            </div>
                            <h1 className='mb-3 font-serif text-[2rem] leading-tight font-bold italic sm:mb-6 lg:text-6xl'>
                                {slide.title.split(' ')[0]} <br />
                                <span
                                    className='text-transparent'
                                    style={{
                                        WebkitTextStroke: '1.2px #065f46',
                                    }}
                                >
                                    {slide.highlight}
                                </span>
                            </h1>
                            <p className='mb-5 px-3 text-xs leading-relaxed text-emerald-900/70 sm:mb-8 sm:px-0 md:text-base'>
                                {slide.description}
                            </p>
                            <Link to={slide.path}>
                                <button
                                    type='button'
                                    className='rounded-full bg-emerald-700 px-8 py-3 text-xs font-bold tracking-wide text-white shadow-lg shadow-emerald-900/20 transition-all duration-300 hover:-translate-y-1 hover:bg-emerald-800 sm:px-10 sm:py-4 sm:text-sm'
                                >
                                    Ab dekhein
                                </button>
                            </Link>
                        </div>
                    </div>

                    <div className='absolute top-0 right-0 z-10 h-[40%] w-full opacity-35 sm:relative sm:h-full sm:w-1/2 sm:opacity-100'>
                        <img
                            className='h-full w-full object-cover'
                            src={slideSrc}
                            alt={slide.title}
                        />
                        <div className='absolute inset-0 bg-gradient-to-b from-white/5 via-white/35 to-white/85 sm:hidden'></div>
                    </div>
                </div>
                )
            })}

            <div className='absolute bottom-6 left-1/2 z-30 flex -translate-x-1/2 gap-2 rounded-full bg-white/95 px-3 py-2 shadow-md shadow-emerald-900/15 backdrop-blur-md sm:bottom-10 sm:gap-3'>
                {HERO_SLIDES.map((slide, index) => (
                    <button
                        key={slide.title}
                        type='button'
                        aria-label={`Slide ${index + 1}`}
                        onClick={() => setCurrentSlide(index)}
                        className={`h-2 rounded-full transition-all duration-300 sm:h-3 ${
                            index === currentSlide
                                ? 'w-6 bg-emerald-600 sm:w-8'
                                : 'w-2 bg-emerald-200 sm:w-3'
                        }`}
                    />
                ))}
            </div>
        </div>
    )
}

export default Hero
