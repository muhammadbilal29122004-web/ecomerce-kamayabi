import React from 'react'
import { Link } from 'react-router-dom'
import { navBarLinks } from '../config/navCategoryShowcase'

const displayCategoryLabel = (label) => {
    const lower = label.toLowerCase()
    if (lower === 'cara') return 'Cara'
    if (lower === 'ring') return 'Ring'
    if (lower === 'stone') return 'Stone'
    return label
}

const Footer = () => {
    return (
        <footer className='mt-24 w-full overflow-hidden rounded-t-[2.5rem] border border-emerald-100/80 bg-gradient-to-b from-emerald-50 via-emerald-50/95 to-emerald-100/50 shadow-[0_-8px_40px_rgba(6,78,59,0.06)]'>
            <div className='mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8'>
                <div className='grid gap-12 lg:grid-cols-12 lg:gap-10'>
                    {/* Brand */}
                    <div className='lg:col-span-5'>
                        <Link to='/' className='inline-block'>
                            <p className='mb-5 text-xl font-bold tracking-[0.28em] text-emerald-950'>
                                KAMAYABI
                            </p>
                        </Link>
                        <p className='max-w-md text-sm leading-relaxed text-emerald-900/75'>
                            Thank you for shopping with KAMAYABI. Paak Qurani Surah, naqsh, taveez,
                            istikhara aur muntakhib ashya — adab aur ehtimaam ke sath. Naye arrivals,
                            offers aur updates ke liye social par juden; koi sawal ho to WhatsApp ya
                            email par rabta karein — humari team aap ki madad ke liye hazir hai.
                        </p>
                    </div>

                    {/* Site + Categories */}
                    <div className='grid gap-10 sm:grid-cols-2 lg:col-span-4'>
                        <div>
                            <p className='mb-4 text-xs font-bold tracking-[0.35em] text-emerald-950'>
                                SITE
                            </p>
                            <ul className='flex flex-col gap-2.5 text-sm text-emerald-900/80'>
                                <li>
                                    <Link
                                        to='/'
                                        className='transition-colors hover:text-emerald-700 hover:underline'
                                    >
                                        Home
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to='/collection'
                                        className='transition-colors hover:text-emerald-700 hover:underline'
                                    >
                                        Collection
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to='/our-story'
                                        className='transition-colors hover:text-emerald-700 hover:underline'
                                    >
                                        Our Story
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <p className='mb-4 text-xs font-bold tracking-[0.35em] text-emerald-950'>
                                CATEGORIES
                            </p>
                            <ul className='flex flex-col gap-2.5 text-sm text-emerald-900/80'>
                                {navBarLinks.map((item) => (
                                    <li key={item.label}>
                                        <Link
                                            to={item.to}
                                            className='transition-colors hover:text-emerald-700 hover:underline'
                                        >
                                            {displayCategoryLabel(item.label)}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Contact */}
                    <div className='lg:col-span-3'>
                        <p className='mb-4 text-xs font-bold tracking-[0.35em] text-emerald-950'>
                            GET IN TOUCH
                        </p>
                        <ul className='mb-6 flex flex-col gap-3 text-sm text-emerald-900/80'>
                            <li>
                                <a
                                    href='https://wa.me/923113254286'
                                    target='_blank'
                                    rel='noopener noreferrer'
                                    className='inline-flex flex-wrap items-center gap-x-2 gap-y-1 transition-colors hover:text-emerald-700'
                                >
                                    <span className='font-medium text-emerald-950'>Your WhatsApp Number</span>
                                    <span>03113254286</span>
                                </a>
                            </li>
                            <li>
                                <p className='break-all'>
                                    contact.kamayabi@info.com
                                </p>
                            </li>
                        </ul>
                        <p className='mb-3 text-xs font-semibold uppercase tracking-wider text-emerald-900/60'>
                            Follow us
                        </p>
                        <div className='flex flex-wrap items-center gap-3 text-emerald-950'>
                            <span
                                aria-label='KAMAYABI on TikTok'
                                className='flex h-10 w-10 cursor-default items-center justify-center rounded-full border border-emerald-200/90 bg-white/80 text-emerald-900 shadow-sm'
                            >
                                <svg
                                    xmlns='http://www.w3.org/2000/svg'
                                    viewBox='0 0 24 24'
                                    className='h-5 w-5 fill-current'
                                >
                                    <path d='M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.33v13.26a2.9 2.9 0 1 1-2-2.76V9.1a6.23 6.23 0 1 0 5.33 6.16V8.58a8.16 8.16 0 0 0 4.77 1.52V6.69z' />
                                </svg>
                            </span>
                            <span
                                aria-label='KAMAYABI on Facebook'
                                className='flex h-10 w-10 cursor-default items-center justify-center rounded-full border border-emerald-200/90 bg-white/80 text-emerald-900 shadow-sm'
                            >
                                <svg
                                    xmlns='http://www.w3.org/2000/svg'
                                    viewBox='0 0 24 24'
                                    className='h-5 w-5 fill-current'
                                >
                                    <path d='M13.5 8H16V5h-2.5C10.46 5 9 6.79 9 9.67V12H6v3h3v7h3v-7h3l1-3h-4V9.67c0-.95.26-1.67 1.5-1.67z' />
                                </svg>
                            </span>
                            <span
                                aria-label='Email KAMAYABI'
                                className='flex h-10 w-10 cursor-default items-center justify-center rounded-full border border-emerald-200/90 bg-white/80 text-emerald-900 shadow-sm'
                            >
                                <svg
                                    xmlns='http://www.w3.org/2000/svg'
                                    viewBox='0 0 24 24'
                                    className='h-5 w-5 fill-current'
                                >
                                    <path d='M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm0 4-8 5L4 8V6l8 5 8-5v2z' />
                                </svg>
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            <div className='border-t border-emerald-200/70 bg-emerald-100/30'>
                <p className='py-5 text-center text-xs text-emerald-900/65 sm:text-sm'>
                    Copyright 2026 KAMAYABI. All rights reserved.
                </p>
            </div>
        </footer>
    )
}

export default Footer
