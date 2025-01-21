import React from 'react';
import Image from 'next/image';

const OurStory = () => {
  return (
    <div className='flex flex-col md:flex-row gap-3 py-9 md:gap-0 justify-between'>
    <div className="md:w-1/2 w-full p-4 md:px-12 flex md:justify-center flex-col">
      <h2 className="text-4xl mb-5 font-bold">Our Story</h2>
      <p className="mb-4 text-justify">Launced in 2015, Exclusive is South Asia’s premier online shopping makterplace with an active presense in Bangladesh. Supported by wide range of tailored marketing, data and service solutions, Exclusive has 10,500 sallers and 300 brands and serves 3 millioons customers across the region. </p>
      <p className='text-justify'>Exclusive has more than 1 Million products to offer, growing at a very fast. Exclusive offers a diverse assotment in categories ranging  from consumer.</p>
    </div>
    <div>
        <Image
        src={"/images/About.svg"}
        alt='About image'
        width={837}
        height={609}/>
    </div>
    
    </div>
  );
};

export default OurStory;
