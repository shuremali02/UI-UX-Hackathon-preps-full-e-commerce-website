import React from 'react';
import Image from 'next/image';

export interface CategoryProps{
    image:string;
    title:string;
}
export default function CategoryCard({image,title}:CategoryProps) {
  return (
    <div className='w-full max-w-[170px] py-5 gap-4 border border-bg  flex flex-col justify-center items-center hover:bg-Secondary2'>
      <Image 
      src={image}
      alt={title}
      width={56}
      height={56}
      className='text-bg hover:text-text'
      />
      <h1>{title}</h1>
    </div>
  )
}
