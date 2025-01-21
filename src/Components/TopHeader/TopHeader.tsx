import React from 'react';
import { IoIosArrowDown } from "react-icons/io";

export default function TopHeader() {
  return (
    <div className='bg-bg hidden w-full text-sm text-text'>
      <div className='md:max-w[1440px]  flex justify-end items-center py-2 px-4 mx-auto gap-[231px]'>
        <div className=' '>
          Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%! {" "}
          <span className=' underline cursor-pointer '> Shop Now</span>
        </div>

        <div className='gap-2 flex items-center '>
          <select defaultValue={"en"} className='bg-bg text-text border-none cursor-pointer outline-none' >
            <option value="en">English</option>
            <option value="fr">French</option>
            <option value="jp">Japnese</option>
          </select>
          

        </div>
      </div>
    </div>
  )
}
