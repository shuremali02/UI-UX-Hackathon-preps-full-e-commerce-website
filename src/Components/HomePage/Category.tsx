import React from 'react'
import CategoryCard, { CategoryProps } from '../CategoryCard/CategoryCard';

export default function Category() {
    const categories: CategoryProps[] = [
        {
          image: "/images/Category1.svg",
          title: "Phones",
        },
        {
          image: "/images/Category-2.svg",
          title: "Computers",
        },
        {
          image: "/images/Category-3.svg",
          title: "Smart Watch",
        },
        {
          image: "/images/Category-4.svg",
          title: "Camera",
        },
        {
          image: "/images/Category-5.svg",
          title: "HeadPhones",
        },
        {
          image: "/images/Category-6.svg",
          title: "Gaming",
        },
      ];
      
  return (
    <div className='w-full p-7'>
        <div className='flex justify-between items-center py-4'>
        <div className="flex flex-col gap-5 py-4 ">
      <div className='flex items-center gap-2 '>
       <div className='h-10 w-5 bg-Button2 border border-Secondary2 '></div>
        <h1 className='font-medium text-xl text-Secondary2'>Categories</h1>
        </div>
        
        <div>
        <p className='text-[36px] font-semibold '>Browse By Category</p>
        </div>
        </div>
       
      </div>
      <div className='flex gap-[30px] items-center justify-center '>
      {categories.map((cate,index) => (
        <CategoryCard key={index} {...cate}/>
      ))}
      </div>
    </div>
  )
}
