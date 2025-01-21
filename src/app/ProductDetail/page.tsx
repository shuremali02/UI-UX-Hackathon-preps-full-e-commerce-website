"use client";
import { PiShoppingCart } from "react-icons/pi";
import { FaRegHeart } from "react-icons/fa";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import React from "react";
import Image from "next/image";

export default function ProductId() {
  const handleCart = () => {
    alert(`Item added to the cart`);
  };

  return (
    <div className="max-w-6xl mx-auto p-8 bg-white shadow-lg rounded-lg mt-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="flex gap-2">
        {/* Main Image and Thumbnails */}
        <div className="flex flex-col gap-3">
          <div className="bg-Secondary  flex items-center justify-center rounded w-[150px] h-[138px]">
            <Image
              src={"/images/productDetail.svg"}
              alt={`Havic HV G-92 Gamepad`}
              height={130}
              width={145}
              className="p-3 rounded-lg object-cover cursor-pointer hover:ring-2 hover:ring-blue-600"
            />
            </div>
            <div className="bg-Secondary  flex items-center justify-center rounded w-[150px] h-[138px]">
            <Image
              src={"/images/productDetail.svg"}
              alt={`Havic HV G-92 Gamepad`}
              height={130}
              width={145}
              className="p-3 rounded-lg object-cover cursor-pointer hover:ring-2 hover:ring-blue-600"
            />
            </div>
            <div className="bg-Secondary flex items-center justify-center rounded w-[150px] h-[138px]">
            <Image
              src={"/images/productDetail.svg"}
              alt={`Havic HV G-92 Gamepad`}
              height={130}
              width={145}
              className="p-3 rounded-lg object-cover cursor-pointer hover:ring-2 hover:ring-blue-600"
            />
            </div>
            <div className="bg-Secondary flex items-center justify-center  rounded w-[150px] h-[138px]">
            <Image
              src={"/images/productDetail.svg"}
              alt={`Havic HV G-92 Gamepad`}
              height={130}
              width={145}
              className="p-3 rounded-lg object-cover cursor-pointer hover:ring-2 hover:ring-blue-600"
            />
            </div>
          </div>
        <div className="flex bg-Secondary rounded items-center">
          <Image
            src="/images/productDetail.svg"
            alt="Havic HV G-92 Gamepad"
            className="p-2 rounded-lg w-full h-auto object-cover mb-6"
            height={400}
            width={400}
          />
         
        </div>
        </div>

        {/* Product Details */}
        <div>
          <h1 className="text-4xl font-bold text-gray-800 mb-2">
            Havic HV G-92 Gamepad
          </h1>

          {/* Rating */}
          <div className="flex items-center gap-2 mb-4">
            {Array(4)
              .fill(0)
              .map((_, index) => (
                <AiFillStar key={index} className="text-yellow-500" size={20} />
              ))}
            <AiOutlineStar className="text-gray-400" size={20} />
            <span className="text-sm text-gray-600">(150 Reviews)</span>
          </div>

          {/* Price and Availability */}
          <p className="text-2xl font-semibold text-gray-700 mb-4">$192.00</p>
          <p className="text-lg text-gray-600 mb-6 leading-relaxed">
            PlayStation 5 Controller Skin High quality vinyl with air channel
            adhesive for easy bubble free install & mess free removal. Pressure
            sensitive.
          </p>
          <div className="mb-8">
            <h3 className="text-lg font-medium text-gray-800">
              Availability:
              <span className="text-lg font-medium text-green-600 ml-2">
                In Stock
              </span>
            </h3>
          </div>

          {/* Color Options */}
          <div className="flex items-center gap-4 mb-6">
            <span className="text-gray-700 font-medium">Colours:</span>
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-full bg-gray-700 cursor-pointer border-2 border-gray-300 hover:border-black"></div>
              <div className="w-6 h-6 rounded-full bg-red-500 cursor-pointer border-2 border-gray-300 hover:border-black"></div>
            </div>
          </div>

          {/* Size Options */}
          <div className="flex items-center gap-4 mb-6">
            <span className="text-gray-700 font-medium">Size:</span>
            <div className="flex gap-2">
              {["XS", "S", "M", "L", "XL"].map((size, index) => (
                <button
                  key={index}
                  className={`px-4 py-2 rounded-md border text-sm font-medium ${size === "M"
                      ? "bg-red-600 text-white"
                      : "border-gray-300 text-gray-700"
                    }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity Selector */}
          <div className="flex items-center gap-4 mb-6">
            <span className="text-gray-700 font-medium">Quantity:</span>
            <div className="flex items-center border border-gray-300 rounded-lg">
              <button className="px-4 py-2 text-lg font-bold text-gray-700 hover:bg-gray-200">
                -
              </button>
              <span className="px-4 py-2 text-lg">2</span>
              <button className="px-4 py-2 text-lg font-bold text-gray-700 hover:bg-gray-200">
                +
              </button>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-6">
            <button
              onClick={handleCart}
              className="flex items-center gap-2 bg-red-600 text-white px-5 py-3 rounded-lg hover:bg-red-700 shadow-lg"
            >
              <PiShoppingCart size={24} />
              <span className="text-lg font-medium">Buy Now</span>
            </button>
            <button className="flex items-center gap-2 bg-gray-200 text-gray-700 px-5 py-3 rounded-lg hover:bg-gray-300 shadow-lg">
              <FaRegHeart size={24} />
              <span className="text-lg font-medium">Wishlist</span>
            </button>
          </div>
        </div>
      </div>

      {/* Additional Information Section */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 border-t pt-8">
        <div className="flex items-center gap-4">
          <Image
            src="/icons/free-delivery.svg"
            alt="Free Delivery"
            width={50}
            height={50}
          />
          <div>
            <h3 className="text-lg font-medium text-gray-800">Free Delivery</h3>
            <p className="text-sm text-gray-600">
              Enter your postal code for delivery availability.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <Image
            src="/icons/return-delivery.svg"
            alt="Return Delivery"
            width={50}
            height={50}
          />
          <div>
            <h3 className="text-lg font-medium text-gray-800">
              Return Delivery
            </h3>
            <p className="text-sm text-gray-600">
              Free 30 Days Delivery Returns. Details.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
