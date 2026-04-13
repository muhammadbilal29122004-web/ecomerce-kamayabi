import { encodeCategoryPath } from '../utils/category'

import surahBanner from '../assets/KAMAYABI/surrahbanner.png'
import naqshBanner from '../assets/naqsh image.jpg'
import taweezBanner from '../assets/taveez image.jpg'
import istikharaBanner from '../assets/istikhara.jpg'
import lohBanner from '../assets/KAMAYABI/loh.jpeg'
import caraBanner from '../assets/KAMAYABI/cara.jpg'
import ringBanner from '../assets/KAMAYABI/ring surah.jpg'
import stoneBanner from '../assets/stone.jpg'

import surrahCard1 from '../assets/KAMAYABI/surrahcard1.png'
import surrahCard2 from '../assets/KAMAYABI/surrahcard2.png'
import surrahCard3 from '../assets/KAMAYABI/surrahcard3.png'
import surrahCard4 from '../assets/KAMAYABI/surrahcard4.png'

import naqshImg from '../assets/naqsh image.jpg'
import naqshWebp from '../assets/KAMAYABI/naqsh.webp'

import taveezImg from '../assets/taveez image.jpg'
import taweezKam from '../assets/KAMAYABI/taweez.jpg'

import istikharaImg from '../assets/istikhara.jpg'
import istikharaKam from '../assets/KAMAYABI/istikhara.jpg'

import lohImg from '../assets/KAMAYABI/loh.jpeg'

import caraImg from '../assets/KAMAYABI/cara.jpg'

import ringSurah from '../assets/ring surah.jpg'
import ringSurahKam from '../assets/KAMAYABI/ring surah.jpg'
import appendentSurah from '../assets/appendent surah.jpg'
import bengalsSurah from '../assets/bengals surah.jpg'

import stoneImg from '../assets/stone.jpg'
import stoneKam from '../assets/KAMAYABI/stone.jpg'

/** Navbar links + home page banner + 4 preview images per category (single source of truth). */
export const navCategoryShowcase = [
    {
        label: 'Surah',
        path: encodeCategoryPath('Surah'),
        displayText: 'Paak Qurani Surah — adab o ehtimaam',
        bannerTitle: 'Surah',
        banner: surahBanner,
        images: [surrahCard1, surrahCard2, surrahCard3, surrahCard4],
        pageDesc:
            'Paak Qurani Surah — adab o ehtimaam ke sath tayar. Roohani sukoon aur hifazat ke liye mukhtalif Surah dekhein.',
    },
    {
        label: 'Naqsh',
        path: encodeCategoryPath('Naqsh'),
        displayText: 'Roohani naqsh — hifazat aur barkat',
        bannerTitle: 'Naqsh',
        banner: naqshBanner,
        images: [naqshImg, naqshWebp, naqshImg, naqshWebp],
        pageDesc: 'Mukhtalif naqsh — paabandi aur ehtimaam ke sath tayar kiye gaye.',
    },
    {
        label: 'Taveez',
        path: encodeCategoryPath('Taveez'),
        displayText: 'Barkat ka taveez — aman o hifazat',
        bannerTitle: 'Taveez',
        banner: taweezBanner,
        images: [taveezImg, taweezKam, taveezImg, taweezKam],
        pageDesc: 'Roohani hifazat aur sukoon ke liye tayar shuda taveez dekhein.',
    },
    {
        label: 'Istikhara',
        path: encodeCategoryPath('Istikhara'),
        displayText: 'Istikhara — rehnumai ka zariya',
        bannerTitle: 'Istikhara',
        banner: istikharaBanner,
        images: [istikharaImg, istikharaKam, istikharaImg, istikharaKam],
        pageDesc: 'Istikhara o roohani rehnumai — ehtimaam ke sath.',
    },
    {
        label: 'Loh',
        path: encodeCategoryPath('Loh'),
        displayText: 'Loh — qurani barkat',
        bannerTitle: 'Loh',
        banner: lohBanner,
        images: [lohImg, lohImg, lohImg, lohImg],
        pageDesc: 'Loh e qurani o roohani fayedah ke liye muntakhib ashya.',
    },
    {
        label: 'cara',
        path: encodeCategoryPath('cara'),
        displayText: 'Cara — muntakhib ashya',
        bannerTitle: 'Cara',
        banner: caraBanner,
        images: [caraImg, caraImg, caraImg, caraImg],
        pageDesc: 'Cara category ki mukhtalif ashya aur tafseel.',
    },
    {
        label: 'ring',
        path: encodeCategoryPath('ring'),
        displayText: 'Angoothi — Surah ke sath',
        bannerTitle: 'Ring',
        banner: ringBanner,
        images: [ringSurah, ringSurahKam, appendentSurah, bengalsSurah],
        pageDesc: 'Angoothee jisme roohani fayedah aur style — mukhtalif design.',
    },
    {
        label: 'stone',
        path: encodeCategoryPath('stone'),
        displayText: 'Pathar — khaas intikhab',
        bannerTitle: 'Stone',
        banner: stoneBanner,
        images: [stoneImg, stoneKam, stoneImg, stoneKam],
        pageDesc: 'Mukhtalif pathar o stone ki range — quality ke sath.',
    },
]

export const navBarLinks = navCategoryShowcase.map((c) => ({
    label: c.label,
    to: c.path,
}))
