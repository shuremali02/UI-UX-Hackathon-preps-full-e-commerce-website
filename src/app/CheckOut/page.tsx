import React from 'react';
import Image from 'next/image';

export default function CheckoutPage() {
  return (
    <div className="w-full h-screen p-8 flex flex-col">
      <div className="flex flex-wrap">
        {/* Billing Details Section */}
        <div className="w-full md:w-2/3 pr-4">
          <h1 className="text-2xl font-bold mb-4">Billing Details</h1>
          <form className="space-y-4">
            <div>
              <input 
                type="text" 
                placeholder="First Name*" 
                className="w-full border border-gray-300 p-3 rounded-md text-sm focus:ring-2 focus:ring-red-500 focus:outline-none"
              />
            </div>
            <div>
              <input 
                type="text" 
                placeholder="Company Name" 
                className="w-full border border-gray-300 p-3 rounded-md text-sm focus:ring-2 focus:ring-red-500 focus:outline-none"
              />
            </div>
            <div>
              <input 
                type="text" 
                placeholder="Street Address*" 
                className="w-full border border-gray-300 p-3 rounded-md text-sm focus:ring-2 focus:ring-red-500 focus:outline-none"
              />
            </div>
            <div>
              <input 
                type="text" 
                placeholder="Apartment, floor, etc. (optional)" 
                className="w-full border border-gray-300 p-3 rounded-md text-sm focus:ring-2 focus:ring-red-500 focus:outline-none"
              />
            </div>
            <div>
              <input 
                type="text" 
                placeholder="Town/City*" 
                className="w-full border border-gray-300 p-3 rounded-md text-sm focus:ring-2 focus:ring-red-500 focus:outline-none"
              />
            </div>
            <div>
              <input 
                type="text" 
                placeholder="Phone Number*" 
                className="w-full border border-gray-300 p-3 rounded-md text-sm focus:ring-2 focus:ring-red-500 focus:outline-none"
              />
            </div>
            <div>
              <input 
                type="email" 
                placeholder="Email Address*" 
                className="w-full border border-gray-300 p-3 rounded-md text-sm focus:ring-2 focus:ring-red-500 focus:outline-none"
              />
            </div>
            <div className="flex items-center space-x-2">
              <input type="checkbox" id="save-info" className="w-4 h-4" />
              <label htmlFor="save-info" className="text-sm text-gray-500">Save this information for faster check-out next time</label>
            </div>
          </form>
        </div>

        {/* Order Summary Section */}
        <div className="w-full md:w-1/3">
          <div className="border border-gray-300 rounded-md p-4">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-4">
                <Image 
                  src="/images/Monitor-Cart.svg" 
                  alt="LCD Monitor" 
                  width={50} 
                  height={50} 
                  className="object-contain"
                />
                <span>LCD Monitor</span>
              </div>
              <span>$650</span>
            </div>
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-4">
                <Image 
                  src="/images/wishlist7.svg" 
                  alt="Gamepad" 
                  width={50} 
                  height={50} 
                  className="object-contain"
                />
                <span>Hd Gamepad</span>
              </div>
              <span>$1100</span>
            </div>
            <hr className="my-4" />
            <div className="flex items-center justify-between mb-2">
              <span>Subtotal:</span>
              <span>$1750</span>
            </div>
            <div className="flex items-center justify-between mb-2">
              <span>Shipping:</span>
              <span>Free</span>
            </div>
            <hr className="my-4" />
            <div className="flex items-center justify-between font-bold mb-6">
              <span>Total:</span>
              <span>$1750</span>
            </div>
            <div className="space-y-4">
              <div>
                <label className="flex items-center space-x-2">
                  <input type="radio" name="payment" className="w-4 h-4" />
                  <span>Bank</span>
                  <Image 
                    src="/images/visa-mastercard.png" 
                    alt="Payment Options" 
                    width={80} 
                    height={20} 
                    className="ml-2"
                  />
                </label>
              </div>
              <div>
                <label className="flex items-center space-x-2">
                  <input type="radio" name="payment" className="w-4 h-4" />
                  <span>Cash on delivery</span>
                </label>
              </div>
              <div className="flex space-x-2">
                <input 
                  type="text" 
                  placeholder="Coupon Code" 
                  className="w-2/3 border border-gray-300 p-3 rounded-md text-sm focus:ring-2 focus:ring-red-500 focus:outline-none"
                />
                <button className="w-1/3 bg-gray-800 text-white p-3 rounded-md text-sm hover:bg-gray-700">Apply Coupon</button>
              </div>
              <button className="w-full bg-red-500 text-white py-3 rounded-md text-sm font-medium hover:bg-red-600 transition">
                Place Order
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
