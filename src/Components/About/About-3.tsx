import React from 'react';
import Image from 'next/image';

export interface CategoryProps {
  image: string;
  title: string;
  description: string;
}

export default function AboutSec() {
  const data = [
    {
      image: "/images/icon_shop.svg",
      title: "10.5k",
      description: "Sallers active over side",
    },
    {
      image: "/images/Group.svg",
      title: "33k",
      description: "Monthly Product Sale",
    },
    {
      image: "/images/Vector (3).svg",
      title: "45.5k",
      description: "Costumer active in our site",
    },
    {
      image: "/images/Group.svg",
      title: "25k ",
      description: "Anual gross sale in our site",
    },
  ];
  return (
    <div className="grid grid-cols sm:grid-cols-3 md:grid-cols-4 py-9 gap-4">
      {data.map((team, index) => (
        <div key={index}>
          <AboutSecCard {...team} />
        </div>
      ))}
    </div>
  );
}

function AboutSecCard({ image, title, description }: CategoryProps) {
  return (
    <div className="group w-full max-w-md py-5 gap-4 border border-gray-500  flex flex-col justify-center items-center hover:bg-Secondary2 hover:text-white transition duration-300">
      <div className="w-16 h-16 bg-bg  rounded-full flex items-center justify-center shadow-md shadow-gray-400">
        <Image 
          src={image} 
          alt={title} 
          width={40} 
          height={40} 
          className="rounded-full group-hover:brightness-0 transition duration-300"
        />
      </div>
      <h1 className="text-2xl font-bold">{title}</h1>
      <p>{description}</p>
    </div>
  );
}
