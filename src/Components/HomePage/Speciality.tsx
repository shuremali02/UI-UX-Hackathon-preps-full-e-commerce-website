import React from 'react';
import Image from 'next/image';

export default function Speciality() {
    const button :CardProps[] = [
        {
            image:"/images/Bottom-1.svg",
            title:"FREE AND FAST DELIVERY",
            description:"Free delivery for all orders over $140",
        },
        {
            image:"/images/Bottom-2.svg",
            title:"24/7 CUSTOMER SERVICE",
            description:"Friendly 24/7 customer support",
        },
        {
            image:"/images/Bottom-3.svg",
            title:"MONEY BACK GUARANTEE",
            description:"We reurn money within 30 days",
        },
    ]
  return (
    <div className='grid grid-cols md:grid-cols-3 py-7 gap-[26px] mx-auto w-full'>
        {button.map((Logo,index)=>(
            <Card key={index} {...Logo}/> 
        ))}

    </div>
  )
}

interface CardProps{
    image:string,
    title:string,
    description:string,

}
export function Card({image,title, description}:CardProps) {
  return (
    <div className='flex items-center justify-center flex-col space-y-2 p-7'>
        <div className='w-14 h-14 rounded-full bg-Primary1 flex items-center justify-center '> 
            <Image src={image} alt={title} height={38} width={38} className='rounded-full bg-bg p-2 ' />
        </div>
        <h1 className='text-[26px] font-semibold'>{title}</h1>
        <p className='text-sm'>{description}</p>
    </div>
  )
}
