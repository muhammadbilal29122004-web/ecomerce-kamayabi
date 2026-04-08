import React from 'react'
import Hero from '../components/Hero'
import CategorySection from '../components/CategorySection'
import Stats from '../components/Stats'
import LatestCollection from '../components/LatestCollection'
import BestSeller from '../components/BestSeller'
import BrandStory from '../components/BrandStory'
import PromoBanner from '../components/PromoBanner'
import Testimonials from '../components/Testimonials'
import WhyChooseUs from '../components/WhyChooseUs'
import ShoppingJourney from '../components/ShoppingJourney'
import OurPolicy from '../components/OurPolicy'
import NewsLetterBox from '../components/NewsLetterBox'

const Home = () => {
  return (
    <div className='relative overflow-hidden'>
      <div className='pointer-events-none absolute -top-24 -left-24 h-56 w-56 rounded-full bg-blue-100/40 blur-3xl'></div>
      <div className='pointer-events-none absolute top-1/3 -right-20 h-56 w-56 rounded-full bg-rose-100/40 blur-3xl'></div>
      <div className='pointer-events-none absolute bottom-16 left-1/4 h-40 w-40 rounded-full bg-amber-100/40 blur-3xl'></div>

      <Hero />
      <Stats />
      <CategorySection />
      <LatestCollection />
      <BrandStory />
      <PromoBanner />
      <BestSeller />
      <Testimonials />
      <WhyChooseUs />
      <ShoppingJourney />
      <OurPolicy />
      <NewsLetterBox />
    </div>
  )
}

export default Home
