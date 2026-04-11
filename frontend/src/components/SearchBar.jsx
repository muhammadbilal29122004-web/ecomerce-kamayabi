import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import { assets } from '../assets/assets';
import { useLocation } from 'react-router-dom';

const SearchBar = () => {

    const {search, setSearch, showSearch, setShowSearch} = useContext(ShopContext);
    const [visible, setVisible] = useState(false);
    const location = useLocation();

    useEffect(() => {
        if (location.pathname.includes('collection')) {
            setVisible(true)
        } else {
            setVisible(false)
        }
    }, [location]);

  return showSearch && visible ? (
    <div className='border-b border-t border-emerald-100 bg-white/90 text-center'>
        <div className='mx-3 my-5 inline-flex w-3/4 items-center justify-center rounded-full border border-emerald-200 bg-emerald-50/50 px-5 py-2 sm:w-1/2'>
            <input 
                value={search} 
                onChange={(e) => setSearch(e.target.value)} 
                className='flex-1 text-sm outline-none bg-inherit' 
                type="text" placeholder='Search...' 
            />
            <img className='w-4' src={assets.search_icon} alt="Search" />
        </div>
        <img 
            onClick={() => setShowSearch(false)} 
            className='inline w-3 cursor-pointer' 
            src={assets.cross_icon} alt="Close" 
        />
    </div>
  ) : null
}

export default SearchBar
