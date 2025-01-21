import React from 'react';
import Image from 'next/image';
import { Input } from '../ui/input';
import Link from 'next/link';
import { FcGoogle } from "react-icons/fc";

export default function SignupPage() {
  return (
    <div className="w-full h-screen flex">
      {/* Left Section */}
    <div className="bg-[#CBE4E8] w-1/2 flex items-center justify-center">
        <Image 
          src="/images/Auth.svg" 
          alt="loginImage" 
          width={919} 
          height={706} 
          className="object-contain"
        />
      </div>

      {/* Right Section */}
      <div className="w-1/2 flex items-center justify-center">
        <div className="max-w-md w-full px-8">
          <h1 className="text-3xl font-bold text-black mb-2">Create an account</h1>
          <p className="text-gray-400 mb-6">Enter your details below</p>
          <form className="space-y-4">
            <div>
              <Input 
                type="text" 
                placeholder="Name" 
                className="border border-gray-300 rounded-md w-full p-3 text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>
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
          <div className="flex flex-col space-y-3 mt-6">
            <button className="w-full bg-red-500 text-white py-3 rounded-md text-sm font-medium hover:bg-red-600 transition">
              Create Account
            </button>
            <button className="w-full bg-white border  border-gray-300 text-sm text-black py-3 rounded-md flex items-center justify-center space-x-2 hover:bg-gray-100 transition">
                <span className='flex items-center mr-2'>< FcGoogle size={24}/></span>
              Sign up with Google
            </button>
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
  );
}
