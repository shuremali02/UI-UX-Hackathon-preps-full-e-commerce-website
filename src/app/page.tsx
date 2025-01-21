import HeroSection from '@/Components/HeroSec/HeroSec'
import Category from '@/Components/HomePage/Category'
import CategoryBanner from '@/Components/HomePage/CategoryBanner'
import FlashSale from '@/Components/HomePage/FlashSale'
import OurProducts from '@/Components/HomePage/OurProduct'
import Product from '@/Components/HomePage/Product'
import Speciality from '@/Components/HomePage/Speciality'
import React from 'react'

export default function HomePage() {
  return (
    <div>
      <HeroSection/>
      <FlashSale/>
      <Category/>
      <Product/>
      <CategoryBanner/>
      <OurProducts/>
      <Speciality/>
 
  </div>
  )
}
