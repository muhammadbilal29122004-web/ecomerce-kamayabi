import React, { useRef } from 'react'
import Title from './Title'

const Testimonials = () => {
    const scrollRef = useRef(null)

    const testimonials = [
        {
            name: 'Fatima Noor',
            role: 'Homemaker, Lahore',
            text: 'I ordered a taweez and a Surah Yaseen ring. The packaging was careful and the items matched exactly what I saw on the site. WhatsApp replies were quick and polite — thank you, KAMAYABI.',
            rating: 5
        },
        {
            name: 'Bilal Raza',
            role: 'Software Engineer, Dubai',
            text: 'I live abroad and was nervous about ordering online. They shared clear photos, answered every question on WhatsApp, and shipping was faster than I expected. The naqsh I received feels authentic and beautifully finished.',
            rating: 5
        },
        {
            name: 'Ayesha Siddiqui',
            role: 'School Teacher, Karachi',
            text: 'I needed help choosing something after istikhara and did not want to be rushed. The team took their time, explained the options calmly, and I felt respected from start to finish. Very happy with my purchase.',
            rating: 5
        },
        {
            name: 'Hassan Tariq',
            role: 'Small business owner',
            text: 'I had two bad experiences elsewhere before finding KAMAYABI. Here I got both quality and honesty. The stone and loh pieces were clean, well described, and exactly as promised. I will order again.',
            rating: 5
        }
    ]

    const scrollByDir = (dir) => {
        const el = scrollRef.current
        if (!el) return
        const card = el.querySelector('[data-testimonial-card]')
        const gap = 24
        const step = (card?.offsetWidth ?? 320) + gap
        el.scrollBy({ left: dir * step, behavior: 'smooth' })
    }

    const stackColors = [
        'bg-emerald-700',
        'bg-emerald-600',
        'bg-teal-600',
        'bg-slate-600',
        'bg-emerald-800',
        'bg-slate-500'
    ]

    return (
        <section
            className='my-16 sm:my-20 rounded-[2rem] sm:rounded-[3rem] bg-gradient-to-b from-gray-50 to-white px-4 py-12 sm:px-8 sm:py-16 md:px-12 md:py-20 shadow-inner'
            aria-labelledby='testimonials-heading'
        >
            <div className='mx-auto max-w-7xl'>
                <div className='text-center'>
                    <Title text1={'CUSTOMER'} text2={'EXPERIENCE'} />
                    <p
                        id='testimonials-heading'
                        className='mx-auto max-w-2xl text-sm text-gray-600 sm:text-base leading-relaxed'
                    >
                        KAMAYABI ROHANI MARKAZ ke customers ka tajurba - asaliyat, rehnumai, aur
                        WhatsApp par tez support ke sath.
                    </p>
                </div>

                <div className='mt-10 flex items-center justify-end gap-2 md:hidden'>
                    <button
                        type='button'
                        onClick={() => scrollByDir(-1)}
                        className='rounded-full bg-white px-3 py-1.5 text-sm font-medium text-emerald-900 shadow-md active:scale-95 transition'
                        aria-label='Previous reviews'
                    >
                        ←
                    </button>
                    <button
                        type='button'
                        onClick={() => scrollByDir(1)}
                        className='rounded-full bg-white px-3 py-1.5 text-sm font-medium text-emerald-900 shadow-md active:scale-95 transition'
                        aria-label='Next reviews'
                    >
                        →
                    </button>
                </div>

                <div
                    ref={scrollRef}
                    className='mt-4 flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory md:grid md:grid-cols-2 lg:grid-cols-4 md:overflow-visible md:pb-0 md:snap-none -mx-1 px-1 md:mx-0 md:px-0'
                >
                    {testimonials.map((item, index) => (
                        <article
                            key={index}
                            data-testimonial-card
                            className='min-w-[min(100%,20rem)] sm:min-w-[22rem] md:min-w-0 snap-center shrink-0 md:snap-normal flex flex-col rounded-2xl bg-white p-6 shadow-lg shadow-gray-200/50 transition hover:shadow-xl hover:-translate-y-0.5 duration-300'
                        >
                            <div className='flex gap-0.5 text-amber-400 mb-4' aria-hidden>
                                {[...Array(item.rating)].map((_, i) => (
                                    <span key={i} className='text-base leading-none'>
                                        ★
                                    </span>
                                ))}
                            </div>
                            <blockquote className='flex-1'>
                                <p className='text-left text-gray-700 italic text-[0.95rem] sm:text-base leading-relaxed'>
                                    <span className='text-emerald-700/40 not-italic font-serif text-2xl leading-none mr-1'>
                                        “
                                    </span>
                                    {item.text}
                                    <span className='text-emerald-700/40 not-italic font-serif text-2xl leading-none ml-0.5'>
                                        ”
                                    </span>
                                </p>
                            </blockquote>
                            <div className='mt-6 flex items-center gap-3 pt-5'>
                                <div
                                    className='flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-emerald-800 text-lg font-bold text-white'
                                    aria-hidden
                                >
                                    {item.name.charAt(0)}
                                </div>
                                <div className='min-w-0 text-left'>
                                    <p className='font-bold text-emerald-900 truncate'>{item.name}</p>
                                    <p className='text-xs text-gray-500 tracking-wide'>{item.role}</p>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>

                <div className='mt-12 flex flex-col items-center gap-4 text-center'>
                    <p className='text-gray-500 text-sm'>Trusted by families across Pakistan and abroad</p>
                    <div className='flex -space-x-3' role='presentation'>
                        {stackColors.map((bg, i) => (
                            <div
                                key={i}
                                className={`flex h-11 w-11 items-center justify-center rounded-full text-[10px] font-bold text-white shadow-md ${bg}`}
                            >
                                {i + 1}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Testimonials
