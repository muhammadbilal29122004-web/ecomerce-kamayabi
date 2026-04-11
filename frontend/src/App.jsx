import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Collection from './pages/Collection'
import CategoryPage from './pages/CategoryPage'
import OurStory from './pages/OurStory'
import Product from './pages/Product'
import Cart from './pages/Cart'
import Login from './pages/Login'
import PlaceOrder from './pages/PlaceOrder'
import Orders from './pages/Orders'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import SearchBar from './components/SearchBar'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const RIBBON_ITEMS = [
  'TAVEEZAT-E-QURANI',
  'ROOHANI ILAJ',
  'MANPASAND SHADI',
  'KAROBARI BANDISH',
  'AULAD KA MASLA',
  'KALA JADU SE HIFAZAT',
  'ISTIKHARA-O-MUSHWARA',
  'KAMAYABI',
]

const RibbonTrack = ({ trackKey }) => (
  <div className='flex shrink-0 items-center gap-x-4 px-8 py-2.5 text-[10px] font-semibold uppercase tracking-[0.22em] text-white sm:gap-x-6 sm:px-12 sm:text-xs sm:tracking-[0.28em]'>
    {RIBBON_ITEMS.map((label, i) => (
      <React.Fragment key={`${trackKey}-${i}`}>
        {i > 0 ? (
          <span className='select-none text-emerald-200/90' aria-hidden>
            ◇
          </span>
        ) : null}
        <span className='whitespace-nowrap'>{label}</span>
      </React.Fragment>
    ))}
  </div>
)

const App = () => {
  return (
    <>
      <ToastContainer />
      {/* Full-bleed top ribbon (outside horizontal padding) */}
      <div className='w-full bg-emerald-900 text-white shadow-[inset_0_-1px_0_rgba(0,0,0,0.15)]'>
        <div className='overflow-hidden'>
          <div className='flex w-max animate-marquee'>
            <RibbonTrack trackKey='a' />
            <RibbonTrack trackKey='b' />
          </div>
        </div>
      </div>
      <div className='min-h-screen bg-gradient-to-b from-white via-emerald-50/50 to-emerald-50 px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>
        <NavBar />
        <SearchBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/collection' element={<Collection />} />
          <Route path='/category/:categoryName' element={<CategoryPage />} />
          <Route path='/our-story' element={<OurStory />} />
          <Route path='/product/:productId' element={<Product />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/login' element={<Login />} />
          <Route path='/place-order' element={<PlaceOrder />} />
          <Route path='/orders' element={<Orders />} />
        </Routes>
        <Footer />
      </div>
    </>
  )
}

export default App
