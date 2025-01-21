import Link from 'next/link'
import React from 'react'
import { Input } from '../ui/input'
import Image from 'next/image'

export default function LoginPage() {
  return (
    <div className="w-full h-screen flex mb-12 py-5">
    {/* Left Section */}
  <div className="bg-[#CBE4E8] w-[805px] flex items-center justify-center">
      <Image 
        src="/images/Auth.svg" 
        alt="loginImage" 
        width={919} 
        height={706}
        objectFit='cover' 
        className="object-contain"
      />
    </div>

    {/* Right Section */}
    <div className="w-1/2 flex items-center justify-center">
      <div className="max-w-md w-full px-8">
        <h1 className="text-3xl font-bold text-black mb-2">Log in to Exclusive</h1>
        <p className="text-gray-400 mb-6">Enter your details below</p>
        <form className="space-y-4">
          <div>
            <Input 
              type="text" 
              placeholder="Email or Phone Number" 
              className="border border-gray-300 rounded-md w-full p-3 text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>
          <div>
            <Input 
              type="password" 
              placeholder="Password" 
              className="border border-gray-300 rounded-md w-full p-3 text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>
        </form>
        <div className="flex flex-row justify-between space-y-3 mt-6">
          <button className="p-3 px-12 bg-red-500 text-white  rounded-md text-md font-medium hover:bg-red-600 transition">
            Log in 
          </button>
          <Link className='text-red-500' href={"#"}>Forget Password? </Link>
          </div>
        <p className="text-gray-500 text-sm mt-6 text-center">
          Already have an account?{" "}
          <Link href="/Login" className="text-blue-500 hover:underline">
            Log in
          </Link>
        </p>
      </div>
    </div>
  </div>
  )
}
