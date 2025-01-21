import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaFacebookF } from "react-icons/fa";
import { CiTwitter } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { TiSocialLinkedin } from "react-icons/ti";
import { VscSend } from "react-icons/vsc";

import { FaRegCopyright } from "react-icons/fa6";
import { Input } from '../ui/input';

export default function Footer() {
  return (

    <footer className="bg-bg py-9">
      {/* Grid Layout for Footer Content */}

      <div className="max-w-7xl space-y-8 px-4 md:px-8 w-full pt-3  ">
<div className='mx-auto max-w-[1170px] w-full'>
        <div className="grid grid-cols-1 md:grid-cols-5 py-9  gap-8 text-center md:text-left">
        <div>
            <h1 className="font-medium text-md mb-4  ">Exclusive</h1>
            <div className='text-sm flex flex-col space-y-3 text-text'>
              <p>Subscribe</p>
              <p>Get 10% off your first order</p>
            </div>
            <div className='flex border border-1 border-text h-12 items-center p-1 w-full text-text'>
              <Input type="text" placeholder='Enter your email' className='bg-transparent text-Text1' /> <VscSend size={24} />
            </div>
          </div>
          {/* Column 1: Popular Destinations */}
          <div>
            <h1 className="font-medium text-md mb-4  ">Support</h1>
            <div className='text-sm flex flex-col space-y-3 text-text'>
              <p>111 Bijoy sarani, Dhaka,  DH 1515, Bangladesh.</p>
              <p>exclusive@gmail.com</p>
              <p>+88015-88888-9999</p>
            </div>
          </div>
          {/* Column 2: Quick Links */}
          <div>
            <h3 className="font-medium text-lg mb-4">Account</h3>
            <div className='flex flex-col text-sm text-text space-y-3 '>
              <Link href="#">My Account</Link>
              <Link href="/Login">Login / Register</Link>
              <Link href="Cart">Cart</Link>
              <Link href="/Wishlist">Wishlist</Link>
              <Link href="/Product">Shop</Link>
            </div>
          </div>
          {/* Column 3: Stay Connected */}
          <div>
            <h1 className="font-medium text-md mb-4">Quick Link</h1>
            <div className='flex flex-col space-y-3 text-text'>
              <Link href={"#"} >Privacy Policy</Link>
              <Link href={"#"} >Terms Of Use</Link>
              <Link href={"#"} >FAQ</Link>
              <Link href={"/ContactUs"} >Contact</Link>
            </div>
          </div>
          <div >
            <h3 className='text-md font-medium mb-4 text-text'>Download App</h3>
            <div className='flex flex-col space-y-3 text-xs text-Text1'>
              <p>Save $3 with App New User Only</p>
              <div className='flex '>
                <Image
                  src={"/images/Qrcode 1.svg"}
                  alt="QR-code"
                  width={76}
                  height={76}
                  className="object-cover"
                />
                <div className='flex flex-col gap-3 w-[118px] h-[41px] ml-2'>
                  <div>
                    <Image
                      src={"/images/label-logo.svg"}
                      alt="Google-Playstore"
                      width={103}
                      height={30}
                    /></div>
                  <div>
                    <Image
                      src={"/images/app-store.svg"}
                      alt="Google-Playstore"
                      width={103}
                      height={30}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className='pt-5 flex max-w-[168px]  justify-center text-text gap-6'>
              <FaFacebookF size={24} />
              <CiTwitter size={28} />{""}
              < FaInstagram size={24} />
              < TiSocialLinkedin size={28} />

            </div>
          </div>
        </div>
        </div>
      </div>
      {/* Footer Bottom Section */}
      <div className="border-t pt-4  py-4  items-center justify-center flex ">
        <div className="flex  gap-3 text-sm text-Text1 ">
          <FaRegCopyright /><p>Copyright Rimel 2022. All right reserved</p>
        </div>
      </div>
    </footer>
  )
}
