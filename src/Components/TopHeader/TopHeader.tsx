import React from 'react';
import { IoIosArrowDown } from "react-icons/io";

export default function TopHeader() {
  return (
    <div className='bg-bg md:max-w[1440px] w-full flex items-center justify-center'>
        <div className='w-[474px]  '>
        <p className=' text-sm text-text'>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!</p>
         </div>
         <div className='w-[68px] '>
            <h1 className='text-sm font-semibold text-text underline'>ShopNow</h1>
         </div>
         <div className='gap-[5px] text-text flex items-end justify-end'>
            <h1 className=''>English</h1>
            <IoIosArrowDown/>

         </div>

    </div>
  )
}
