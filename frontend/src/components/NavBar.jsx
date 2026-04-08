import React, { useContext, useState } from 'react'
import { assets } from '../assets/assets'
import { Link, NavLink } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext';
import { encodeCategoryPath } from '../utils/category';

const NavBar = () => {
    const [visible, setVisible] = useState(false);
    const { setShowSearch, getCartCount, navigate, token, setToken, setCartItems } = useContext(ShopContext);
    const navLinks = [
        { label: 'HOME', to: '/' },
        { label: 'JEWELRY', to: encodeCategoryPath('Jewelry') },
        { label: 'BEAUTY CORE', to: encodeCategoryPath('Beauty Core') },
        { label: 'HEALTH & CARE', to: encodeCategoryPath('Health & Care') },
        { label: 'FASHION & DESIGN', to: encodeCategoryPath('Fashion & Design') },
    ];

    const logout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('cartItems');
        setToken('');
        setCartItems({});
        navigate('/login');
    };

    return (
        <>
            <div className='sticky top-3 z-40 mb-3'>
                <div className='flex items-center justify-between rounded-2xl border border-white/70 bg-white/75 px-4 py-3 shadow-[0_12px_30px_rgba(15,23,42,0.12)] backdrop-blur-xl sm:px-6 sm:py-4'>
                    <Link to='/'>
                        <img src='/anmol logo.jpg' className='h-10 w-28 object-contain sm:h-12 sm:w-36' alt="Anmool" />
                    </Link>

                    <ul className='hidden items-center gap-2 rounded-full bg-gray-100/70 p-1.5 lg:flex'>
                        {navLinks.map((item) => (
                            <li key={item.label}>
                                <NavLink
                                    to={item.to}
                                    className={({ isActive }) =>
                                        `rounded-full px-4 py-2 text-[11px] font-semibold tracking-wider transition-all duration-300 ${
                                            isActive
                                                ? 'bg-black text-white shadow-md'
                                                : 'text-gray-700 hover:bg-white hover:text-black'
                                        }`
                                    }
                                >
                                    {item.label}
                                </NavLink>
                            </li>
                        ))}
                    </ul>

                    <div className='flex items-center gap-2 sm:gap-3'>
                        <button
                            onClick={() => setShowSearch(true)}
                            className='flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-700 shadow-sm transition-colors hover:border-gray-300 hover:bg-gray-100'
                            aria-label='Search Products'
                        >
                            <img src={assets.search_icon} className='w-4' alt="Search Products" />
                        </button>

                        <div className='relative group'>
                            <button
                                onClick={() => !token && navigate('/login')}
                                className='flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-700 shadow-sm transition-colors hover:border-gray-300 hover:bg-gray-100'
                                aria-label='Your Profile'
                            >
                                <img src={assets.profile_icon} className='w-4' alt="Your Profile" />
                            </button>
                            {token && (
                                <div className='absolute right-0 z-50 hidden pt-3 group-hover:block'>
                                    <div className='w-40 rounded-xl border border-gray-100 bg-white p-2 text-sm text-gray-600 shadow-xl'>
                                        <p onClick={() => navigate('/orders')} className='cursor-pointer rounded-lg px-3 py-2 transition-colors hover:bg-gray-100 hover:text-black'>Orders</p>
                                        <p onClick={logout} className='cursor-pointer rounded-lg px-3 py-2 transition-colors hover:bg-gray-100 hover:text-black'>Logout</p>
                                    </div>
                                </div>
                            )}
                        </div>

                        <Link to='/cart' className='relative flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-700 shadow-sm transition-colors hover:border-gray-300 hover:bg-gray-100'>
                            <img src={assets.cart_icon} className='w-4' alt="Cart" />
                            <p className='absolute -right-1 -bottom-1 flex h-4 w-4 items-center justify-center rounded-full bg-black text-[8px] text-white'>{getCartCount()}</p>
                        </Link>

                        <button
                            onClick={() => setVisible(true)}
                            className='flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-white shadow-sm transition-colors hover:border-gray-300 hover:bg-gray-100 lg:hidden'
                            aria-label='Open Menu'
                        >
                            <img src={assets.menu_icon} className='w-4' alt="Menu Icon" />
                        </button>
                    </div>
                </div>
            </div>

            <div className={`fixed top-0 right-0 bottom-0 z-50 bg-white transition-all duration-300 ease-in-out ${visible ? 'w-[82%] sm:w-[420px]' : 'w-0'} overflow-hidden shadow-2xl`}>
                <div className='flex h-full flex-col text-gray-700'>
                    <div className='flex items-center justify-between border-b bg-gray-50 px-6 py-5'>
                        <p className='text-sm font-semibold tracking-[0.2em] text-gray-500'>ANMOOL MENU</p>
                        <button onClick={() => setVisible(false)} className='rounded-full border border-gray-200 p-2' aria-label='Close Menu'>
                            <img src={assets.dropdown_icon} className='h-4 rotate-180' alt="Dropdown" />
                        </button>
                    </div>
                    <div className='flex flex-col gap-2 p-4'>
                        {navLinks.map((item) => (
                            <NavLink
                                key={item.label}
                                onClick={() => setVisible(false)}
                                className={({ isActive }) =>
                                    `rounded-xl px-4 py-3 text-sm font-semibold tracking-wide transition-all ${
                                        isActive ? 'bg-black text-white' : 'bg-gray-50 text-gray-700 hover:bg-gray-100'
                                    }`
                                }
                                to={item.to}
                            >
                                {item.label}
                            </NavLink>
                        ))}
                        {token && (
                            <p onClick={logout} className='cursor-pointer rounded-xl bg-red-50 px-4 py-3 text-sm font-semibold tracking-wide text-red-600 transition-colors hover:bg-red-100'>LOGOUT</p>
                        )}
                    </div>
                    <div className='mt-auto p-8 text-center opacity-40'>
                        <img src='/anmol logo.jpg' className='mx-auto w-24 object-contain grayscale' alt="Anmool" />
                        <p className='mt-3 text-[10px] tracking-widest'>SINCE 2026</p>
                    </div>
                </div>
            </div>

            {visible && (
                <div
                    onClick={() => setVisible(false)}
                    className='fixed inset-0 z-40 bg-black/45 backdrop-blur-sm transition-opacity duration-300'
                />
            )}
        </>
    );
};

export default NavBar;
