import React from 'react'
import { Link } from 'react-router-dom'
import { normalizeCategory } from '../utils/category'

const Footer = () => {
  return (
    <div>
        <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
            <div>
                <Link to='/'>
                    <p className='mb-5 text-xl font-bold tracking-[0.25em] text-gray-900'>ANMOOL</p>
                </Link>
                <p className='w-full text-gray-600 md:w-2/3'>Thank you for shopping with ANMOOL! We're dedicated to bringing you the latest trends and top-quality products. Follow us on social media for updates on new arrivals, exclusive offers, and more. If you have any questions or need assistance, our friendly customer support team is here to help. Subscribe to our newsletter for special discounts and be the first to know about our latest promotions. Your style journey starts here—let's make it unforgettable!</p>
            </div>

            <div>
                <p className='mb-5 text-xl font-medium'>COMPANY</p>
                <ul className='flex flex-col gap-1 text-gray-600'>
                    <Link to='/'>
                        <li>Home</li>
                    </Link>
                    <Link to={`/collection?category=${encodeURIComponent(normalizeCategory('Jewellery'))}`}>
                        <li>Jewellery</li>
                    </Link>
                    <Link to={`/collection?category=${encodeURIComponent(normalizeCategory('Beauty & Care'))}`}>
                        <li>Beauty & Care</li>
                    </Link>
                    <Link to={`/collection?category=${encodeURIComponent(normalizeCategory('Health & Care'))}`}>
                        <li>Health & Care</li>
                    </Link>
                    <Link to={`/collection?category=${encodeURIComponent(normalizeCategory('Fashion & Design'))}`}>
                        <li>Fashion & Design</li>
                    </Link>
                </ul>
            </div>

            <div>
                <p className='mb-5 text-xl font-medium'>GET IN TOUCH</p>
                <ul className='flex flex-col gap-1 text-gray-600'>
                    <li>
                        <a
                            href='https://wa.me/923223232164'
                            target='_blank'
                            rel='noopener noreferrer'
                            className='hover:text-green-600 transition-colors'
                        >
                            +92 322 3232164
                        </a>
                    </li>
                    <li>contact.anmool@info.com</li>
                </ul>
                <div className='mt-4 flex items-center gap-3 text-gray-700'>
                    <a
                        href='https://www.tiktok.com/@anmool.org?_r=1&_t=ZS-95OukFdv03I'
                        target='_blank'
                        rel='noopener noreferrer'
                        aria-label='ANMOOL TikTok'
                        className='rounded-full border border-gray-300 p-2 transition-colors hover:bg-gray-100'
                    >
                        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' className='h-5 w-5 fill-current'>
                            <path d='M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.33v13.26a2.9 2.9 0 1 1-2-2.76V9.1a6.23 6.23 0 1 0 5.33 6.16V8.58a8.16 8.16 0 0 0 4.77 1.52V6.69z' />
                        </svg>
                    </a>
                    <a
                        href='https://www.facebook.com/share/18NVy8LXAg/'
                        target='_blank'
                        rel='noopener noreferrer'
                        aria-label='ANMOOL Facebook'
                        className='rounded-full border border-gray-300 p-2 transition-colors hover:bg-gray-100'
                    >
                        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' className='h-5 w-5 fill-current'>
                            <path d='M13.5 8H16V5h-2.5C10.46 5 9 6.79 9 9.67V12H6v3h3v7h3v-7h3l1-3h-4V9.67c0-.95.26-1.67 1.5-1.67z' />
                        </svg>
                    </a>
                    <a
                        href='mailto:khancool1122@gmail.com'
                        aria-label='Email ANMOOL'
                        className='rounded-full border border-gray-300 p-2 transition-colors hover:bg-gray-100'
                    >
                        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' className='h-5 w-5 fill-current'>
                            <path d='M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm0 4-8 5L4 8V6l8 5 8-5v2z' />
                        </svg>
                    </a>
                </div>
            </div>
        </div>
        <div>
            <hr />
            <p className='py-5 text-sm text-center'>Copyright 2026 ANMOOL. All rights reserved.</p>
        </div>
    </div>
  )
}

export default Footer
